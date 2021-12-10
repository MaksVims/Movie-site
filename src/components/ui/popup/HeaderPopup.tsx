import React, {FC} from 'react';
import {CgClose} from "react-icons/cg";

interface HeaderPopupProps {
  onClose: () => void
  title: string
}

const HeaderPopup: FC<HeaderPopupProps> = ({title, onClose}) => {
  return (
    <div className="flex items-center justify-between w-full mb-10">
      <h2 className="font-medium text-xl flex-1 text-center">{title}</h2>
      <CgClose
        size={25}
        className="cursor-pointer hover:scale-105"
        onClick={onClose}
      />
    </div>
  );
};

export default HeaderPopup;