import { ApolloClient, InMemoryCache } from '@apollo/client'
import { date, cafeteriaName, resturantName } from './field'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          date,
          cafeteriaName,
          resturantName,
        },
      },
    },
  }),
})
