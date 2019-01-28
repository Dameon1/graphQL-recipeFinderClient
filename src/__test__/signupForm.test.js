import React from "react";
import { shallow, mount } from "enzyme";
import { SignUpForm } from "../components/display/signupForm";

describe("<SignUpForm />", () => {
  it("renders without crashing", () => {
    const someFunction = jest.fn();
    shallow(<SignUpForm handleSubmit={someFunction} />);
  });
});
