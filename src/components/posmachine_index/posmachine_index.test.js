import React from "react";
import { shallow } from "enzyme";
import Posmachine_index from "./posmachine_index";

describe("Posmachine_index", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Posmachine_index />);
    expect(wrapper).toMatchSnapshot();
  });
});
