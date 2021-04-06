import { ApolloClient, InMemoryCache } from '@apollo/client'
import { date, cafeteriaName, resturantLocationName } from './field'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          date,
          cafeteriaName,
          resturantLocationName,
        },
      },
    },
  }),
})
