import { createContext, useContext } from "react";

const WishListContext = createContext({
  wishListIds: [],
  addIdsInTheWishList() {},
  removeIdsFromTheWishList() {},
});

export const WishListProvider = WishListContext.Provider;
const useWishListContext = () => {
  return useContext(WishListContext);
};

export default useWishListContext;
