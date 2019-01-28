import gql from "graphql-tag";

export default gql`
  query fetchRecipesFromSpoonacularById($id: Int) {
    fetchRecipesFromSpoonacularById(id: $id) {
      image
      title
      id
      analyzedInstructions {
        steps {
          step
        }
      }
    }
  }
`;
