import React, { useContext, useEffect } from 'react';
import {
  RouteProps as ReactDOMRouterProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { MenuContext } from '../hooks/menu';
import Sidebar from '../components/Sidebar';

// import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
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

const Navigation = () => {
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
  component: Component,
  ...rest
}) => {
  const user = true;
  const { isMenuOpen } = useContext(MenuContext);

  useEffect(() => {
    // alert(isMenuOpen);
  }, [isMenuOpen]);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <>
            {isPrivate && <Navigation />}
            <div
              style={{
                marginLeft: isMenuOpen ? '340px' : '110px',
                transition: 'all .6s',
              }}
            >
              <Component />
            </div>
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
