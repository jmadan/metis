import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// const Router = ReactRouter.;
// const Route = ReactRouter.Route;

// import components
import Home from './components/home';
import HeaderLayout from './components/header/header_layout';
import OffersContainer from './containers/offers_container';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Router>
        <div className="container">
          <HeaderLayout />
          <Route exact path="/" component={Home} />
          <Route path="/offers" component={OffersContainer} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
