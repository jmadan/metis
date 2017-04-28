import React from 'react';

const OfferForm = (props) => {
  return (
    <form className="form-horizontal" >
        <div className="form-group">
          <label htmlFor="offerId">Offer ID</label>
          <input name="offerId" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title </label>
          <input name="title" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="longDescription">Long Description </label>
          <textarea name="longDescription" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="shortDescription">Short Description </label>
          <textarea name="shortDescription" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="startsOn">Start Date </label>
          <input name="startsOn" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="endsOn">End Date </label>
          <input name="endsOn" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type of Offer </label>
          <input name="type" type="text" className="form-control" />
        </div>
        <div>
          <button className='btn btn-success btn-block' type="submit">Submit</button>
          <button className='btn btn-success btn-block' type="button">Undo Changes</button>
        </div>
      </form>
  )
}

export default OfferForm;
