import React from "react";
import { shallow } from "enzyme";
import { SmallRecipeDisplay } from "../components/SmallRecipeDisplay";
import toJSON from "enzyme-to-json";

//TODO: add an actual recipe

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
      props: {
      index: 1,
      id:101,
      title:"This is a test title",
      image: "Test url image String",
      usedIngredientCount: 3,
      missedIngredientCount: 2
    }}
    const dispatch = jest.fn();    
    const wrapper = shallow(<SmallRecipeDisplay {...props}/>);
    //console.log(wrapper.debug());
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});