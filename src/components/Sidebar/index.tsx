import React from 'react';
import { Props } from 'react-burger-menu';

import { MenuSlide } from './styles';

const Sidebar: React.FC<Props> = ({ ...props }) => {
  return (
    // Pass on our props
    <MenuSlide {...props}>
      <div>saddsadsa</div>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/services">
        Services
      </a>
      <a className="menu-item" href="/contact">
        Contact us
      </a>
    </MenuSlide>
  );
};

export default Sidebar;
