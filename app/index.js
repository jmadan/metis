import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as Api from './utils/api';
import offersList from './data/offers';

// import components
import Home from './components/home';
import HeaderLayout from './components/header/header_layout';
import OffersContainer from './containers/offers_container';
import OfferNewContainer from './containers/offer_new_container';
import OfferEditContainer from './containers/offer_edit_container';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offersList: null
    }
    this.updateAppOfferList = this.updateAppOfferList.bind(this);
  }

  updateAppOfferList(offers){
    this.setState((offers) => {
      return {...this.state, offersList: offers}
    })
  }

  render(){
    console.log(this.state);
    return (
      <Router>
        <div className="container">
          <HeaderLayout />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/offers" component={OffersContainer} />
            <Route exact path="/offers/offer/new" component={OfferNewContainer} />
            <Route exact path="/offers/offer/edit/:id" component={OfferEditContainer} />
            <Route render={()=>{
              return (<div className="container">
                        <br/><br/><br/>
                        <div className="jumbotron">
                          <h1>What you looking for exists in ALTERNATE WORLD!</h1>
                        </div>
                      </div>)
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
