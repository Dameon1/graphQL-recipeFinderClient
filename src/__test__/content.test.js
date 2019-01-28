import React from "react";
import { shallow, mount } from "enzyme";
import { Content } from "../components/containers/content";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { testObj, store, configs, dispatch, props } from "./testUtils";

describe("<Content />", () => {
  it("Renders without crashing", () => {
    shallow(<Content {...props} />);
  });

  it("Renders the item without crashing", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Content dispatch={dispatch} apiRecipes={[testObj]} />
        </Router>
      </Provider>
    );
    expect(wrapper.find("MultipleRecipesDisplay").length).toEqual(1);
    expect(wrapper.find("h2").text()).toEqual("Apple Tart");
    expect(wrapper.find("button").text()).toEqual("Get Recipe");
  });
});
