import React, { Component } from 'react';
import offersList from '../data/offers';
import moment from 'moment';
import mongo from 'mongodb';

import * as Api from '../utils/api';


class OfferNewContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
        _id: '',
        offerId: '',
        longDescription: '',
        shortDescription: '',
        title: '',
        startsOn: '',
        endsOn: '',
        type: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    Api.fetchOffer(this.props.match.params.id).then((offer) => {
          this.setState(function(){
            return {
              _id: offer.data._id,
              offerId: offer.data.offerId,
              longDescription: offer.data.longDescription,
              shortDescription: offer.data.shortDescription,
              title: offer.data.title,
              startsOn: offer.data.startsOn,
              endsOn: offer.data.endsOn,
              type: offer.data.type
            };
          });
    });
  }

  handleChange(e) {
    let newState={};
    if (e.target.name === 'startsOn' || e.target.name === 'endsOn') {
      console.log("unix date: ", moment(e.target.value).unix());
      newState[e.target.name] = moment(e.target.value).unix();
    } else {
      newState[e.target.name] = e.target.value;
    }

    this.setState(function(){
      return Object.assign({}, this.state, newState);
    });

  }

  handleSubmit(e){
    e.preventDefault();
    Api.updateOffer(this.state).then((res) => {
      if(res.data){
        this.setState(function(){
          return {
            offerId: res.data.offerId,
            longDescription: res.data.longDescription,
            shortDescription: res.data.shortDescription,
            title: res.data.title,
            startsOn: res.data.startsOn,
            endsOn: res.data.endsOn,
            type: res.data.type
          };
        });
      }
    });
  }

  render(){
    return (
      <div className="container">
          <h2><p className="text-center">Edit Offer</p></h2>
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
          <input name="startsOn" type="text" className="form-control" onChange={this.handleChange} value={moment.unix(this.state.startsOn).format('L')} />
        </div>
        <div className="form-group">
          <label htmlFor="endsOn">End Date </label>
          <input name="endsOn" type="text" className="form-control" onChange={this.handleChange} value={moment.unix(this.state.endsOn).format('L')} />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type of Offer </label>
          <input name="type" type="text" className="form-control" onChange={this.handleChange} value={this.state.type} />
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
