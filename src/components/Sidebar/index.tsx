import React from 'react';
import { Props } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import { MenuSlide } from './styles';

const Sidebar: React.FC<Props> = ({ ...props }) => {
  return (
    // Pass on our props
    <MenuSlide {...props}>
      <div>LOGO</div>
      <Link className="menu-item" to="/">
        Dashboard
      </Link>
      <Link className="menu-item" to="/">
        Estoque
      </Link>
      <Link className="menu-item" to="/">
        Usuários
      </Link>
    </MenuSlide>
  );
};

export default Sidebar;
