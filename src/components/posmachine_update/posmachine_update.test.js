import React from "react";
import { shallow } from "enzyme";
import Posmachine_update from "./posmachine_update";

describe("Posmachine_update", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Posmachine_update />);
    expect(wrapper).toMatchSnapshot();
  });
});
