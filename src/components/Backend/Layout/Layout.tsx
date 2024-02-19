import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RootState, useAppSelector } from "../../../store/store";
import { DashboardIcon } from "../../../icons/MenuIcons";
import { AppRoutes } from "../../../routes/AppRoutes";
import { RouteInterface } from "../../../routes/RouteInterface";
interface ISidebarMenu {
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
const BLayout = () => {
  const routes:ISidebarMenu = AppRoutes[1]?.children;
  //const userState = useAppSelector((state:RootState)=>state.LOGIN_USER);
  // if(!userState.name){
  //   return window.location.href = '/login';
  // }
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {!routes?.hideFromLable && (
                routes?.map((route:RouteInterface)=> (
                  <li key={route?.path}>
                    <NavLink
                      to={route?.path}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      {route?.icon}
                      <span className="ms-3">{route?.label}</span>
                    </NavLink>
                  </li>
                ))
            )}
            
          </ul>
        </div>
      </aside>

      <main>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <Outlet />
          </div>
        </div>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default BLayout;
