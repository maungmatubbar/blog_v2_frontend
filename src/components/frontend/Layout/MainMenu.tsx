/* eslint-disable @typescript-eslint/no-explicit-any */
//import React from 'react'

import { Link, NavLink } from "react-router-dom";
import { AppRoutes } from "../../../routes/AppRoutes";
import { RouteInterface } from "../../../routes/RouteInterface";
//import { useEffect, useState } from "react";

const MainMenu = () => {
  const routes: any = AppRoutes[0]?.children;
 
  return (
    <>
      <ul className="flex items-center font-Outfit text-[14px] gap-3 list-none">
        {routes && routes.map((route:RouteInterface) => {
          return (
            <>
              {!route?.hideFromLable &&  (
                <li>
                  <NavLink
                    key={route.path}
                    to={route.path}
                    style={({ isActive }) => ({
                      textDecoration: isActive ? "underline" : "none",
                    })}
                    className={`text-white font-Inter hover:underline cursor-pointer main-nav-item`}
                  >
                    {route.label}
                  </NavLink>
                </li>
              )}
            </>
          );
        })}

        <li>
          <Link
            to={"/login"}
            className="on-underline py-2 px-3 text-[14px] bg-blue-400 rounded-md font-Inter font-semibold transition duration-200 cursor-pointer text-white hover:bg-blue-300"
          >
            Login
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
