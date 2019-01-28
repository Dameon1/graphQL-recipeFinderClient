import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { navigate } from "@reach/router";

//TODO********* CREATE INDEX FOR STYLED COMPONENTS*********
import {Form} from "./styles";
import {UserSignIn} from "./styles";
import {SignInButton} from "./styles";
import {SignInInput} from "./styles";
import {Label} from "./styles";

import "./styles/userLogin.css";
import Error from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";

//TODO************ CREATE INDEX FOR ALL QUERY?MUTATIONS *********
const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($username: String!, $password: String!) {
    signInUser(username: $username, password: $password) {
      username
    }
  }
`;

function routeToHome() {
  navigate("/dashboard");
}

export class SignIntoAccount extends React.Component {
  state = {
    password: "",
    username: ""
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signInUser, { data, error, loading }) => {
          if (data) {
            routeToHome(data);
          }
          return (
            <UserSignIn>
              <Form
                method="post"
                onSubmit={async e => {
                  e.preventDefault();
                  await signInUser();
                  this.setState({ password: "", username: "" });
                }}
              >
                <Error error={error} />
                <Label htmlFor="username">Username</Label>
                <SignInInput
                  name="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.saveToState}
                  type="text"
                />
                <Label htmlFor="password">Password</Label>
                <SignInInput
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
                <SignInButton
                  type="submit"
                  disabled={this.props.pristine || this.props.submitting}
                >
                  Sign In
                </SignInButton>
              </Form>
            </UserSignIn>
          );
        }}
      </Mutation>
    );
  }
}

export default SignIntoAccount;
