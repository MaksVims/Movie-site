import {AlertType} from '#/alertCtxTypes';
import React, {FC, useContext} from 'react';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

interface IAlertContext {
  showAlert: (text: string, type: AlertType) => void
}

const AlertContext = React.createContext<IAlertContext>({} as IAlertContext)

const AlertProvider: FC = ({children}) => {

  const showAlert = (text: string, type: AlertType) => {
    switch (type) {
      case AlertType.ERROR:
        return toast.error(text)
      case AlertType.SUCCESS:
        return toast.success(text)
    }
  }

  return (
    <AlertContext.Provider value={{showAlert}}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar={true}
        pauseOnHover={false}
      />

    </AlertContext.Provider>
  );
};

export default AlertProvider;

export const useAlert = () => useContext(AlertContext)