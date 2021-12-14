import React, {FC} from 'react';
import {INavItem} from "#/headerTypes";
import Link from 'next/link'
import cn from 'classnames'
import {useAuth} from "@/contexts/AuthContext";
import theme from "@/const/theme";
import BtnSearchHeader from "@/components/header/BtnSearchHeader";
import BtnSignOut from './BtnSignOut';

interface INavItemComponent {
  item: INavItem,
  active: boolean
}

const NavItem: FC<INavItemComponent> = ({item, active}) => {
  const {path, Icon, title, redirect, isAuth} = item
  const {user} = useAuth()

  if (item.path === '/search') {
    return (
      <li>
        <BtnSearchHeader/>
      </li>
    )
  }

  if (user && item.path === '/auth/login') {
    return (
      <li>
        <BtnSignOut/>
      </li>
    )
  }

  return (
    <li className="last:mr-0 xs:mr-2">
      <Link href={isAuth && !user ? redirect! : path}>
        <a className="w-full items-center group w-14 flex flex-col cursor-pointer py-1 sm:w-20">
          <Icon
            size={30}
            color={active ? theme.colors.primary.light : '#fff'}
            className="mb-2 h-6 group-hover:animate-bounce xs:h-10"
          />
          <span className={cn('text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 text-white', {
            'text-primary-light': active
          })}>
            {title}
          </span>
        </a>
      </Link>
    </li>
  );
};

export default NavItem;