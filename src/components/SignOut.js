import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {CURRENT_USER_QUERY} from './User';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signOutUser {
      message
    }
  }
`;

const SignOut = props => {
  return (
  <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{query:CURRENT_USER_QUERY}]}>
    {signOutUser => <button className="navLinkButtons" onClick={signOutUser}>Sign out</button>}
  </Mutation>
  )
}

export default SignOut;