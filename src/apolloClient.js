import ApolloClient, { InMemoryCache } from 'apollo-boost';
import {resolvers} from './resolvers';
const cache = new InMemoryCache();

const defaultState = {
  currentState: {
    __typename: 'currentState',
    currentSearchTerm:"",
    currentUser: "myself",
    currentRecipe: 0
  }  
}

export const client = new ApolloClient({
  clientState:{     
    defaults: defaultState,
    resolvers,
    cache,
  },
  uri: 'http://localhost:4001',
  credentials: 'include',   
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  },
   
});