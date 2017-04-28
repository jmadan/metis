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
      offers: [],
      toggleModal: false
    }

    this.updateOffers = this.updateOffers.bind(this);
    // this.formState = this.formState.bind(this);
    this.offerForm = this.offerForm.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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

  offerForm(offer){
    console.log("offerToEdit : ", offer);
  }

  toggleModal(toggleModal){
    this.setState(()=>{
      return Object.assign({}, ...this.state, {toggleModal: toggleModal})
    });
  }

  render(){
    console.log("state: ", this.state);
    return (
      <div className="row">
        <OffersNav onClick={this.updateOffers}/>
        <br/>
        {!this.state.offers ? <p>Need to get some Offers</p> : <OffersComponent {...this.state} formState={this.toggleModal}/>}
      </div>
    )
  }
}

export default OffersContainer;
