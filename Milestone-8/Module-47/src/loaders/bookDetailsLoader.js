import globalFetchFn from "../commonFn/globalFetchFn";

export default function bookDetailsLoader({ signal }) {
  return {
    booksDetailsPromise: globalFetchFn("/booksData.json", {
      signal,
    }),
  };
}
