import gql from "graphql-tag";

export default gql`
  mutation SIGNUP_MUTATION($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      username
      reason
      message
    }
  }
`;
