import React, { FC } from 'react';
import { MainPopup } from '@/components/ui/popup';
import { FormRemoveAccount } from '@/components/profile';

interface RemoveAccountPopupProps {
  onClose: () => void,
  isOpened: boolean
}

const PopupRemoveAccount: FC<RemoveAccountPopupProps> = ({ onClose, isOpened }) => (
  <MainPopup
    title="Удаление аккаунта"
    onClose={onClose}
    isOpened={isOpened}
  >
    <div className="space-y-4">
      <p className="text-gray-color">
        Для подтверждения удаления аккаунта введите свой email
      </p>
      <FormRemoveAccount onClose={onClose} />
    </div>
  </MainPopup>
);

export default PopupRemoveAccount;
