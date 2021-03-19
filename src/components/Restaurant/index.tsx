import { useQuery, gql } from '@apollo/client'

import Dialog from '../shared/Dialog'
import StyledRestaurant from './style'
import Name from './Name'
import Map from './Map'
import Shop from './Shop'
import { GET_LOCATION_STATE } from '@src/apollo/quries'

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

const GET_RESTAURANT = gql`
  query getRestaurant($location: String!) {
    restaurants(location: $location) {
      name
      details {
        menu
        price
      }
      time
      break
    }
  }
`

function Restaurant() {
  const NAMES = ['중문', '쪽문', '정문', '후문']
  const { data: locationData } = useQuery(GET_LOCATION_STATE)
  const { data } = useQuery<RestaurantData>(GET_RESTAURANT, {
    variables: { location: locationData.resturantName },
  })

  return (
    <StyledRestaurant>
      <div className="names">
        {NAMES.map(name => (
          <Name key={name} {...{ name }} />
        ))}
      </div>
      <Map />
      <div className="shop-list">
        {data?.restaurants.map(restaurant => (
          <Shop key={restaurant.name} {...{ restaurant }} />
        ))}
      </div>
    </StyledRestaurant>
  )
}

export default Dialog({ title: '맛집', ContentComponent: Restaurant })
