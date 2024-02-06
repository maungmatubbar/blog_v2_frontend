/* eslint-disable @typescript-eslint/no-explicit-any */
//import React from 'react'

import { NavLink } from "react-router-dom";
import { AppRoutes } from "../../../routes/AppRoutes";

const MainMenu = () => {
  return (
    <>
      <ul className="flex items-center font-Outfit text-[14px] gap-3 list-none">
        {AppRoutes.map((route) => (
          <li><NavLink
          key={route.path}
          to={route.path}
          style={({ isActive }) => ({
            color: isActive
                ? "greenyellow"
                : "white",
        })}
          className={`no-underline text-white font-Inter hover:underline cursor-pointer main-nav-item`}
        >
          {route.label}
        </NavLink></li>
        ))}

        <li>
          <button className="py-2 px-3 text-[14px] bg-blue-400 rounded-md font-Inter font-semibold transition duration-200 cursor-pointer text-white hover:bg-blue-300">
            Login
          </button>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
