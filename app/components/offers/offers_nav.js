import React from 'react';
import { NavLink } from 'react-router-dom';

const OffersNav = () => {
  return (
    <div className="col-md-12">
  		<ul className="nav nav-tabs">
  		  <li role="presentation"><NavLink activeClassName="active" to="/offers/all">All</NavLink></li>
  		  <li role="presentation"><NavLink activeClassName="active" to="/offers/active">Active Offers</NavLink></li>
  		  <li role="presentation"><NavLink activeClassName="active" to="/offers/expired">Expired Offers</NavLink></li>
		  </ul>
  	</div>
  );
}

export default OffersNav;
