import React, { Component } from 'react';
import offersList from '../data/offers';
import * as Api from '../utils/api';

class OfferNewContainer extends Component {
  constructor(props){
    super(props);

    console.log("props: ", props);

    this.state = {
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

  handleChange(e) {
    let newState={};
    newState[e.target.name] = e.target.value;
    this.setState(function(){
      return newState;
    });

  }

  handleSubmit(e){
    e.preventDefault();
    Api.addData(this.state);
    //need to handle the form submission
  }

  render(){
    return (
      <div className="container">
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
