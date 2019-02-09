import gql from "graphql-tag";

export default gql`
  query GET_RECIPE_BY_ID_QUERY($id: Int) {
    fetchRecipesFromSpoonacularById(id: $id) {
      image
      title
      id
      sourceUrl
      analyzedInstructions {
        steps {
          step
        }
      }
    }
  }
`;
