import React from "react";
import renderer from "react-test-renderer";
import ItemDetails from "./index";

jest.mock("react-router-dom", () => ({
  useLocation: () => ({
    search: "id=1001",
  }),
}));

describe("<ItemDetails />", () => {
  let wrapper: any;
  let instance: any;

  beforeEach(() => {
    wrapper = renderer.create(<ItemDetails />);
    instance = wrapper.root;
  });

  test("should mount component", () => {
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render details", () => {
    expect(instance.findByProps({ className: "wrapper" })).toBeTruthy();
  });

  test("should render questions", () => {
    expect(instance.findByProps({ className: "contentContainer" }).children).toHaveLength(7);
  });

  test("should handle sort", () => {
    let sortText = instance.findByProps({ className: "sort" }).children[0]._fiber.stateNode.props
      .children;
    expect(sortText).toEqual("sort by latest");

    const sortButton = instance.find((element: any) => element.props.className === "sort");
    sortButton.props.onClick();

    sortText = instance.findByProps({ className: "sort" }).children[0]._fiber.stateNode.props
      .children;
    expect(sortText).toEqual("sort by earliest");
  });
});
