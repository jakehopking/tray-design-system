import React from "react";
import {shallow} from "enzyme";
import Heading, {StyledHeading, fontSize} from "./Heading";

const wrap = (props = {}) => shallow(<Heading {...props} />);

it("renders passed-in children", () => {
  const wrapper = wrap({children: "test"});
  expect(wrapper.contains("test")).toBe(true);
});

it("renders passed-in props", () => {
  const wrapper = wrap({id: "foo"});
  expect(wrapper.find({id: "foo"})).toHaveLength(1);
});

it("renders <h1> by default", () => {
  const wrapper = wrap();
  expect(wrapper.find(StyledHeading).find({level: 1})).toHaveLength(1);
});

it("renders correct <h Size> when level is set", () => {
  const wrapper = wrap({level: 2});
  expect(wrapper.find(StyledHeading).find({level: 2})).toHaveLength(1);
});

it("executes fontSizeFunction correctly", () => {
  expect(fontSize({level: 1})).toBe("1.75rem");
});
