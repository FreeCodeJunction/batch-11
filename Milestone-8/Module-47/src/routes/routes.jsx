import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
export default router;
