import gql from "graphql-tag";

export default gql`
  mutation SAVE_USER_RECIPE_MUTATION($recipeId: Int) {
    saveRecipe(recipeId: $recipeId) {
      recipeId
    }
  }
`;
