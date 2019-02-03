import React from "react";
import { shallow, mount } from "enzyme";
import { RecipeSearchForm } from "../components/recipeSearchForm";

describe("<RecipeSearchForm />", () => {
  it("renders without crashing", () => {
    shallow(<RecipeSearchForm />);
  });
});
