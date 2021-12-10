import React, {FC} from 'react';
import FirebaseAuthService from "@/api/FirebaseAuthService";
import useToggle from "@/hooks/useToggle";
import RemoveAccountPopup from "@/components/profile/RemoveAccountPopup";

const AccountControlPanel: FC = () => {
  const [isOpenRemoveAccountPopup, setRemoveAccountPopupIsOpen, closeRemoveAccountPopup] = useToggle()

  return (
    <div
      className="flex flex-col space-y-4 items-center justify-center max-h-24"
    >
      <button
        onClick={() => FirebaseAuthService.logout()}
        className="btn btn-danger"
      >
        Выход
      </button>
      <button className="btn btn-danger" onClick={() => setRemoveAccountPopupIsOpen(true)}>
        Удаление аккаунта
      </button>
      <RemoveAccountPopup
        onClose={closeRemoveAccountPopup}
        isOpened={isOpenRemoveAccountPopup}
      />
    </div>
  );
};

export default AccountControlPanel;