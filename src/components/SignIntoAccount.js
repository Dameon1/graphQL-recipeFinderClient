import React from "react";
import { Mutation } from "react-apollo";
import { navigate } from "@reach/router";

import { Form, UserSignIn, SignInButton, SignInInput, Label } from "./styles";
import Error from "./ErrorMessage";

//TODO************ CREATE INDEX FOR ALL QUERY?MUTATIONS *********
import CURRENT_USER from "../actions/currentUserQuery";
import SIGNIN_MUTATION from "../actions/signInMutation";

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
        refetchQueries={[{ query: CURRENT_USER }]}
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
