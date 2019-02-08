import gql from "graphql-tag";

export default gql`
  mutation SIGN_OUT_MUTATION {
    signOutUser {
      message
    }
  }
`;
