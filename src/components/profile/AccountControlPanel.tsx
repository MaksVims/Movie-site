import React, {FC} from 'react';
import FirebaseAuthService from "@/api/FirebaseAuthService";

const AccountControlPanel: FC = () => {
  return (
    <div
      className="flex flex-col xs:flex-row xs:flex-wrap space-y-4 xs:space-y-0 items-center space-x-4 justify-center max-h-24"
    >
      <button
        onClick={() => FirebaseAuthService.logout()}
        className="btn btn-danger"
      >
        Выход
      </button>
      <button className="btn btn-danger">
        Удаление аккаунта
      </button>
    </div>
  );
};

export default AccountControlPanel;