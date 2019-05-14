import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('colorpicker', () => {
  it('display color picker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('handles red button press', () => {
    console.log = jest.fn();
    const wrapper = shallow(<ColorPicker />);

    wrapper.find('button').at(0).simulate('click');

    expect(console.log).toHaveBeenCalledWith('red');
  });
});
