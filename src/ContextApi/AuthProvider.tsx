

import React, { useState } from 'react'
import { api } from '../utils/api';

const AuthContext = React.createContext<{
  User: UserType | null,
  login: () => Promise<UserType | null>,
}>({
  User: null,
  login: (): Promise<UserType | null> => new Promise((resolve, reject) => { })
});

export type UserType = {
  email: string;
}

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [User, setUser] = useState<UserType | null>(null);

  const login = async (): Promise<UserType | null> => {
    try {
      const { data }: { data: UserType } = await api.get("api/auth/local")
      setUser(data)
      return data;
    } catch (e: any) {
      console.warn('could not login ', e.response.data)
      return null
    }
  }

  return (
    <AuthContext.Provider value={{
      User,
      login
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}