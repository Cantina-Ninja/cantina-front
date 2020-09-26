import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  nome: string;
  roles: string;
}

interface SignInCredentials {
  nome: string;
  senha: string;
}

interface AuthContextData {
  token: string;
  nome: string;
  roles: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@CantinaNinja:token');
    const nome = localStorage.getItem('@CantinaNinja:nome');
    const roles = localStorage.getItem('@CantinaNinja:roles');

    if (token && nome && roles) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, nome, roles };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ nome, senha }) => {
    const response = await api.post('login', {
      nome,
      senha,
    });

    const { token, tipoUsuario } = response.data;

    localStorage.setItem('@CantinaNinja:token', token);
    localStorage.setItem('@CantinaNinja:nome', nome);
    localStorage.setItem('@CantinaNinja:roles', tipoUsuario);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, nome, roles: tipoUsuario });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@CantinaNinja:token');
    localStorage.removeItem('@CantinaNinja:nome');
    localStorage.removeItem('@CantinaNinja:roles');

    setData({} as AuthState);
  }, []);

  // Response interceptor for API calls
  api.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 403 || error.response.status === 401) {
        signOut();
      }
    },
  );

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        nome: data.nome,
        roles: data.roles,
        signIn,
        signOut,
      }}
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
