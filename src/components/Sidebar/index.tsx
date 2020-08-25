import React from 'react';
import { Props } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import { MenuSlide } from './styles';
import Logo from '../../assets/logo.svg';

const Sidebar: React.FC<Props> = ({ ...props }) => {
  return (
    // Pass on our props
    <MenuSlide {...props}>
      <div className="logo">
        <img src={Logo} alt="CantnaNinja" />
      </div>
      <div className="container-menus">
        <NavLink
          activeClassName="active_menu"
          className="menu_item"
          to="/dashboard"
          exact
        >
          Dashboard
        </NavLink>
        <NavLink activeClassName="active_menu" exact to="/produtos">
          Produtos
        </NavLink>
        <NavLink activeClassName="active_menu" exact to="/usuarios">
          Usuários
        </NavLink>
      </div>
    </MenuSlide>
  );
};

export default Sidebar;
