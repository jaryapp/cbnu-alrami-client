import { gql } from '@apollo/client'

export const GET_MENU = gql`
  query getMenu($name: String!, $date: String!) {
    cafeteria(name: $name, date: $date) {
      date
      name
      breakfast
      lunch
      dinner
    }
  }
`
