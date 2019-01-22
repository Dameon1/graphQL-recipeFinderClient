import gql from 'graphql-tag';
import GET_CURRENT_STATE from './actions/getCurrentState';
//import { Query_Recipes } from  './components/display/RecipeSearchForm';;

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }

  extend type Mutation {
    addApiRecipes: [Recipe]
    addUserRecipes: Recipe
    addUser: User
  }
`;

export const resolvers = {
  Mutation: {
    // addApiRecipes: (_, { loading, error }, { cache }) => {
    //   const { apiRecipes } = cache.readQuery({ query: Query_Recipes });
    //   const data = {
    //     addApiRecipes: apiRecipes
    //   };
    //   cache.writeData({ query: Query_Recipes, data });
    //   return data.apiRecipes;
    // },
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
     },
    updateCurrentRecipe: (_,{value},{cache}) => {
      const query = GET_CURRENT_STATE
      const previousState = cache.readQuery({ query });
      const data = {
        ...previousState,
        currentState: {
          ...previousState.currentState,
          currentRecipe: value
        }
     }
     cache.writeData({query,data})
     console.log(data)
     return ({
       data,
       value,
       __typename:"updateCurrentRecipe"
      })   
    },
  },
}