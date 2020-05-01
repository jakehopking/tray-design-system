import React from "react";
import {shallow} from "enzyme";
import Badge from ".";

const wrap = (props = {}) => shallow(<Badge {...props} />);

it("renders passed-in children", () => {
  const wrapper = wrap({children: "kitten"});
  expect(wrapper.contains("kitten")).toBe(true);
});

it("renders passed-in props", () => {
  const wrapper = wrap({id: "wrapper"});
  expect(wrapper.find({id: "wrapper"})).toHaveLength(1);
});
