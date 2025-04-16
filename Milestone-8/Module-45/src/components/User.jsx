import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router";

export default function User({ user }) {
  const {
    email,
    name: { title, first, last },
    gender,
    id,
  } = user;
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <NavLink to={"/user/" + id}>
        <div className="text-lg border hover:bg-gray-600 hover:text-white border-amber-500 rounded-lg p-5 basis-1/4 cursor-pointer">
          <h1>FullName: {[title, first, last].join(" ")}</h1>
          <p>Email: {email}</p>
          <p>Gender: {gender}</p>
        </div>
      </NavLink>
      <button
        className="block mx-auto my-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Visit Home
      </button>
    </div>
  );
}
