import React from "react";
import { shallow } from "enzyme";
import Card from "./Card.js";

it("react test", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
