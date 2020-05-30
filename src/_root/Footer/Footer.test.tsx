import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe('<Footer />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Footer />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
