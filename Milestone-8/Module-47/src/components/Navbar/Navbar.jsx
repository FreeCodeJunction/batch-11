import { NavLink } from "react-router";
import Button from "../Button/Button";

export default function Navbar() {
  const links = [
    { path: "/", text: "Home" },
    { path: "/listedBooks", text: "listedBooks" },
    { path: "/pagesToRead", text: "Pages To Read" },
  ];

  const registerLinks = [
    {
      text: "Sign In",
      path: "/signIn",
      classes: "bg-green-500 hover:bg-green-800 sm:inline-block hidden",
    },
    {
      text: "Sign Up",
      path: "/signUp",
      classes: "bg-cyan-500 hover:bg-cyan-800 sm:inline-block hidden",
    },
  ];

  const renderLinks = links.map(({ path, text }, index) => (
    <li key={index}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `${
            isActive && "border text-green-500 border-green-500"
          } text-lg font-semibold sm:py-3 sm:px-5 py-1 px-3`
        }
      >
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className="navbar   bg-base-100 shadow-sm mb-12">
      <div className="navbar-start">
        <div className="dropdown hidden sm:inline-block">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm gap-1 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {renderLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold font-playfair">
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 px-1">{renderLinks}</ul>
      </div>

      <div className="navbar-end space-x-4 inline-flex">
        <div className="dropdown dropdown-end sm:hidden">
          <div tabIndex={0} role="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            {renderLinks}
            {registerLinks.map(({ path, text }, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  className={"text-lg font-semibold sm:py-3 sm:px-5 py-1 px-3"}
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {registerLinks.map((link, index) => (
          <Button btnObject={link} key={index} />
        ))}
      </div>
    </div>
  );
}
