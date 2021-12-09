import React, {FC, useEffect} from 'react';
import {useAuth} from "@/contexts/AuthContext";
import {CollectionState} from "@/store";

const CollectionContext = React.createContext({})

const CollectionProvider: FC = ({children}) => {
  const {user} = useAuth()

  useEffect(() => {
    if (user) {
      CollectionState.loadCollection(user.uid)
    }
  }, [user])

  return (
    <CollectionContext.Provider value={{}}>
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;
