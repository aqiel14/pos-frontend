import React from "react";
import { shallow } from "enzyme";
import Posmachine_create from "./posmachine_create";

describe("Posmachine_create", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Posmachine_create />);
    expect(wrapper).toMatchSnapshot();
  });
});
