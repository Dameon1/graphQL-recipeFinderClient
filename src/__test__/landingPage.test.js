import React from "react";
import { shallow, mount } from "enzyme";
import {LandingPage} from "../components/LandingPage";
import toJSON from "enzyme-to-json";

//TODO: COULD ADD A FEW MORE SMOKE TESTS

describe("<LandingPage>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<LandingPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
