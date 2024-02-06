

export type RouteInterface =  {
  index?: boolean;
  path: string;
  icon?: JSX.Element;
  label: JSX.Element | string;
  permissions?: string[];
  children?: RouteInterface[];
  auth?: boolean;
  element?: JSX.Element;
}