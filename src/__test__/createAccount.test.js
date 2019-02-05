import React from "react";
import { shallow, mount } from "enzyme";
import { CreateAccount } from "../components/CreateAccount";
import toJSON from "enzyme-to-json";
import { MockedProvider } from 'react-apollo/test-utils';
import CURRENT_USER from "../actions/currentUserQuery";

const someFunction = jest.fn();
const mocks = [
  {
    // when someone makes a request with this query and variable combo
    request: { query: CURRENT_USER, variables: { id: '123' } },
    // return this fake data (mocked data)
    result: {
      data: {
        me: {
          username: "someone"
        },
      },
    },
  },
];

describe.only("<CreateAccount />", () => {
  it("renders without crashing", () => {    
    let wrapper = shallow(<CreateAccount handleSubmit={someFunction} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("matches snapshot", () => {
    let wrapper = mount(
      <MockedProvider mocks={mocks}>
        <CreateAccount handleSubmit={someFunction} />
      </MockedProvider>)  
  })
});