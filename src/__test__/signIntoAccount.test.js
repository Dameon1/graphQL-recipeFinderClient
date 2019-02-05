import React from "react";
import { shallow, mount } from "enzyme";
import { SignIntoAccount } from "../components/SignIntoAccount";
import toJSON from "enzyme-to-json";

//TODO: COULD ADD A FEW MORE SMOKE TESTS

describe("<SignIntoAccount />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<SignIntoAccount />);
    //console.log(wrapper.debug());
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});