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
      offersToBeDisplayed = props.offersList.filter((f) => { return moment.unix(f.endsOn).isAfter(moment())});
      break;
    case "SHOW_EXPIRED":
      offersToBeDisplayed = props.offersList.filter((f) => { return moment.unix(f.endsOn).isBefore(moment())});
      break;
    case "SHOW_ALL":
    default:
      offersToBeDisplayed = props.offersList;
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
      {offersToBeDisplayed.length > 0 ? <OfferRow items={offersToBeDisplayed} /> : <tbody><tr><td colSpan="5"><p className="text-center">No Offers to Display !!</p></td></tr></tbody>}
			</table>
    </div>
  );
}

OffersComponent.propTypes = {
  offersList: PropTypes.array.isRequired,
  selectedFilter: PropTypes.string.isRequired
}

export default OffersComponent;
