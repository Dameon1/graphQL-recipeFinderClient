import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import { ApolloConsumer } from "react-apollo";
import { SIGNUP_MUTATION } from "../actions/signUpMutation";

import { CreateAccount } from "../components/CreateAccount";
import CURRENT_USER from "../actions/currentUserQuery";

function type(wrapper, name, value) {
  wrapper.find(`input[name="${name}"]`).simulate("change", {
    target: { name, value }
  });
}

const me = {
  __typename: "User",
  username: "username"
};

const mocks = [
  //signup mock mutation
  {
    request: {
      query: SIGNUP_MUTATION,
      variables: {
        username: "username",
        password: "password"
      }
    },
    result: {
      data: {
        createUser: {
          __typename: "User",
          username: "",
          reason: "",
          message: ""
        }
      }
    }
  },
  //current user query mock
  {
    request: { query: CURRENT_USER },
    result: { data: { me } }
  }
];

describe("<CreateAccount/>", () => {
  it("renders and matches snapshot", async () => {
    const wrapper = shallow(
      <MockedProvider>
        <CreateAccount />
      </MockedProvider>
    );
    //console.log(wrapper.debug());
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("calls the mutation properly", async () => {
    let apolloClient;
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <ApolloConsumer>
          {client => {
            apolloClient = client;
            return <CreateAccount />;
          }}
        </ApolloConsumer>
      </MockedProvider>
    );
    const user = await apolloClient.query({ query: CURRENT_USER });
    expect(user.data.me).toMatchObject(me);
  });
});
