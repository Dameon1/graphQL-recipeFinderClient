import React from "react";
import { shallow, mount } from "enzyme";
import { SingleRecipeDisplay } from "../components/singleRecipeDisplay";

describe("<SingleRecipeDisplay />", () => {
  it("renders without crashing", () => {
    const dispatch = jest.fn();
    const testObject = {
      image: "string",
      title: "title",
      usedIngredientCount: 4,
      missedIngredientCount: 4
    };
    shallow(<SingleRecipeDisplay  apiRecipes={[testObject]} />);
  });
});
