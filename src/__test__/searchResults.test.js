import React from "react";
import { shallow, mount } from "enzyme";
import { SearchResults } from "../components/SearchResults";
import toJSON from "enzyme-to-json";

//TODO: COULD ADD A FEW MORE SMOKE TESTS

describe("<SearchResults />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<SearchResults />);
    //console.log(wrapper.debug());
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});