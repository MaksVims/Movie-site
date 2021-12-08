import React, {FC, useContext, useEffect, useMemo, useState} from 'react';
import {onAuthStateChanged, User} from "@firebase/auth";
import {auth} from "service/firebase";

interface IAuthContext {
  user: User | null,
}

const AuthContext = React.createContext<IAuthContext>({user: null})

const AuthContextProvider: FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      setUser(user || null)
    })
  }, [])

  const credentials: IAuthContext = useMemo(() => ({user}), [user])

  return (
    <AuthContext.Provider value={credentials}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = (): IAuthContext => {
  return useContext(AuthContext)
}