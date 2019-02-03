import React from "react";
import { shallow, mount } from "enzyme";
import { UserDisplayedRecipes } from "../components/userDisplayedRecipes";

describe("<UserDisplayedRecipes />", () => {
  it("renders without crashing", () => {
    shallow(<UserDisplayedRecipes />);
  });
});
