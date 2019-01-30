import React from "react";
import { shallow, mount } from "enzyme";
import PageContainer from "../components/PageContainer";

describe("<PageContainer />", () => {
  it("Renders without crashing", () => {
    shallow(<PageContainer />);
  });
});
