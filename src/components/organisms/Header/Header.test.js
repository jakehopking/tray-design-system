import React from "react";
import {shallow} from "enzyme";
import Header from "./Header";

const wrap = (props = {}) => shallow(<Header {...props} />);

it("renders passed-in props", () => {
  const wrapper = wrap({id: "header"});
  expect(wrapper.find({id: "header"})).toHaveLength(1);
});
