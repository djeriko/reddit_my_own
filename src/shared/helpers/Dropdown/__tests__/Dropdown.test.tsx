/**
 * @jest-environment jsdom
 */
import React from "react";
import { Dropdown } from "../Dropdown";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Dropdown", () => {
  test("should render", () => {
    const wrapper = shallow(
      <Dropdown children={<div />} button={<button />} />
    );
    console.log(window);

    expect(wrapper).toBeDefined();
    expect(wrapper.find("div.container").isEmptyRender()).toBeFalsy();
  });

  test("should render (snapshot)", () => {
    const wrapper = shallow(
      <Dropdown children={<div />} button={<button />} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
