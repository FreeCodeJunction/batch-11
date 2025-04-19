import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import { ReadListProvider } from "./Contexts/ReadListContext.js";

import useListFeature from "./features/readListAndWishList.js";
import { WishListProvider } from "./Contexts/WishListContext.js";
import { useEffect } from "react";

export default function Layout() {
  const [readListIds, addIdsInTheReadList, removeIdsFromTheReadList] =
    useListFeature("readListIds");
  const [wishListIds, addIdsInTheWishList, removeIdsFromTheWishList] =
    useListFeature("wishListIds");

  return (
    <WishListProvider
      value={{ wishListIds, addIdsInTheWishList, removeIdsFromTheWishList }}
    >
      <ReadListProvider
        value={{ readListIds, addIdsInTheReadList, removeIdsFromTheReadList }}
      >
        <div className="container mx-auto font-work-sans">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </ReadListProvider>
    </WishListProvider>
  );
}
