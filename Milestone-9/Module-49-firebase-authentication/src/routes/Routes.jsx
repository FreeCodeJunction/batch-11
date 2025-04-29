import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../components/Home";
import Login from "../components/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
    ],
  },
]);
