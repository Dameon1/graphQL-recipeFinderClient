import gql from "graphql-tag";

export default gql`
  query CURRENT_USER_QUERY {
    me {
      username
    }
  }
`;
