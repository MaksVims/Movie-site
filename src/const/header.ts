import {AiOutlineHome} from "react-icons/ai";
import {BsLightningCharge, BsSearch} from "react-icons/bs";
import {BiCollection, BiUser} from "react-icons/bi";
import {INavItem} from "#/headerTypes";


export const NAV_ITEMS: INavItem[] = [
  {title: 'Домой', Icon: AiOutlineHome, path: '/'},
  {title: 'Премьеры', Icon: BsLightningCharge, path: '/premieres'},
  {title: 'Коллекция', Icon: BiCollection, path: '/collection', isAuth: true, redirect: '/auth/login'},
  {title: 'Аккаунт', Icon: BiUser, path: '/account', isAuth: true, redirect: '/auth/login'},
  {title: 'Поиск', Icon: BsSearch, path: '/search'},
]