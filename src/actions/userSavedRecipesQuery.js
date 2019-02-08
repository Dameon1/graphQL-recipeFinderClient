import gql from "graphql-tag";

export default gql`
  query USER_SAVED_RECIPES_QUERY {
    fetchRecipesFromSpoonacularInBulk {
      image
      title
      id
    }
  }
`;
