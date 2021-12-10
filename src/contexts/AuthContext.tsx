import React, {FC, useContext, useEffect, useMemo, useRef, useState} from 'react';
import {onAuthStateChanged, User} from "@firebase/auth";
import {auth} from "service/firebase";

interface IAuthContext {
  user: User | null,
  loadingUser: boolean
}

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext)

const AuthContextProvider: FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null)
  const [loadingUser, setLoadingUser] = useState(false)

  useEffect(() => {
    setLoadingUser(true)
    return onAuthStateChanged(auth, user => {
      setUser(user || null)
      setLoadingUser(false)
    })
  }, [])

  const credentials: IAuthContext = useMemo(() => ({user, loadingUser}), [user, loadingUser])

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