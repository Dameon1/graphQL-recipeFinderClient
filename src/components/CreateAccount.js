import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";


//TODO********* CREATE INDEX FOR STYLED COMPONENTS*********
import {Form} from "./styles";
import {UserSignIn} from "./styles";
import {SignInButton} from "./styles";
import {SignInInput} from "./styles";
import {Label} from "./styles";

import "./styles/userLogin.css";
import Error from "./ErrorMessage";
import { navigate } from "@reach/router";
import { CURRENT_USER_QUERY } from "./User";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      username
    }
  }
`;

function routeToHome() {
  navigate("/dashboard");
}

export default class CreateAccount extends React.Component {
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
          if (data) {
            routeToHome(data);
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
                <SignInInput
                  name="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.saveToState}
                  type="text"
                />
                <Label htmlFor="password">
                  Password
                </Label>
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
