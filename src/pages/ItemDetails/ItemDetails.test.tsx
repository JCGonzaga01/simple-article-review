import React from 'react';
import { shallow } from 'enzyme';
import ItemDetails from './index';

describe('<ItemDetails />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ItemDetails />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
