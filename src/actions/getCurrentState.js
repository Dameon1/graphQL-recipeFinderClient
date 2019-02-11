import gql from "graphql-tag";

export default gql`
  query GET_CURRENT_STATE {
    me @client {
      username
    }
  }
`;
