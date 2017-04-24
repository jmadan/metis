import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import HomePage from '../components/home';

test(('test if HomePage renders correctly'), () => {
  const component = renderer.create(<HomePage />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test(('Check for the HomePage text'), ()=> {
  const component = mount(<HomePage />);
  expect(component.text()).toEqual('Admin Homepage');
});
