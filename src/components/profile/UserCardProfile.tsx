import React, {FC} from 'react';
import {User} from "@firebase/auth";
import {useToggle} from "@/hooks";
import {UserCard} from "@/components/ui";
import {PopupEditUserData} from "@/components/profile";

interface UserCardProfileProps {
  user: User
  classNames?: string
}

const UserCardProfile: FC<UserCardProfileProps> = ({user, classNames}) => {
  const [isOpenEditPopup, setIsOpenEditPopup, closeEditPopup] = useToggle()

  return (
    <div className={`flex flex-col justify-between space-y-6 h-full ${classNames || ''}`}>
      <UserCard
        user={user}
        classNames="sm:space-y-10"
      />
      <button
        onClick={() => setIsOpenEditPopup(true)}
        className="btn btn-success w-full sm:text-sm sm:w-auto sm:self-end sm:w-24!"
      >
        Изменить
      </button>
      <PopupEditUserData
        onClose={closeEditPopup}
        isOpened={isOpenEditPopup}
      />
    </div>
  );
};

export default React.memo(UserCardProfile);