import React, {FC, useState} from 'react';
import MainPopup from "@/components/ui/popup/MainPopup";
import {useAuth} from "@/contexts/AuthContext";
import FirebaseAuthService from "@/api/FirebaseAuthService";

interface RemoveAccountPopupProps {
  onClose: () => void,
  isOpened: boolean
}

const RemoveAccountPopup: FC<RemoveAccountPopupProps> = ({onClose, isOpened}) => {
  const [currentEmail, setCurrentEmail] = useState('')
  const {user} = useAuth()
  const isExact = currentEmail === user?.email

  const handlerRemoveAccount = async (): Promise<void> => {
    try {
      await FirebaseAuthService.deleteAccount()
    } catch (e) {
      alert(e)
    }
  }

  return (
    <MainPopup
      title="Удаление аккаунта"
      onClose={onClose}
      isOpened={isOpened}
    >
      <div className="space-y-4">
        <p className="text-gray-color">Для подтверждения удаления аккаунта введите свой email</p>
        <form>
          <div className="flex-center flex-wrap space-y-6">
            <input
              type="text"
              className="input w-full hover:border-red-400 focus:border-red-400"
              value={currentEmail}
              onChange={e => setCurrentEmail(e.target.value)}
            />
            <div className="space-x-4 flex justify-end">
              <button className="btn text-black hover:bg-gray-300">
                Отмена
              </button>
              <button
                disabled={!isExact}
                className="btn btn-danger"
                onClick={handlerRemoveAccount}
              >
                Удалить
              </button>
            </div>
          </div>
        </form>
      </div>
    </MainPopup>
  );
};

export default RemoveAccountPopup;