import React from "react";
import { shallow } from "enzyme";
import { SingleRecipe } from "../components/containers/singleRecipe";

describe("<SingleRecipe />", () => {
  it("Renders without crashing", () => {
    const configs = {
      default: true,
      label: "My Label",
      element: "myElement",
      apiRecipes: [12232, 1221],
      recipes: [12232]
      // currentItem.analyzedInstructions[0].steps
    };
    const dispatch = jest.fn();

    const props = {
      recipes: configs.recipes,
      dispatch
    };
    shallow(<SingleRecipe {...props} />);
  });
});
