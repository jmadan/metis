import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderLayout = () => {
  return (
      <div className="col-md-3 no-padding">
        <NavLink to="/">Admin Site</NavLink>
      </div>
  );
}

export default HeaderLayout;
