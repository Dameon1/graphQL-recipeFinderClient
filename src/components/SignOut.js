import React from "react";
import { Mutation } from "react-apollo";
import { CURRENT_USER_QUERY, SIGN_OUT_MUTATION } from "../actions";
import { NavButton } from "./styles";

const SignOut = props => {
  return (
    <Mutation
      mutation={SIGN_OUT_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {signOutUser => <NavButton onClick={signOutUser}>Sign out</NavButton>}
    </Mutation>
  );
};

export default SignOut;
