import React from "react";
import { shallow, mount } from "enzyme";
import { UserHeader } from "../components/UserHeader";

//TODO: COULD ADD A FEW MORE SMOKE TESTS

describe.only("<UserHeader />", () => {
  it("renders without crashing", () => {
    //expect(true).toBe(true);
     const wrapper = shallow(<UserHeader />);
     console.log(wrapper.debug());
  });
});