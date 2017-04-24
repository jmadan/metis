import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import OffersContainer from '../containers/offers_container';
import OffersNav from '../components/offers/offers_nav';
import OffersComponent from '../components/offers/offers_component';

test(('testing Offers Container renders Offers Nav'), ()=> {
  const component = shallow(<OffersContainer />);
  expect(component.find(OffersNav)).toHaveLength(1);
});

test(('testing Offers Container renders Offers Nav'), ()=> {
  const component = shallow(<OffersContainer />);
  expect(component.find(OffersComponent)).toHaveLength(1);
});
