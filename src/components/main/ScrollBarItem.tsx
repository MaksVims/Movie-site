import React, { FC } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames'
import { IFilterGenre } from 'types';
import { formatFirstToUppercase } from 'helpers';

interface ScrollBarItemProps {
  item: IFilterGenre
}

const ScrollBarItem: FC<ScrollBarItemProps> = ({ item }) => {
  const router = useRouter()
  const isActive = router.asPath === `/${item.title}`
  const itemClass = cn({
    'text-primary-light': isActive,
    'text-white whitespace-nowrap cursor-pointer text-xl transition-transform': true,
    'transform duration-100 active:text-primary-light hover:scale-125 md:text-2xl': true,
  })

  return (
    <li
      role="option"
      aria-selected={isActive}
      className={itemClass}
      onPointerDown={(e) => e.preventDefault()}
      onClick={() => router.push(`/${item.title}`)}
    >
      {formatFirstToUppercase(item.genre)}
    </li>
  );
};

export default ScrollBarItem;
