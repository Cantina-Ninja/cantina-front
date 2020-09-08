import React, { useContext } from 'react';
import {
  RouteProps as ReactDOMRouterProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { MenuContext } from '../hooks/menu';
import Sidebar from '../components/Sidebar';
import Back from '../components/Back';
import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  activeMenu?: boolean;
  component: React.ComponentType;
}

/**
 * Casos de Uso
 * ---------------------------------------------------------------
 * Usuário privado & usuário está autenticado: Continuar
 * Rota for privada e não estiver autenticado: Redireciconar login
 * Rota não ser privada e estar autenticado: Redirecionar Dash
 * Rota não ser privada e nao estar autenticado: Continuar
 */

const Navigation: React.FC = () => {
  const { isMenuOpen, stateChangeHandler } = useContext(MenuContext);

  return (
    <Sidebar
      isOpen={isMenuOpen}
      onStateChange={state => stateChangeHandler(state)}
    />
  );
};

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  activeMenu = false,
  component: Component,
  ...rest
}) => {
  const { token, usuario } = useAuth();
  const { isMenuOpen } = useContext(MenuContext);
  console.log(token);
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!true ? (
          <>
            {isPrivate && activeMenu && <Navigation />}
            {!activeMenu && isPrivate && <Back />}
            {isPrivate ? (
              <div
                style={{
                  marginLeft: isMenuOpen ? '230px' : '',
                  transition: 'all .6s',
                }}
              >
                <Component />
              </div>
            ) : (
              <Component />
            )}
          </>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
