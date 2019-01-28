import React from "react";
import { shallow, mount } from "enzyme";
import LandingPage from "../components/display/landingPage";

describe("<LandingPage>", () => {
  it("renders without crashing", () => {
    shallow(<LandingPage />);
  });
});
