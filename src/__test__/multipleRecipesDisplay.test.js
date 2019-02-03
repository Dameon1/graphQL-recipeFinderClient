import React from "react";
import { shallow, mount } from "enzyme";
import { MultipleRecipesDisplay } from "../components/MultipleRecipesDisplay";

describe("<MultipleRecipesDisplay />", () => {
  it("renders without crashing", () => {
    shallow(<MultipleRecipesDisplay />);
  });
});
