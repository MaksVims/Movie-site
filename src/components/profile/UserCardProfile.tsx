import React, {FC} from 'react';
import UserInfo from "@/components/profile/UserInfo";
import {User} from "@firebase/auth";
import Avatar from "@/components/profile/Avatar";

interface UserCardProfileProps {
  user: User
  classNames?: string
}

const UserCardProfile: FC<UserCardProfileProps> = ({user,classNames}) => {
  return (
    <div className={`flex flex-col justify-between space-y-6 h-full ${classNames}`}>
      <div className="flex flex-col space-y-6">
        <Avatar
          width={120}
          height={120}
          classNames="self-center"
        />
        <UserInfo user={user}/>
      </div>
      <button
        className="btn btn-success sm:text-sm sm:w-auto sm:self-end w-full sm:w-24!"
      >
        Save
      </button>
    </div>
  );
};

export default UserCardProfile;