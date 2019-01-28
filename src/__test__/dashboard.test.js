//TODO fix recipeSearchForm to render from this test
import React from "react";
import { shallow, mount } from "enzyme";
import { Dashboard } from "../components/containers/dashboard";
import { testObj, store, configs, dispatch, props } from "./testUtils";
import { Provider } from "react-redux";

describe("<Content />", () => {
  it("Renders without crashing", () => {
    shallow(<Dashboard {...props} />);
  });

  it("mounts without crashing", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Dashboard dispatch={dispatch} apiRecipes={[testObj]} state={store} />
      </Provider>
    );
  });
});
