import React from "react";
import { shallow, mount } from "enzyme";
import LandingPage from "../components/landingPage";
import toJSON from "enzyme-to-json";

//TODO: COULD ADD A FEW MORE SMOKE TESTS

describe("<LandingPage>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<LandingPage />);
    //console.log(wrapper.debug());
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
