//TODO*****CREATE INDEX FILE FOR ACTIONS
import gql from "graphql-tag";

export default gql`
  query {
    currentState @client {
      currentSearchTerm
      currentUser
      currentRecipe
    }
    me @client {
      username
    }
  }
`;
