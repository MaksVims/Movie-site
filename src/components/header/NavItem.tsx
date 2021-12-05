import React, {FC} from 'react';
import {INavItem} from "#/headerTypes";
import Link from 'next/link'
import {SECONDARY_COLOR} from "@/const";
import cn from 'classnames'

interface INavItemComponent {
  item: INavItem,
  active: boolean
}

const NavItem: FC<INavItemComponent> = ({item, active}) => {
  const {path, Icon, title} = item

  return (
    <li className="last:mr-0 xs:mr-2">
      <Link href={path}>
        <a className="w-full items-center group w-12 flex flex-col cursor-pointer py-1 sm:w-20">
          <Icon
            size={30}
            color={active ? SECONDARY_COLOR : '#fff'}
            className="mb-2 h-6 group-hover:animate-bounce xs:h-10"
          />
          <span className={cn('text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 text-white', {
            'text-secondary': active
          })}>
            {title}
          </span>
        </a>
      </Link>
    </li>
  );
};

export default NavItem;