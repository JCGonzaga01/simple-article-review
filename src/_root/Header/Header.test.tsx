import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('<Header />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
