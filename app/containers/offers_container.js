import React, { Component } from 'react';

import OffersNav from '../components/offers/offers_nav';
import OffersComponent from '../components/offers/offers_component';
import OfferFormComponent from '../components/offers/offer_form';
import ModalComponent from '../components/modal_component';

import * as Api from '../utils/api';
import offersList from '../data/offers';

class OffersContainer extends Component {
  constructor(props){
    super(props);

    console.log("props: ", props);

    this.state = {
      selectedFilter: 'SHOW_ALL',
      offers: null,
      toggleModal: false
    }

    this.updateOffers = this.updateOffers.bind(this);
    this.offerForm = this.offerForm.bind(this);
  }

  componentDidMount(){
    this.updateOffers(this.state.selectedFilter);
  }

  updateOffers(filter){
    Api.fetchOffers().then((offers) => {
      this.setState(function(){
        return {
          selectedFilter: filter,
          offers: offers.data
        };
      });
    });
  }

  offerForm(offer){
    console.log("offerToEdit : ", offer);
  }

  render(){
    console.log("state: ", this.state);
    return (
      <div className="row">
        <OffersNav onClick={this.updateOffers}/>
        <br/>
        {!this.state.offers ? <p className="text-center">LOADING...</p> : <OffersComponent {...this.state} />}
      </div>
    )
  }
}

export default OffersContainer;
