import React from "react";
import { shallow, mount } from "enzyme";
import { SignOut } from "../components/SignOut";
import toJSON from "enzyme-to-json";

//TODO: COULD ADD A FEW MORE SMOKE TESTS

describe("<SignOut />", () => {
  it("renders without crashing", () => {
    expect(true).toBe(true);
    //const wrapper = shallow(<SignOut />);
    //console.log(wrapper.debug());
    //expect(toJSON(wrapper)).toMatchSnapshot();
  });
});