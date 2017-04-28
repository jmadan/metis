import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLogo from './header_logo';
import HeaderNav from './header_nav';

const HeaderLayout = () => {
  return (
    <div className="row">
      <HeaderLogo />
      <HeaderNav />
    </div>
  );
}

export default HeaderLayout;
