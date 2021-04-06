import { gql } from '@apollo/client'

export const GET_LOCATION_STATE = gql`
  query GetRestaurantLocation {
    resturantLocationName @client
  }
`
