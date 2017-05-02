import React from 'react';
import renderer from 'react-test-renderer';
import offers from './testdata/offerlist';
import { mount, shallow } from 'enzyme';

import OffersContainer from '../containers/offers_container';
import OffersNav from '../components/offers/offers_nav';
import OffersComponent from '../components/offers/offers_component';
import OfferRow from '../components/offers/offer_row';

describe('Testing offers container and components', ()=> {

  let offerContainer, offerComponent, offerRow;
  const filter = 'SHOW_ALL';

  beforeEach(()=>{
    offerContainer = shallow(<OffersContainer />);
    offerComponent = shallow(<OffersComponent offersList={offers} selectedFilter={filter}/>);
    offerRow = shallow(<OfferRow items={offers} />);
  });

  test(('testing Offers Container renders Offers Navigation component'), ()=> {
    expect(offerContainer.find(OffersNav)).toHaveLength(1);
  });

  test(('OfferComponent to render offers table'), ()=> {
    expect(offerComponent.find('table')).toBeTruthy();
    expect(offerRow.find('tr')).toBeTruthy();
  });


});
