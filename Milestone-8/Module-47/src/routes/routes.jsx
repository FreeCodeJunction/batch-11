import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home, { homeLoader } from "../components/Home/Home";
import ListedBooks, {
  listedBooksLoader,
} from "../components/ListedBooks/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: homeLoader,
      },
      {
        path: "/listedBooks",
        Component: ListedBooks,
        loader: listedBooksLoader,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
export default router;
