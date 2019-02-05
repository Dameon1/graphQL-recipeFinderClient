import React from "react";
import { shallow } from "enzyme";
import { SmallRecipeDisplay } from "../components/SmallRecipeDisplay";

//TODO: COULD ADD A FEW MORE SMOKE TESTS

describe("<SmallRecipeDisplay />", () => {
  it("Renders without crashing", () => {
    const configs = {
      default: true,
      label: "My Label",
      element: "myElement",
      apiRecipes: [12232, 1221],
      recipes: [12232]
    };
    const props = {
      props:{
      index: 1
    }}
    const dispatch = jest.fn();    
    const wrapper = shallow(<SmallRecipeDisplay {...props}/>);
    console.log(wrapper.debug());
  });
});