import React, {FC} from 'react';
import {IFilterGenre} from "#/filtersTypes";
import formatFirstToUppercase from "helpers/formatFirstToUppercase";

interface IGenreItem {
  item: IFilterGenre
}

const GenreItem: FC<IGenreItem> = ({item}) => {
  return (
    <li
      className="text-white whitespace-nowrap cursor-pointer text-xl transition-transform
      transform duration-100 active:text-secondary hover:scale-125 md:text-2xl"
      onPointerDown={e => e.preventDefault()}
    >
      {formatFirstToUppercase(item.genre)}
    </li>
  );
};

export default GenreItem;