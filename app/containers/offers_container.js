import React, { Component } from 'react';

import OffersNav from '../components/offers/offers_nav';

class OffersContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      offers: null
    }

  }

  render(){
    return (
      <div className="row">
        <OffersNav />

      </div>
    );
  }
}

export default OffersContainer;
