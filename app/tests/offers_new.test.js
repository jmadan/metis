import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import OfferNewContainer from '../containers/offer_new_container';

test(('testing New Offer Container renders correctly'), ()=> {
  const component = shallow(<OfferNewContainer />);
  expect(component.find('.container')).toHaveLength(1);
});
