import React from "react";
import { shallow, mount } from "enzyme";
import SignOut from "../components/SignOut";
import toJSON from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import { ApolloConsumer } from "react-apollo";
import SIGN_OUT_MUTATION from'../actions/signOutMutation';
import CURRENT_USER from "../actions/currentUserQuery";

// create a user
// simulate a click
// compare data with non-user data

const me = {
  __typename: "User",
  username: "username"
};
const notSignedIn = {
  __typename: "User",
  username: ""
}
const mocks = [
  //signOut mock mutation
  {
    request: {
      query: SIGN_OUT_MUTATION,
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



describe("<SignOut />", () => {
  it("renders without crashing", () => {
    expect(true).toBe(true);
    const wrapper = shallow(<SignOut />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it("calls the mutation properly", async () => {
    let apolloClient;
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <ApolloConsumer>
          {client => {
            apolloClient = client;
            return <SignOut />;
          }}
        </ApolloConsumer>
      </MockedProvider>
    );
   
  })
});