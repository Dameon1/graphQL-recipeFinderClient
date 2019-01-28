import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";
import { NavButton } from "./styles";


const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signOutUser {
      message
    }
  }
`;

const SignOut = props => {
  return (
    <Mutation
      mutation={SIGN_OUT_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {signOutUser => (
        <NavButton onClick={signOutUser}>
          Sign out
        </NavButton>
      )}
    </Mutation>
  );
};

export default SignOut;
