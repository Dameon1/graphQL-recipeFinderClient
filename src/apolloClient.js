import ApolloClient, { InMemoryCache } from 'apollo-boost';
//import gql from 'graphql-tag';
import GET_CURRENT_STATE from './actions/getCurrentState';
const cache = new InMemoryCache();

const defaultState = {
  currentState: {
    __typename: 'currentState',
    searchTerm: "myself",
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
    currentSearchTerm:"",
    number: 1    
  },  
}

export const client = new ApolloClient({
    clientState:{     
      defaults: defaultState,
      resolvers: {
        Mutation: {
          updateCurrentSearchTerm: (_,{value},{cache}) => {
            const query = GET_CURRENT_STATE
            const previousState = cache.readQuery({ query });
            const data = {
              ...previousState,
              currentState: {
                ...previousState.currentState,
                currentSearchTerm: value
              }
           }
           cache.writeData({query,data})
           console.log(data)
           return ({
             data,
             value,
             __typename:"updateCurrentSearchTerm"
           })   
           }
          },
          
        },
      },
    uri: 'http://localhost:4001',    
    onError: ({ networkError, graphQLErrors }) => {
      console.log('graphQLErrors', graphQLErrors)
      console.log('networkError', networkError)
    },
  cache, 
});