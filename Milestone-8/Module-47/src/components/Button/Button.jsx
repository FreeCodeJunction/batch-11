import React from "react";
import { NavLink, useNavigate } from "react-router";

export default function Button({ btnObject }) {
  const { text, classes, path } = btnObject;
  const navigation = useNavigate();
  return (
    <button
      onClick={() => navigation(path)}
      className={
        classes +
        " cursor-pointer text-white rounded-lg py-4 px-7 font-semibold text-lg"
      }
    >
      {text}
    </button>
  );
}
