import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  nome: string;
  rule: string;
}

interface SignInCredentials {
  nome: string;
  senha: string;
}

interface AuthContextData {
  token: string;
  nome: string;
  rule: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@CantinaNinja:token');
    const nome = localStorage.getItem('@CantinaNinja:nome');
    const rule = localStorage.getItem('@CantinaNinja:rule');

    if (token && nome && rule) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, nome, rule };
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
    localStorage.setItem('@CantinaNinja:rule', tipoUsuario);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, nome, rule: tipoUsuario });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@CantinaNinja:token');
    localStorage.removeItem('@CantinaNinja:nome');
    localStorage.removeItem('@CantinaNinja:rule');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        nome: data.nome,
        rule: data.rule,
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
