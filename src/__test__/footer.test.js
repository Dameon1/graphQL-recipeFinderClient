import React from "react";
import { shallow, mount } from "enzyme";
import Footer from "../components/footer";

describe("<Footer />", () => {
  it("Renders without crashing", () => {
    shallow(<Footer />);
  });
});
