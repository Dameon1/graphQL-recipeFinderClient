import React from "react";
import { shallow, mount } from "enzyme";
import GuestHeader from "../components/GuestHeader";
import toJSON from "enzyme-to-json";

describe("<GuestHeader />", () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<GuestHeader />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});