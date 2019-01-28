//Checkbox is used iteratively in the recipe search for to display ingredient choices

import React from "react";
import { shallow, mount } from "enzyme";
import Checkbox from "../components/display/Checkbox";

describe("<Checkbox />", () => {
  it("renders without crashing", () => {
    shallow(<Checkbox />);
  });

  it("displays the correct ingredient with the same value", () => {
    const handleCheckboxChange = jest.fn();
    const label = "Milk";
    let wrapper = mount(
      <Checkbox label={label} handleCheckboxChange={handleCheckboxChange} />
    );
    const input = wrapper.find("input");
    expect(wrapper.text()).toEqual(label);
    expect(wrapper.length).toEqual(1);
    expect(input.props().value).toEqual(label);
  });

  it("fires a function on click and changes state", () => {
    const handleCheckboxChange = jest.fn();
    const label = "Milk";
    let wrapper = mount(
      <Checkbox label={label} handleCheckboxChange={handleCheckboxChange} />
    );
    expect(wrapper.state("isChecked")).toEqual(false);
    //simulate click and change state
    wrapper.find("input").simulate("click");
    expect(handleCheckboxChange).toHaveBeenCalledWith(label);
    expect(wrapper.state("isChecked")).toEqual(true);
    //simulate click and change state
    wrapper.find("input").simulate("click");
    expect(handleCheckboxChange).toHaveBeenCalledWith(label);
    expect(wrapper.state("isChecked")).toEqual(false);
  });
});
