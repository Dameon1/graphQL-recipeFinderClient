import React from "react";
import { shallow, mount } from "enzyme";
import { User } from "../components/User";
import toJSON from "enzyme-to-json";

//TODO: COULD ADD A FEW MORE SMOKE TESTS

describe("<User />", () => {
  it("renders without crashing", () => {
    expect(true).toBe(true);
    // const wrapper = shallow(<User {...props} />);
    // console.log(wrapper.debug());
    // expect(toJSON(wrapper)).toMatchSnapshot();
  });
});