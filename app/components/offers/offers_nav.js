import React from 'react';
import { NavLink } from 'react-router-dom';

const OffersNav = (props) => {
  return (
    <div className="col-md-12">
  		<ul className="nav nav-tabs">
  		  <li role="presentation">
          <NavLink activeClassName="active" to="/offers/#" onClick={props.onClick.bind(null,'SHOW_ALL')}>All</NavLink>
        </li>
  		  <li role="presentation">
          <NavLink activeClassName="active" to="/offers/#" onClick={props.onClick.bind(null,'SHOW_ACTIVE')}>Active Offers</NavLink>
        </li>
  		  <li role="presentation">
          <NavLink activeClassName="active" to="#" onClick={props.onClick.bind(null,'SHOW_EXPIRED')}>Expired Offers</NavLink>
        </li>
		  </ul>
  	</div>
  );
}

export default OffersNav;
