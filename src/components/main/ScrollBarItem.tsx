import React, {FC} from 'react';
import {useRouter} from "next/router";
import cn from 'classnames'
import {IFilterGenre} from "types";
import {formatFirstToUppercase} from "helpers";

interface ScrollBarItemProps {
  item: IFilterGenre
}

const ScrollBarItem: FC<ScrollBarItemProps> = ({item}) => {
  const router = useRouter()
  const itemClass = cn({
    'text-primary-light': router.asPath === `/${item.title}`,
    'text-white whitespace-nowrap cursor-pointer text-xl transition-transform': true,
    'transform duration-100 active:text-primary-light hover:scale-125 md:text-2xl': true
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

export default ScrollBarItem;