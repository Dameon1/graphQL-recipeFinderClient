import React from "react";
import { shallow, mount } from "enzyme";
import { RecipeDisplay } from "../components/display/recipeDisplay";

describe("<RecipeDisplay />", () => {
  it("renders without crashing", () => {
    const dispatch = jest.fn();
    const testObject = {
      image: "string",
      title: "title",
      usedIngredientCount: 4,
      missedIngredientCount: 4
    };
    shallow(<RecipeDisplay dispatch={dispatch} apiRecipes={[testObject]} />);
  });
});
