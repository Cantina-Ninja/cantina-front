import React, { useState, createContext } from 'react';
import {} from 'react-burger-menu';

interface MenuContextData {
  isMenuOpen: boolean;
  toggleMenu(): void;
  stateChangeHandler(newState: any): void;
}

// make a new context
const MenuContext = createContext<MenuContextData>({} as MenuContextData);

// create the provider
const MenuProvider: React.FC = ({ children }) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: newState => setMenuOpenState(newState.isOpen),
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider, MenuContext };
