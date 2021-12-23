import { IconType } from 'react-icons';

export interface INavItem {
  title: string,
  Icon: IconType,
  path: string,
  redirect?: string,
  isAuth?: boolean
}
