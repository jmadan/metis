import React from 'react';
import { mount, shallow } from 'enzyme';

import HeaderLayout from '../components/header/header_layout';
import HeaderLogo from '../components/header/header_logo';
import HeaderNav from '../components/header/header_nav';

test('Test if HeaderNav component is rendered', () => {
  const wrapper = shallow(<HeaderLayout />);
  expect(wrapper.find(HeaderNav)).toHaveLength(1);
});


test('Test if HeaderLogo component is rendered', () => {
  const wrapper = shallow(<HeaderLayout />);
  expect(wrapper.find(HeaderLogo)).toHaveLength(1);
});


test('Test if HeaderNav renders 3 Links', () => {
  const wrapper = shallow(<HeaderNav />);
  expect(wrapper.find('.nav-tabs')).toBeTruthy();
});
