import ApolloClient, { InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';
import GET_CURRENT_STATE from './components/containers/scratchImport';
const cache = new InMemoryCache();

const defaultState = {
  currentState: {
    __typename: 'currentState',
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
          updateNumber: (_,{index,value},{cache}) => {
            const query = GET_CURRENT_STATE
            const previousState = cache.readQuery({ query });
            const data = {
              ...previousState,
              currentState: {
                ...previousState.currentState,
                [index]:value
              }
           }
           cache.writeData({query,data})
             console.log(data)   
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
})       
    //         updateGame: (_, { index, value }, { cache }) => {
    //           const query = gql`
    //             query {
    //               currentState @client {
    //                 number
    //               }
    //             }
    //           `
    //           const previous = cache.readQuery({ query })
    //           const data = {
    //             currentGame: {
    //               ...previous.currentGame,
    //               number: value
    //             }
    //           }
      
    //           cache.writeQuery({ query, data })
    //           return null;
    //       }
    //     }
    //   }
    // },  
  
