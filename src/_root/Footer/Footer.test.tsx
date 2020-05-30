import React from "react";
import Footer from "./index";
import renderer from "react-test-renderer";

describe("<Footer />", () => {
  let wrapper: any;
  let instance: any;

  beforeEach(() => {
    wrapper = renderer.create(<Footer />);
    instance = wrapper.root;
  });

  test("should mount component", () => {
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should display footer links", () => {
    expect(instance.findByProps({ className: "footerLinks" }).children).toHaveLength(6);
  });
});
