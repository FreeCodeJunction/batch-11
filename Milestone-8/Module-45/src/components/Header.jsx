import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="mb-10">
      <ul className="flex justify-center items-center py-10 bg-red-300 rounded-md gap-10">
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-yellow-400" : "bg-gray-800"
              } text-white text-xl py-2 px-3 rounded-lg hover:bg-black active:bg-red-500`
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-yellow-400" : "bg-gray-800"
              } text-white text-xl py-2 px-3 rounded-lg hover:bg-black active:bg-red-500`
            }
            to={"/about"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-yellow-400" : "bg-gray-800"
              } text-white text-xl py-2 px-3 rounded-lg hover:bg-black active:bg-red-500`
            }
            to={"/contacts"}
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-yellow-400" : "bg-gray-800"
              } text-white text-xl py-2 px-3 rounded-lg hover:bg-black active:bg-red-500`
            }
            to="/mobiles/laptops"
          >
            Laptops
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-yellow-400" : "bg-gray-800"
              } text-white text-xl py-2 px-3 rounded-lg hover:bg-black active:bg-red-500`
            }
            to="/users"
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-yellow-400" : "bg-gray-800"
              } text-white text-xl py-2 px-3 rounded-lg hover:bg-black active:bg-red-500`
            }
            to="/products"
          >
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
