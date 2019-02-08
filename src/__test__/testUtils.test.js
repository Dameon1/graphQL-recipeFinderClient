import React from "react";
import { shallow, mount } from "enzyme";
import UserHeader from "../components/UserHeader";

//TODO: COULD ADD A FEW MORE SMOKE TESTS

describe.only("<UserHeader />", () => {
  it("renders without crashing", () => {
     const wrapper = shallow(<UserHeader />);
  });
});