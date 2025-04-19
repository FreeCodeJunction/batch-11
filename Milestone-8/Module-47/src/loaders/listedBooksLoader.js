import globalFetchFn from "../commonFn/globalFetchFn";

export default function listedBooksLoader({ signal }) {
  return globalFetchFn("/booksData.json", { signal }, 0);
}
