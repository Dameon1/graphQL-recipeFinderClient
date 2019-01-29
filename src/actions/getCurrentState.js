//TODO*****CREATE INDEX FILE FOR ACTIONS
import gql from "graphql-tag";

export default gql`
  query {    
    me @client{
      username
    }
  }
`;
