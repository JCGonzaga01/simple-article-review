import React from "react";
import renderer from "react-test-renderer";
import ItemList from "./index";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("<ItemList />", () => {
  let wrapper: any;
  let instance: any;

  beforeEach(() => {
    wrapper = renderer.create(<ItemList />);
    instance = wrapper.root;
  });

  test("should mount component", () => {
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render details", () => {
    expect(instance.findByProps({ className: "wrapper" }).children).toHaveLength(4);
  });

  test("should be able to call details page", () => {
    const viewDetailsButton = instance.findAll(
      (element: any) => element.props.className === "viewDetailsContainer"
    );
    viewDetailsButton[0].props.onClick();

    expect(mockHistoryPush).toHaveBeenCalledWith({
      pathname: "/item",
      search: `?id=1001`,
      state: { id: 1001 },
    });
  });
});
