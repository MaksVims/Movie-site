import React, {FC} from 'react';
import FirebaseAuthService from "@/api/FirebaseAuthService";
import useToggle from "@/hooks/useToggle";
import PopupRemoveAccount from "@/components/profile/PopupRemoveAccount";
import {useRouter} from "next/router";
import {useAlert} from "@/contexts/AlertContext";
import successMessage from "@/const/successMessage";
import errorsMessage from "@/const/errorsMessage";
import {AlertType} from "#/alertCtxTypes";

const AccountControlPanel: FC = () => {
  const [isOpenRemoveAccountPopup, setRemoveAccountPopupIsOpen, closeRemoveAccountPopup] = useToggle()
  const router = useRouter()
  const {showAlert} = useAlert()

  const logout = async () => {
    try {
      await FirebaseAuthService.logout()
      await router.push('/')
      showAlert(successMessage.LOGOUT, AlertType.SUCCESS)
    } catch {
      showAlert(errorsMessage.LOGOUT, AlertType.ERROR)
    }
  }

  return (
    <div
      className="flex flex-col space-y-4 items-center justify-center max-h-24"
    >
      <button
        onClick={logout}
        className="btn btn-danger"
      >
        Выход
      </button>
      <button className="btn btn-danger" onClick={() => setRemoveAccountPopupIsOpen(true)}>
        Удаление аккаунта
      </button>
      <PopupRemoveAccount
        onClose={closeRemoveAccountPopup}
        isOpened={isOpenRemoveAccountPopup}
      />
    </div>
  );
};

export default AccountControlPanel;