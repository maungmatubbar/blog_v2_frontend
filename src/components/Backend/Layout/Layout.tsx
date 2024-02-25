//import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AppRoutes } from "../../../routes/AppRoutes";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Spin } from 'antd';
import { useAppSelector } from "../../../store/store";
const BLayout = () => {
  const loggedInState = useAppSelector((state) => state.LOGIN_USER);
  const location = useLocation();
  const routes = AppRoutes[1]?.children;
  if (loggedInState?.token === null || loggedInState.success === false) {
      window.location.href = "/login";
  }
  return loggedInState?.success? (
    <>
      
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            { routes&& (
                routes?.map((route:any)=> (
                  <li key={route?.path}>
                    <NavLink
                      to={route?.path}
                      className={`
                      ${location.pathname===route?.path?'bg-gray-100':''}
                      flex items-center
                       p-2 text-gray-900
                        rounded-lg dark:text-white
                         hover:bg-gray-100
                          dark:hover:bg-gray-700 group
                      `}
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
        <div className="flex items-center justify-between min-h-[60px] bg-[#F9FAFB] px-10">
          <div></div>
          <div><Avatar size="large" icon={<UserOutlined />} /></div>
        </div>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <Outlet /> 
          </div>
        </div>
      </main>
      <footer>Footer</footer>
    </>
  ): <Spin />
};

export default BLayout;
