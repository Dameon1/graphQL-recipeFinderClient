import ApolloClient, { InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';
const cache = new InMemoryCache();

const defaultState = {
  CurrentState: {
    __typename: 'CurrentState',
    userRecipes:[1,2,3,4,5],//users stored recipes
    apiRecipes:[],//api recipes
    currentApiRecipeDisplayed:[],
    loading: false,
    error: null,
    returningResults:false,
    viewingSingleItem:false,
    isSearching:false,
    recipes:[],
    authToken: null, 
    currentUser: "myself",   
    loggedIn:false,
    number:1
  },
  
}

export const client = new ApolloClient({
    clientState:{     
      defaults: defaultState,
      resolvers: {
        Mutation: {
          updateState: (_,{index,value},{cache}) => {            
            updateGame: (_, { index, value }, { cache }) => {
              const query = gql`
                query {
                  currentState @client {
                    number
                  }
                }
              `
              const previous = cache.readQuery({ query })
              const data = {
                currentGame: {
                  ...previous.currentGame,
                  number: value
                }
              }
      
              cache.writeQuery({ query, data })
              return null;
          }
        }
      }
    },  
    uri: 'http://localhost:4001',    
    onError: ({ networkError, graphQLErrors }) => {
      console.log('graphQLErrors', graphQLErrors)
      console.log('networkError', networkError)
    },
  cache
}})