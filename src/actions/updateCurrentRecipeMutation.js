import gql from "graphql-tag";

export default gql`
  mutation UPDATE_CURRENT_RECIPE_MUTATION($value: String!) {
    updateCurrentRecipe(value: $value) @client {
      value
    }
  }
`;
