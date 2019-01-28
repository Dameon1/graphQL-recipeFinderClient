import React from "react";
import { Mutation } from "react-apollo";
import CURRENT_USER from "../actions/currentUserQuery";
import SIGN_OUT_MUTATION from "../actions/signOutMutation";
import { NavButton } from "./styles";

const SignOut = props => {
  return (
    <Mutation
      mutation={SIGN_OUT_MUTATION}
      refetchQueries={[{ query: CURRENT_USER }]}
    >
      {signOutUser => <NavButton onClick={signOutUser}>Sign out</NavButton>}
    </Mutation>
  );
};

export default SignOut;
