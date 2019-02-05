import React from "react";
import { shallow, mount } from "enzyme";
import Header from "../components/Header";
import toJSON from "enzyme-to-json";

describe("<Header />", () => {
  it("Renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});


