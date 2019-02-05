import React from "react";
import ErrorMessage from "../components/ErrorMessage";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";

const errorMessage = "simple error message";

describe("<ErrorMessage/>", () => {
  it("displays the error message given", async () => {
    const wrapper = mount(<ErrorMessage error={{ error: errorMessage }} />);
    wrapper.update();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
