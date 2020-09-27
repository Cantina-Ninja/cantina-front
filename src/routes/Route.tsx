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
  authorisedUsers?: string;
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

const RedirectRoute: React.FC<any> = ({
  roleRoute,
  location,
  component: Component,
}) => {
  const roles = useAuth()?.roles || '';

  if (roles.indexOf('ROLE_ADMIN') > -1 || roles.indexOf(roleRoute) > -1)
    return <Component />;

  return (
    <Redirect
      to={{
        pathname: '/error',
        state: { from: location },
      }}
    />
  );
};

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  authorisedUsers = '',
  activeMenu = false,
  component: Component,
  ...rest
}: any) => {
  const { isMenuOpen } = useContext(MenuContext);
  const { nome } = useAuth();
  const roles = useAuth()?.roles || '';

  const rolePath =
    roles.indexOf('ROLE_ADMIN') > -1 ? '/dashboard' : '/vendedor';

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!nome ? (
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
                <RedirectRoute
                  roleRoute={authorisedUsers}
                  component={Component}
                  location={location}
                />
              </div>
            ) : (
              <Component />
            )}
          </>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : rolePath,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
