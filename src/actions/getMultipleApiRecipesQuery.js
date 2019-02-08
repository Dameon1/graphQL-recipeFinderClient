import gql from "graphql-tag";

export default gql`
  query GET_MULTIPLE_API_RECIPES_QUERY($queryString: String!) {
    fetchRecipesFromSpoonacular(queryString: $queryString) {
      instructions
      usedIngredientCount
      image
      title
      id
      missedIngredientCount
      errorMessage
    }
  }
`;
