import React from 'react';
import Header from './index';
import renderer from 'react-test-renderer';

describe('<Header />', () => {
  let wrapper: any;
  let instance: any;

  beforeEach(() => {
    wrapper = renderer.create(<Header />);
    instance = wrapper.root;
  });

  test('should mount component', () => {
    const component = renderer.create(
      <Header />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should display header links", () => {
    expect(instance.findByProps({className: 'headerLinks'}).children).toHaveLength(6)
  });
});
