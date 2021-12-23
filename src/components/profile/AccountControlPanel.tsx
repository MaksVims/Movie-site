import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { AlertType } from 'types';
import { FirebaseAuthService } from '@/api';
import { useToggle } from '@/hooks';
import { useAlert } from '@/contexts/AlertContext';
import { PopupRemoveAccount } from '@/components/profile';
import { errorsMessage, successMessage } from '@/const';

const AccountControlPanel: FC = () => {
  const [
    isOpenRemoveAccountPopup,
    setRemoveAccountPopupIsOpen,
    closeRemoveAccountPopup,
  ] = useToggle()
  const router = useRouter()
  const { showAlert } = useAlert()

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
        type="button"
        onClick={logout}
        className="btn btn-danger"
      >
        Выход
      </button>
      <button
        className="btn btn-danger"
        type="button"
        onClick={() => setRemoveAccountPopupIsOpen(true)}
      >
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
