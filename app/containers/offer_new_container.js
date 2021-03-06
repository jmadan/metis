import React, { Component } from 'react';
import offersList from '../data/offers';
import moment from 'moment';
import uuid from 'uuid/v4';

import * as Api from '../utils/api';

class OfferNewContainer extends Component {
  constructor(props){
    super(props);

    console.log("props: ", props);

    this.state = {
        offerId: uuid(),
        longDescription: '',
        shortDescription: '',
        title: '',
        startsOn: '',
        endsOn: '',
        offer_type: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let newState={};
    newState[e.target.name] = e.target.value;

    this.setState(function(){
      return Object.assign({}, this.state, newState);
    });

  }

  handleSubmit(e){
    e.preventDefault();
    Api.addOffer(this.state).then((res) => {
      if(res.status === '200'){
        this.props.history.location({pathname: '/offers'});
      }
    });
  }

  render(){
    return (
      <div className="container">
          <h2><p className="text-center">Create New Offer</p></h2>
        <br/>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title </label>
          <input name="title" type="text" className="form-control" onChange={this.handleChange} value={this.state.title} />
        </div>
        <div className="form-group">
          <label htmlFor="longDescription">Long Description </label>
          <textarea name="longDescription" type="text" className="form-control" onChange={this.handleChange} value={this.state.longDescription} />
        </div>
        <div className="form-group">
          <label htmlFor="shortDescription">Short Description </label>
          <textarea name="shortDescription" type="text" className="form-control" onChange={this.handleChange} value={this.state.shortDescription} />
        </div>
        <div className="form-group">
          <label htmlFor="startsOn">Start Date </label>
          <input name="startsOn" type="text" className="form-control" onChange={this.handleChange} value={this.state.startsOn} />
        </div>
        <div className="form-group">
          <label htmlFor="endsOn">End Date </label>
          <input name="endsOn" type="text" className="form-control" onChange={this.handleChange} value={this.state.endsOn} />
        </div>
        <div className="form-group">
          <label htmlFor="offer_type">Type of Offer </label>
          <input name="offer_type" type="text" className="form-control" onChange={this.handleChange} value={this.state.offer_type} />
        </div>
        <div>
          <button className='btn btn-success btn-lg' type="submit"> Submit </button>
          <button className='btn btn-success btn-lg' type="button"> Undo Changes </button>
        </div>
      </form>
      </div>
    )
  }
}

export default OfferNewContainer;
