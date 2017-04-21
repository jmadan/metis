import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLayout = () => {
  return (
      <div className="col-md-3 no-padding">
        <Link to="/">Admin Site</Link>
      </div>
  );
}

export default HeaderLayout;
