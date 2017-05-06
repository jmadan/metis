import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderLayout = () => {
  return (
      <div className="col-md-3 no-padding">
        <NavLink to="/"><img src="imgs/kempegowdaLogo.png" alt="BIAL" height="100px" /></NavLink>
      </div>
  );
}

export default HeaderLayout;
