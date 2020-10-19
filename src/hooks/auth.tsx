import React, { createContext, useCallback, useContext, useState } from 'react';

interface AuthContextData {
  name: string;
  signIn(user: string): void;
  signOut(): void;
}

interface AuthState {
  user: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@Inter-clone:user');

    if (user) {
      return { user };
    }

    return {} as AuthState;
  });

  const signIn = useCallback((user: string) => {
    localStorage.setItem('@Inter-clone:user', user);

    setData({ user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Inter-clone:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ name: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
