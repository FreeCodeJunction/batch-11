import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header>
      <ul className="flex justify-center gap-10 items-center">
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? "underline" : ""}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => `${isActive ? "underline" : ""}`}
        >
          Login
        </NavLink>
      </ul>
    </header>
  );
}
