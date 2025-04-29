import { createBrowserRouter } from "react-router";

import Root from "../Layout/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
    ],
  },
]);

export default router;
