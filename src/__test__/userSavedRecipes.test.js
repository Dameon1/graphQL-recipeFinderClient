import React from "react";
import { shallow, mount } from "enzyme";
import { UserSavedRecipes } from "../components/userSavedRecipes";

describe("<UserSavedRecipes />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<UserSavedRecipes />);
    //console.log(wrapper.debug());
  });
});
