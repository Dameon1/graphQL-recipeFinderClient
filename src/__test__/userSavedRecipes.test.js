import React from "react";
import { shallow, mount } from "enzyme";
import { UserSavedRecipesDisplay } from "../components/UserSavedRecipesDisplay";

describe("<UserSavedRecipesDisplay />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<UserSavedRecipesDisplay />);
  });
});
