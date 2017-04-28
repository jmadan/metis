import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

import OfferRow from './offer_row';

const OffersComponent = (props) => {
  let offersToBeDisplayed = [];
  switch(props.selectedFilter)
  {
    case "SHOW_ACTIVE":
      offersToBeDisplayed = props.offers.filter((f) => { return moment.unix(f.endsOn).isAfter(moment())});
      break;
    case "SHOW_EXPIRED":
      offersToBeDisplayed = props.offers.filter((f) => { return moment.unix(f.endsOn).isBefore(moment())});
      break;
    case "SHOW_ALL":
    default:
      offersToBeDisplayed = props.offers;
      break;
  }

  return (
    <div className="row">
      <table className="table table-hover">
			<thead>
			<tr>
				<th>Offer Image</th>
				<th>Title</th>
				<th>Description</th>
				<th>Valid till</th>
				<th>Actions</th>
			</tr>
			</thead>
      {offersToBeDisplayed.length > 0 ? <OfferRow items={offersToBeDisplayed} editOffer={props.formState}/> : <tbody><tr><td colSpan="5">No Offers to Display !!</td></tr></tbody>}
			</table>
    </div>
  );
}

OffersComponent.propTypes = {
  offers: PropTypes.array.isRequired,
  formState: PropTypes.func.isRequired
}

export default OffersComponent;
