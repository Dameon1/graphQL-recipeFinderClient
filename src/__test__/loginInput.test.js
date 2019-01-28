import React from "react";
import { shallow, mount } from "enzyme";
import Input from "../components/display/loginInput";

describe("<Input />", () => {
  it("renders without crashing", () => {
    const meta = {
      touched: true,
      error: ""
    };
    const input = {
      name: "myName"
    };
    shallow(<Input meta={meta} input={input} />);
  });
});
