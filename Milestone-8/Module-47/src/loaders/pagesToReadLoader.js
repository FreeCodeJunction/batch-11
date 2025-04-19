import globalFetchFn from "../commonFn/globalFetchFn";

const pagesToReadLoader = ({ signal }) => {
  return globalFetchFn("/booksData.json", { signal }, 0);
};

export default pagesToReadLoader;
