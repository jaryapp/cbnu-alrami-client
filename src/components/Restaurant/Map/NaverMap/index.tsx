import { useQuery, gql } from '@apollo/client'
import { useEffect, memo } from 'react'

interface Menu {
  menu: string
  price: number
}
interface RestaurantDetail {
  address?: string
  location: string
  longitude?: number
  latitude?: number
  name: string
  details?: Menu[]
  time: string
  break: string
}

interface RestaurantData {
  restaurants: RestaurantDetail[]
}

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
  const GET_RESTAURANTS = gql`
    query getRestaurant {
      restaurants {
        name
        details {
          menu
          price
        }
        longitude
        latitude
        time
        break
      }
    }
  `
  const CBNU_LATITUDE = 36.62903849870408
  const CBNU_LONGITUDE = 127.45635082700974

  const { data } = useQuery<RestaurantData>(GET_RESTAURANTS)
  const mapStyle = {
    width: '100vw',
    height: '100vh',
  }

  useEffect(() => {
    const initMap = () => {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(CBNU_LATITUDE, CBNU_LONGITUDE),
        zoom: 16,
      })
      data?.restaurants.forEach(restaurant => {
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
  }, [data?.restaurants, onSelectRestaurant])

  return <div id="map" style={mapStyle} />
}

export default memo(NaverMap)
