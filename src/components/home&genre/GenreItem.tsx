import React, {FC} from 'react';
import {IFilterGenre} from "#/filtersTypes";
import formatFirstToUppercase from "helpers/formatFirstToUppercase";
import {useRouter} from "next/router";
import cn from 'classnames'

interface IGenreItem {
  item: IFilterGenre
}

const GenreItem: FC<IGenreItem> = ({item}) => {
  const router = useRouter()
  const itemClass = cn({
    'text-secondary': router.asPath === `/${item.title}`,
    'text-white whitespace-nowrap cursor-pointer text-xl transition-transform': true,
    'transform duration-100 active:text-secondary hover:scale-125 md:text-2xl': true
  })

  return (
    <li
      className={itemClass}
      onPointerDown={e => e.preventDefault()}
      onClick={() => router.push(`/${item.title}`)}
    >
      {formatFirstToUppercase(item.genre)}
    </li>
  );
};

export default GenreItem;