import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  usuario: object;
}

interface SignInCredentials {
  usuario: string;
  senha: string;
}

interface AuthContextData {
  token: string;
  usuario: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@CantinaNinja:token');
    const usuario = localStorage.getItem('@CantinaNinja:usuario');

    if (token && usuario) {
      return { token, usuario: JSON.parse(usuario) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ usuario, senha }) => {
    const response = await api.post('login', {
      usuario,
      senha,
    });

    console.log(response);

    // const { token } = response.data;
    const token = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

    localStorage.setItem('@CantinaNinja:token', String(token));
    localStorage.setItem('@CantinaNinja:usuario', JSON.stringify(usuario));

    setData({ token, usuario });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@CantinaNinja:token');
    localStorage.removeItem('@CantinaNinja:usuario');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token: data.token, usuario: data.usuario, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado em um AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
