

export type RouteInterface =  {
  index?: boolean;
  path: string;
  icon?: JSX.Element;
  label: JSX.Element | string;
  permissions?: string[];
  children?: RouteInterface[];
  auth?: boolean;
  element?: JSX.Element;
  hideFromLable?: boolean;
}
export const UserTypes = {
  PUBLIC: 'public',
  ADMIN: 'admin',
  USER: 'user'
}