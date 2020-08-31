import React, { useState, createContext } from 'react';

interface MenuContextData {
  menuVisible: boolean;
  isMenuOpen: boolean;
  toggleMenu(): void;
  toggleMenuVisible(): void;
  stateChangeHandler(newState: any): void;
}

// make a new context
const MenuContext = createContext<MenuContextData>({} as MenuContextData);

// create the provider
const MenuProvider: React.FC = ({ children }) => {
  const [menuOpenState, setMenuOpenState] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true);

  return (
    <MenuContext.Provider
      value={{
        menuVisible,
        isMenuOpen: menuOpenState,
        toggleMenuVisible: () => setMenuVisible(!menuVisible),
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: newState => setMenuOpenState(newState.isOpen),
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider, MenuContext };
