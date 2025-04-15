import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Laptops from "./components/Laptops.jsx";
import Contacts from "./components/Contacts.jsx";
import Users, { usersLoader } from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contacts", Component: Contacts },
      { path: "mobiles/laptops", Component: Laptops },
      {
        path: "users",
        Component: Users,
        loader: usersLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
