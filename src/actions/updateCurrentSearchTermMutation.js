import gql from "graphql-tag";

export default gql`
  mutation UPDATE_CURRENT_SEARCH_TERM_MUTATION($value: String!) {
    updateCurrentSearchTerm(value: $value) @client {
      value
    }
  }
`;
