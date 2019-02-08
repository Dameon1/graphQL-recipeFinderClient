import React from "react";
import { Mutation } from "react-apollo";
import { navigate } from "@reach/router";

import Error from "./ErrorMessage";
import { CURRENT_USER_QUERY, SIGNUP_MUTATION } from "../actions";
import { Form, UserSignIn, SignInButton, SignInInput, Label } from "./styles";

function routeToHome() {
  navigate("/dashboard");
}

export class CreateAccount extends React.Component {
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
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { data, error, loading }) => {
          if (data && data.createUser && data.createUser.username) {
            routeToHome();
          }
          return (
            <UserSignIn>
              <Form
                method="post"
                onSubmit={async e => {
                  e.preventDefault();
                  await signup();
                  this.setState({ password: "", username: "" });
                }}
              >
                <Error error={error} />

                <Label htmlFor="username">Username</Label>
                {data && data.createUser.message && (
                  <Error error={data.createUser} />
                )}
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
                  Register
                </SignInButton>
              </Form>
            </UserSignIn>
          );
        }}
      </Mutation>
    );
  }
}

export default CreateAccount;
