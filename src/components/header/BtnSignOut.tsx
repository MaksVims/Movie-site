import React, {FC} from 'react';
import {ImExit} from "react-icons/im";
import FirebaseAuthService from "@/api/FirebaseAuthService";
import successMessage from "@/const/successMessage";
import {AlertType} from "#/alertCtxTypes";
import errorsMessage from "@/const/errorsMessage";
import {useAlert} from "@/contexts";

const BtnSignOut: FC = () => {
  const {showAlert} = useAlert()

  const signOut = async () => {
    try {
      await FirebaseAuthService.logout()
      showAlert(successMessage.LOGOUT, AlertType.SUCCESS)
    } catch (e) {
      showAlert(errorsMessage.LOGOUT, AlertType.ERROR)
    }
  }

  return (
    <>
      <button
        className="w-full items-center group w-14 flex flex-col cursor-pointer py-1 sm:w-20"
        onClick={signOut}
      >
        <ImExit
          size={30}
          color="#fff"
          className="mb-2 h-6 group-hover:animate-bounce xs:h-10"
        />
        <span className='text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 text-white'>
        Выйти
      </span>
      </button>
    </>
  );
};

export default BtnSignOut