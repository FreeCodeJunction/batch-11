import { createContext, useContext } from "react";

const ReadListContext = createContext({
  readListIds: [],
  addIdsInTheReadList: () => {},
  removeIdsFromTheReadList() {},
});
export const ReadListProvider = ReadListContext.Provider;
export default function useReadListContext() {
  return useContext(ReadListContext);
}
