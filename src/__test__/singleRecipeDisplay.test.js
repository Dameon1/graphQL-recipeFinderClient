import React from "react";
import { shallow } from "enzyme";
import { SingleRecipeDisplay } from "../components/SingleRecipeDisplay";

describe("<SingleRecipeDisplay />", () => {
  it("Renders without crashing", () => {
    const configs = {
      default: true,
      label: "My Label",
      element: "myElement",
      apiRecipes: [12232, 1221],
      recipes: [12232]
    };
    const dispatch = jest.fn();    
    const wrapper = shallow(<SingleRecipeDisplay/>);
    //console.log(wrapper.debug());
  });
});