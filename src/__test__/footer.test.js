import React from "react";
import { shallow, mount } from "enzyme";
import Footer from "../components/Footer";
import toJSON from "enzyme-to-json";

describe("<Footer />", () => {
  it("Renders without crashing", () => {
    shallow(<Footer />);
  });
  it('matches the snapshot', () => {
    const wrapper = shallow(<Footer />);
    //console.log(wrapper.debug());
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
