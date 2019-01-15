import gql from 'graphql-tag';

export default gql`
  query {
    currentState @client {
      currentSearchTerm
      currentUser
      currentRecipe
    }
  }
`;