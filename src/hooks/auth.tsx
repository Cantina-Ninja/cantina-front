import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  nome: object;
}

interface SignInCredentials {
  nome: string;
  senha: string;
}

interface AuthContextData {
  token: string;
  nome: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@CantinaNinja:token');
    const nome = localStorage.getItem('@CantinaNinja:nome');

    if (token && nome) {
      return { token, nome: JSON.parse(nome) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ nome, senha }) => {
    const response = await api.post('login', {
      nome,
      senha,
    });

    console.log(response);

    const { token } = response.data;

    localStorage.setItem('@CantinaNinja:token', token);
    localStorage.setItem('@CantinaNinja:nome', nome);

    setData({ token, nome });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@CantinaNinja:token');
    localStorage.removeItem('@CantinaNinja:nome');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token: data.token, nome: data.nome, signIn, signOut }}
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
