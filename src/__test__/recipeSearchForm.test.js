import React from "react";
import { shallow, mount } from "enzyme";
import { RecipeSearchForm } from "../components/RecipeSearchForm";
import toJSON from "enzyme-to-json";

//TODO: COULD ADD A FEW MORE SMOKE TESTS

describe("<RecipeSearchForm />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<RecipeSearchForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
