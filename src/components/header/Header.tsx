import React, {FC} from 'react';
import {NAV_ITEMS} from "@/const/header";
import NavItem from "@/components/header/NavItem";
import Image from "next/image";
import {useRouter} from "next/router";

const Header: FC = () => {
  const router = useRouter()
  return (
    <header className="flex flex-col m-5 items-center sm:flex-row sm:justify-between h-auto relative z-20">
      <nav className="w-full mb-2 sm:mb-0 mt-2">
        <ul className="flex justify-center items-center sm:justify-evenly max-w-2xl">
          {NAV_ITEMS.map(item => (
            <NavItem
              key={item.title}
              item={item}
              active={router.asPath === item.path}
            />
          ))}
        </ul>
      </nav>
      <Image
        src='/images/logo.png'
        alt="logo"
        className="object-contain"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;