import React, {FC} from 'react';
import {useAuth} from "@/contexts/AuthContext";
import {CollectionState} from "@/store";

const CollectionContext = React.createContext({})

const CollectionProvider: FC = ({children}) => {
  const {user} = useAuth()

  if (user) {
    CollectionState.loadCollection(user.uid)
  }

  return (
    <CollectionContext.Provider value={{}}>
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;
