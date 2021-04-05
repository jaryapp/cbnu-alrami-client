import { useQuery } from '@apollo/client'

import Dialog from '../shared/Dialog'
import StyledRestaurant from './style'
import Name from './Name'
import MapDialog from './Map'
import Shop from './Shop'
import Loading from '@components/shared/Loading'
import { RestaurantNames } from '@src/constants'
import { GET_LOCATION_STATE, GET_RESTAURANTS } from '@src/apollo/quries'

export interface Menu {
  menu: string
  price: number
}
export interface RestaurantDetail {
  address: string
  location: string
  longitude?: number
  latitude?: number
  name: string
  details: Menu[]
  time: string
  break: string
}

export interface RestaurantData {
  restaurants: RestaurantDetail[]
}

function Restaurant() {
  const NAMES = [
    RestaurantNames.Main,
    RestaurantNames.Middle,
    RestaurantNames.Back,
    RestaurantNames.Side,
    RestaurantNames.West,
  ]
  const { data: location } = useQuery(GET_LOCATION_STATE)
  const { loading, data: restaurants } = useQuery<RestaurantData>(GET_RESTAURANTS, {
    variables: { location: location.resturantName },
  })

  if (loading || !restaurants) return <Loading />

  let openDialog: Function
  const openCallback = (cb: Function) => {
    openDialog = cb
  }

  return (
    <StyledRestaurant>
      <div className="names">
        {NAMES.map(name => (
          <Name key={name} {...{ name }} />
        ))}
      </div>
      <div onClick={() => openDialog()}>
        <img src="/img/map.png" alt="지도" width="100%" />
      </div>
      <div className="shop-list">
        {restaurants.restaurants.map(restaurant => (
          <Shop key={restaurant.name} {...{ restaurant }} />
        ))}
      </div>
      <MapDialog {...{ openCallback }} />
    </StyledRestaurant>
  )
}

export default Dialog({ title: '맛집', ContentComponent: Restaurant })
