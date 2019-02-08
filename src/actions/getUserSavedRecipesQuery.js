import gql from "graphql-tag";

export default gql`
  query GET_USER_SAVED_RECIPES_QUERY {
    recipesForUser {
      recipeId
    }
  }
`;
