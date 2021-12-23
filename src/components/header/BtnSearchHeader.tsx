import React, { FC } from 'react';
import { BsSearch } from 'react-icons/bs';
import { PopupSearch } from '@/components/ui/popup';
import { useToggle } from '@/hooks';

const BtnSearchHeader: FC = () => {
  const [isOpenPopupSearch, setIsOpenPopupSearch, closePopupSearch] = useToggle()

  return (
    <>
      <button
        type="button"
        className="w-full items-center group w-14 flex flex-col cursor-pointer py-1 sm:w-20"
        onClick={() => setIsOpenPopupSearch(true)}
      >
        <BsSearch
          size={30}
          color="#fff"
          className="mb-2 h-6 group-hover:animate-bounce xs:h-10"
        />
        <span className="text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 text-white">
          Поиск
        </span>
      </button>
      <PopupSearch
        onClose={closePopupSearch}
        isOpened={isOpenPopupSearch}
      />
    </>
  );
};

export default BtnSearchHeader;
