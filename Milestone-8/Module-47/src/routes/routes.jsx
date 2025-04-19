import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home, { homeLoader } from "../components/Home/Home";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import BookDetails from "../components/BookDetails/BookDetails";
import bookDetailsLoader from "../loaders/bookDetailsLoader";
import listedBooksLoader from "../loaders/listedBooksLoader";
import PagesToRead from "../components/PagesToRead/PagesToRead";
import pagesToReadLoader from "../loaders/pagesToReadLoader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: homeLoader,
      },
      {
        path: "listedBooks",
        Component: ListedBooks,
        loader: listedBooksLoader,
      },
      {
        path: "pagesToRead",
        Component: PagesToRead,
        loader: pagesToReadLoader,
      },
      {
        path: "book/:id",
        Component: BookDetails,
        loader: bookDetailsLoader,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
export default router;
