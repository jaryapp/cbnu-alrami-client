import { gql } from '@apollo/client'

export const GET_RESTAURANTS_BY_LOCATION = gql`
  query getRestaurantsByLocation($location: String!) {
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

export const GET_ALL_RESTAURANTS = gql`
  query getAllRestaurants {
    restaurants {
      address
      location
      longitude
      latitude
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
