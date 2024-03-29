import React, { useCallback } from 'react';
import { Props } from 'react-burger-menu';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { MenuSlide } from './styles';
import Logo from '../../assets/logo.svg';
import { ReactComponent as Hamburguer } from '../../assets/burguer.svg';

const Sidebar: React.FC<Props> = ({ ...props }) => {
  const { signOut } = useAuth();
  const history = useHistory();

  const handleSignOut = useCallback(() => {
    signOut();
    history.push('/');
  }, []);

  const roles = useAuth()?.roles || '';

  const rolePath =
    roles.indexOf('ROLE_ADMIN') > -1 ? '/dashboard' : '/vendedor';

  return (
    <MenuSlide customBurgerIcon={<Hamburguer />} {...props}>
      <div className="logo">
        <img src={Logo} alt="CantnaNinja" />
      </div>
      <div className="container-menus">
        <header>
          {roles.indexOf('ROLE_ADMIN') > -1 && (
            <>
              {' '}
              <NavLink activeClassName="active_menu" to="/dashboard" exact>
                Dashboard
              </NavLink>
              <NavLink activeClassName="active_menu" exact to="/produtos">
                Produtos
              </NavLink>
              <NavLink activeClassName="active_menu" exact to="/usuarios">
                Usuários
              </NavLink>
              <NavLink activeClassName="active_menu" exact to="/vendas">
                Vendas
              </NavLink>
            </>
          )}
          <NavLink activeClassName="active_menu" exact to="/vendedor">
            Vendedor
          </NavLink>
          <NavLink activeClassName="active_menu" exact to="/ajuda">
            Ajuda
          </NavLink>
        </header>
        <footer>
          <button type="button" onClick={handleSignOut}>
            Log out
          </button>
        </footer>
      </div>
    </MenuSlide>
  );
};

export default Sidebar;
