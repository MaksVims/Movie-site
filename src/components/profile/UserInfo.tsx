import React, {FC} from 'react';
import {User} from "@firebase/auth";

interface UserInfoProps {
  user:User
}

const UserInfo:FC<UserInfoProps> = ({user}) => {
  return (
    <ul className="space-y-2">
      <li className="truncate ">
        <span className="font-medium text-xl ">Имя:</span>
        <span className="xl:text-xl ">{user?.displayName}</span>
      </li>
      <li className="truncate ">
        <span className="font-medium text-xl">Email:</span>
        <span className="xl:text-xl ">{user?.email}</span>
      </li>
      <li className="truncate">
        <span className="truncate font-medium text-xl">Phone:</span>
        <span className="xl:text-xl">89620155660</span>
      </li>
    </ul>
  );
};

export default UserInfo;