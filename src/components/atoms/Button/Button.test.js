import React from "react";
import {shallow} from "enzyme";
import Button, {
  StyledButton,
  Anchor,
  StyledLink,
  fontSize,
  backgroundColor,
  foregroundColor,
  hoverBackgroundColor,
  hoverForegroundColor,
} from "./Button";

const wrap = (props = {}) => shallow(<Button {...props} />);

it("renders with various props combinations", () => {
  wrap({disabled: true});
  wrap({transparent: true});
  wrap({disabled: true, transparent: true});
});

it("renders passed-in children", () => {
  const wrapper = wrap({children: "kitten"});
  expect(wrapper.contains("kitten")).toBe(true);
});

it("renders passed-in props", () => {
  const wrapper = wrap({type: "submit"});
  expect(wrapper.find({type: "submit"})).toHaveLength(1);
});

it("renders <StyledButton /> button by default", () => {
  const wrapper = wrap();
  expect(wrapper.find(StyledButton)).toHaveLength(1);
});

it("renders <Anchor /> when 'href' prop used", () => {
  const wrapper = wrap({href: "https://tray.io/"});
  expect(wrapper.find(Anchor)).toHaveLength(1);
});

it("renders <StyledLink /> when 'to' prop used", () => {
  const wrapper = wrap({to: "/"});
  expect(wrapper.find(StyledLink)).toHaveLength(1);
});

// TO DO.
// Complete tests for fontSize, backgroundColor, hoverBackgroundColor, foregroundColor, hoverForegroundColor
