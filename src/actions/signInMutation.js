import gql from "graphql-tag";

export default gql`
  mutation SIGNIN_MUTATION($username: String!, $password: String!) {
    signInUser(username: $username, password: $password) {
      username
    }
  }
`;
