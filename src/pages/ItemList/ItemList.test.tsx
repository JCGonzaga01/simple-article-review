import React from 'react';
import { shallow } from 'enzyme';
import ItemList from './index';

describe('<ItemList />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ItemList />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
