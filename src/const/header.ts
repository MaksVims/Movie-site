import {AiOutlineHome} from "react-icons/ai";
import {BsLightningCharge, BsSearch} from "react-icons/bs";
import {BiCollection, BiUser} from "react-icons/bi";
import {INavItem} from "#/headerTypes";


export const NAV_ITEMS: INavItem[] = [
  {title: 'Домой', Icon: AiOutlineHome, path: '/'},
  {title: 'Тренды', Icon: BsLightningCharge, path: '/trending'},
  {title: 'Коллекция', Icon: BiCollection, path: '/collection'},
  {title: 'Аккаунт', Icon: BiUser, path: '/account'},
  {title: 'Поиск', Icon: BsSearch, path: '/search'},
]