import { useCallback, useEffect, useMemo, useState } from "react";
import useReadListContext from "../../Contexts/ReadListContext";
import Book from "../Book/Book";

export default function ListedList({ books, listIds, removeFromList }) {
  const [sortKey, setShortKey] = useState("all");
  const listBooks = useMemo(() => {
    let bookList = books.filter((book) => listIds.includes(book.bookId));
    if (sortKey === "rating") {
      bookList = bookList.sort((bookA, bookB) => bookA.rating - bookB.rating);
    } else if (sortKey === "pages") {
      bookList = bookList.sort(
        (bookA, bookB) => bookA.totalPages - bookB.totalPages
      );
    }
    return bookList;
  }, [listIds, sortKey]);

  return (
    <>
      {!listBooks.length ? (
        <div>There are no books</div>
      ) : (
        <>
          <div className="pl-5 mt-15 space-x-7 ">
            {["all", "rating", "pages"].map((btn, index) => (
              <button
                key={index}
                onClick={() => setShortKey(btn)}
                className={`btn ${
                  btn === sortKey ? "btn-secondary" : "btn-primary"
                }`}
              >
                {btn === "all"
                  ? "All"
                  : `By ${btn.replace(btn.at(0), btn.at(0).toUpperCase())}`}
              </button>
            ))}
          </div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap justify-center  sm:justify-start -m-4">
                {listBooks.map((book) => (
                  <Book
                    key={book.bookId}
                    book={book}
                    removeFromList={removeFromList}
                  ></Book>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
