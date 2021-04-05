import { useQuery } from '@apollo/client'
import { useEffect, memo } from 'react'

import { RestaurantData } from '@components/Restaurant'
import { GET_ALL_RESTAURANTS } from '@src/apollo/quries'
import Loading from '@components/shared/Loading'

interface NaverMapProps {
  onSelectRestaurant: Function
}

function makeMarker(map: naver.maps.Map, position: naver.maps.LatLng) {
  return new naver.maps.Marker({
    map,
    position,
  })
}

function NaverMap({ onSelectRestaurant }: NaverMapProps) {
  const CBNU_LATITUDE = 36.62903849870408
  const CBNU_LONGITUDE = 127.45635082700974

  const { data: restaurants, loading } = useQuery<RestaurantData>(GET_ALL_RESTAURANTS)

  const mapStyle = {
    width: '100vw',
    height: '100vh',
  }

  useEffect(() => {
    if (!restaurants) return
    const initMap = () => {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(CBNU_LATITUDE, CBNU_LONGITUDE),
        zoom: 16,
      })
      restaurants.restaurants.forEach(restaurant => {
        const marker = makeMarker(map, new naver.maps.LatLng(restaurant.latitude || 0, restaurant.longitude || 0))
        naver.maps.Event.addListener(marker, 'click', e => {
          map.panTo(e.coord, { duration: 300, easing: 'easeOutCubic' })
          onSelectRestaurant(restaurant)
          e.domEvent.stopPropagation()
        })
      })
      return map
    }
    initMap()
  }, [restaurants, onSelectRestaurant])

  if (loading || !restaurants) return <Loading />

  return <div id="map" style={mapStyle} />
}

export default memo(NaverMap)
