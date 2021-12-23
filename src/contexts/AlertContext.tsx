import React, { FC, useContext, useMemo } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AlertType } from 'types';
import 'react-toastify/dist/ReactToastify.css'

interface IAlertContext {
  showAlert: (text: string, type: AlertType) => void
}

const AlertContext = React.createContext<IAlertContext>({} as IAlertContext)

const AlertProvider: FC = ({ children }) => {
  const showAlert = (text: string, type: AlertType) => {
    switch (type) {
      case AlertType.ERROR:
        return toast.error(text)
      case AlertType.SUCCESS:
        return toast.success(text)
      default:
        return null
    }
  }

  const alertData = useMemo(() => ({ showAlert }), [showAlert])

  return (
    <AlertContext.Provider value={alertData}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar
        pauseOnHover={false}
      />

    </AlertContext.Provider>
  );
};

export default AlertProvider;

export const useAlert = () => useContext(AlertContext)
