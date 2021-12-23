import React, { FC, useEffect } from 'react';
import { AlertType } from 'types';
import { useAuth } from '@/contexts/AuthContext';
import { CollectionState } from '@/store';
import { useAlert } from '@/contexts/AlertContext';
import { CustomError } from '@/factory/CustomError';

const CollectionContext = React.createContext({})

const CollectionProvider: FC = ({ children }) => {
  const { user } = useAuth()
  const { showAlert } = useAlert()

  useEffect(() => {
    const loadCollection = async () => {
      if (user) {
        await CollectionState.loadCollection(user.uid)
      }
    }

    try {
      loadCollection()
    } catch (e) {
      if (e instanceof CustomError) {
        showAlert(e.message, AlertType.ERROR)
      }
    }
  }, [user])

  return (
    <CollectionContext.Provider value={{}}>
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;
