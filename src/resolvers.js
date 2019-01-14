import gql from 'graphql-tag';
import { Query_Recipes } from  './components/display/RecipeSearchForm';;

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
    addApiRecipes: (_, { loading, error }, { cache }) => {
      const { apiRecipes } = cache.readQuery({ query: Query_Recipes });
      const data = {
        addApiRecipes: apiRecipes
      };
      cache.writeData({ query: Query_Recipes, data });
      return data.apiRecipes;
    },
  },
}