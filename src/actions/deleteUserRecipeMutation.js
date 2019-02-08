import gql from "graphql-tag";

export default gql`
  mutation DELETE_USER_RECIPE_MUTATION($recipeId: Int) {
    deleteRecipe(recipeId: $recipeId)
  }
`;
