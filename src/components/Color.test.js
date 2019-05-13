import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('colors', () => {
  it('renders color dynamically', () => {
    const wrapper = shallow(<Color />);
    expect(wrapper).toMatchSnapshot();
  });
});
