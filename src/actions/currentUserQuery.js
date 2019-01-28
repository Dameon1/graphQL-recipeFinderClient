import gql from "graphql-tag";

export default gql`
  query CURRENT_USER{
    me {
      username
    }
  }
`;