import { gql } from '@apollo/client'

export const GET_LOCATION_STATE = gql`
  query GetRestaurant {
    resturantName @client
  }
`
