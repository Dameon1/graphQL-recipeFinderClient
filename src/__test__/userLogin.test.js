import React from "react";
import { shallow, mount } from "enzyme";
import { LoginForm } from "../components/display/userLogin";

describe("<LoginForm />", () => {
  it("renders without crashing", () => {
    const someFunction = jest.fn();
    shallow(<LoginForm handleSubmit={someFunction} />);
  });
});
