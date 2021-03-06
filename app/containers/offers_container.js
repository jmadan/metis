import React, { Component } from 'react';

import OffersNav from '../components/offers/offers_nav';
import OffersComponent from '../components/offers/offers_component';
import OfferFormComponent from '../components/offers/offer_form';

import * as Api from '../utils/api';
import offersList from '../data/offers';

class OffersContainer extends Component {
  constructor(props){
    super(props);

    console.log("props: ", props);

    this.state = {
      selectedFilter: 'SHOW_ALL',
      offers: null
    }

    this.updateOffers = this.updateOffers.bind(this);
    this.deleteOffer = this.deleteOffer.bind(this);
  }

  componentDidMount(){
    this.updateOffers(this.state.selectedFilter);
  }

  updateOffers(filter){
    if(filter === 'SHOW_ALL'){
      Api.fetchOffers().then((offers) => {
        this.setState(function(){
          return {
            selectedFilter: filter,
            offers: offers.data
          };
        });
      });
    }
    this.setState(function(){
      return {...this.state, selectedFilter: filter};
    });
  }

  deleteOffer(offer){
    Api.deleteOffer(offer).then((res)=>{
      if(res.status === 200 && res.statusText === "OK"){
        this.updateOffers("SHOW_ALL");
      }
    });
  }

  render(){
    console.log("state: ", this.state);
    return (
      <div className="row">
        <OffersNav onClick={this.updateOffers}/>
        <br/>
        {!this.state.offers ? <p className="text-center">LOADING...</p> : <OffersComponent offersList={this.state.offers} selectedFilter={this.state.selectedFilter} onDelete={this.deleteOffer}/>}
      </div>
    )
  }
}

export default OffersContainer;
