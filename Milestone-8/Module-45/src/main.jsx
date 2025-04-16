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
import User from "./components/User.jsx";
import SingleUser, { userLoader } from "./components/SingleUser.jsx";
import Products, { productsLoader } from "./components/Products.jsx";
import ErrorElement from "./components/ErrorElement.jsx";

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
      { path: "user/:id", Component: SingleUser, loader: userLoader },
      {
        path: "products",
        Component: Products,
        loader: productsLoader,
        errorElement: <ErrorElement />,
      },
    ],
  },
  { path: "*", element: <h1>404 Not found</h1> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
