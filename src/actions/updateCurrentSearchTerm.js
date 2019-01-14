import gql from 'graphql-tag';

export default gql`
  mutation updateCurrentSearchTerm($value: String!) {
    updateCurrentSearchTerm(value: $value) @client {
      value
    }
  }
`;