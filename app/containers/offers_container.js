import React, { Component } from 'react';

import OffersNav from '../components/offers/offers_nav';
import OffersComponent from '../components/offers/offers_component';

import * as Api from '../utils/api';
import offersList from '../data/offers';

class OffersContainer extends Component {
  constructor(props){
    super();

    this.state = {
      selectedFilter: 'SHOW_ALL',
      offers: [],
    }

    this.updateOffers = this.updateOffers.bind(this);
  }

  componentDidMount(){
    this.updateOffers(this.state.selectedFilter);
  }

  updateOffers(filter){
    console.log(filter);
    this.setState(function(){
      return {
        selectedFilter: filter,
        offers: offersList.content
      };
    });
  }

  shouldComponentUpdate(){
    return true;
  }

  render(){
    return (
      <div className="row">
        <OffersNav onClick={this.updateOffers}/>
        <br/>
        {!this.state.offers ? <p>Need to get some Offers</p> : <OffersComponent {...this.state} />}
      </div>
    )
  }
}

export default OffersContainer;
