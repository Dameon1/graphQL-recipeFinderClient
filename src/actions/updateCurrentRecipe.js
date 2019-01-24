import gql from "graphql-tag";

export default gql`
  mutation updateCurrentRecipe($value: String!) {
    updateCurrentRecipe(value: $value) @client {
      value
    }
  }
`;
