import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <div className="col-md-6 top-bar">
  		<ul className="nav nav-tabs">
  		  <li role="presentation"><NavLink activeClassName="active" to="/offers">Offers</NavLink></li>
  		  <li role="presentation"><NavLink activeClassName="active" to="/must-buy">Must Buy / Must Try</NavLink></li>
  		  <li role="presentation"><NavLink activeClassName="active" to="/bus-schedule">Bus Schedule</NavLink></li>
  		  <li role="presentation"><NavLink activeClassName="active" to="/login">Login</NavLink></li>
		  </ul>
  	</div>
  );
}

export default HeaderNav;
