import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Doggie', () => {
  it('let\'s see that dog', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});
