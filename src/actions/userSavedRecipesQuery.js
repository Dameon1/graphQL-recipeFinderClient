import gql from "graphql-tag";

export default gql`
query USER_SAVED_RECIPES {
  fetchRecipesFromSpoonacularInBulk {
    image
    title
    id
  }
}
`;