import gql from "graphql-tag";

export default gql`
query getApiRecipes($queryString: String!) {
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