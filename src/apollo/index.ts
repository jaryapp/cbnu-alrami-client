import { ApolloClient, InMemoryCache } from '@apollo/client'
import { date, cafeteriaName, resturantLocationName } from './field'

export const client = new ApolloClient({
  uri: 'http://172.30.1.31:4000/graphql',
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
