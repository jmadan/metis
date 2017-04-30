import React from 'react';
import { Link }from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

function formatDate(d){
  return moment.unix(d).format('LL');
}

const OfferRow = (props) => {

  return (
    <tbody>
      {props.items.map((offer) => {

        return (<tr key={offer._id.$oid}>
    			<td><img src={`https://s3-ap-southeast-1.amazonaws.com/images/outlets/offers/${offer._id.$oid}.png`} alt="..." className="img-thumbnail" /></td>
    			<td>{offer.title}</td>
    			<td>{offer.shortDescription}</td>
    			<td>{formatDate(offer.endsOn)}</td>
    			<td>
    				<p><Link to={`/offers/offer/edit/${offer.offerId}`} className="btn btn-success btn-default active">Edit</Link></p>
    				<p><button className="btn btn-danger btn-default">Delete</button></p>
    			</td>
    		</tr>);
      })}
    </tbody>
  );
}

OfferRow.propTypes = {
  items: PropTypes.array.isRequired
}

export default OfferRow;
