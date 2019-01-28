import React from "react";
import { shallow, mount } from "enzyme";
import Container from "../components/containers/container";
import toJSON from "enzyme-to-json";

describe("<Container />", () => {
  it("Renders without crashing", () => {
    shallow(<Container />);
  });
});
