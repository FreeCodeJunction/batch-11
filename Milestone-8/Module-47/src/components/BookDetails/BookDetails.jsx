import React, { Suspense, useEffect, useId, useMemo, useState } from "react";

import { Await, useLoaderData, useNavigate, useParams } from "react-router";
import Spinner from "../Spinner/Spinner";
import ErrorPage from "../ErrorPage/ErrorPage";
import useReadListContext from "../../Contexts/ReadListContext";
import useWishListContext from "../../Contexts/WishListContext";

const renderBookInfo = (bookInfos) => (
  <tbody>
    {bookInfos.map((info, index) => (
      <tr key={index}>
        <td
          className={`leading-[20px] lg:leading-[26px]  text-sm lg:text-base text-[rgba(19,19,19,0.7)] ${
            index !== bookInfos.length - 1 && " lg:pb-3 pb-1"
          }`}
        >
          {info[0]}
        </td>
        <td className="font-semibold leading-[20px] lg:leading-[26px]  text-sm lg:text-base pl-15">
          {info[1]}
        </td>
      </tr>
    ))}
  </tbody>
);

const SingleBook = ({ books, id }) => {
  const navigation = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const { readListIds, addIdsInTheReadList } = useReadListContext();
  const { wishListIds, addIdsInTheWishList } = useWishListContext();
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    category,
    publisher,
    rating,
    tags,
    totalPages,
    yearOfPublishing,
  } = books.find((book) => book.bookId === +id);

  const bookInfos = [
    ["Number of Pages", totalPages],
    ["Publisher", publisher],
    ["Year of Publishing", yearOfPublishing],
    ["Rating", rating],
  ];
  const isBookInTheList = (listOfIds) => {
    return listOfIds.includes(bookId);
  };

  const handleOnExpanded = () => {
    setExpanded((state) => !state);
  };
  return (
    <section>
      <div className="container flex flex-col md:flex-row flex-wrap md:items-center mx-auto gap-10 md:gap-0">
        {/* image section */}
        <div className="md:w-1/2 p-[40px] lg:p-[55px]  xl:p-[74px]  grid place-items-center rounded-2xl bg-[rgba(19,19,19,0.05)]">
          <img
            src={image}
            alt={bookName}
            className="h-100 object-contain sm:h-124 md:h-full max-w-[425px] w-full"
          />
        </div>
        {/* image content section */}
        <div className="flex flex-col md:w-1/2 px-5 lg:px-10 ">
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl">
            {bookName}
          </h2>
          <p className="font-medium text-lg lg:text-xl pt-2 lg:pt-4 pb-2 lg:pb-6 border-b border-[rgba(19,19,19,0.15)]">
            By: {author}
          </p>
          <p className="font-medium md:text-lg lg:text-xl py-2 lg:py-4 border-b border-[rgba(19,19,19,0.15)]">
            {category}
          </p>
          <p
            className={`leading-[26px] my-3 xl:my-6  hover:line-clamp-none ${
              expanded
                ? " line-clamp-none"
                : "line-clamp-6 md:line-clamp-5 lg:line-clamp-8"
            }`}
            onClick={handleOnExpanded}
          >
            <span className="font-bold ">Review:</span> {review}
          </p>
          <p className="flex items-center gap-6 pb-3 lg:pb-6 border-b border-[rgba(19,19,19,0.15)]">
            <span className="leading-[26px] font-bold">Tag</span>
            {tags.map((tag, index) => (
              <span
                className="text-green-700 bg-green-100 font-medium py-1 px-3 rounded-xl"
                key={index}
              >
                #{tag}
              </span>
            ))}
          </p>
          <div className="pt-3 lg:pt-6 pb-5 lg:pb-8">
            <table className="table-auto">{renderBookInfo(bookInfos)}</table>
          </div>
          <div className="space-x-4">
            <button
              disabled={isBookInTheList(readListIds)}
              onClick={() => {
                navigation("/listedBooks");
                addIdsInTheReadList(bookId);
              }}
              className={`border border-[rgba(19,19,19,0.3)] py-[10px] lg:py-[18px] px-3 lg:px-7 ${
                isBookInTheList(readListIds)
                  ? "bg-green-700 text-white border-green-700 opacity-30 "
                  : "hover:bg-gray-300 cursor-pointer"
              } rounded-lg text-base lg:text-lg font-medium lg:font-semibold  transition-colors `}
            >
              {isBookInTheList(readListIds) ? "Book Read" : "Mark As Read"}
            </button>
            <button
              onClick={() => {
                navigation("/listedBooks");
                addIdsInTheWishList(bookId);
              }}
              disabled={isBookInTheList(wishListIds)}
              className={`py-[10px] lg:py-[18px] px-3 lg:px-7 rounded-lg text-base lg:text-lg font-medium lg:font-semibold bg-cyan-700 text-white  transition-colors  ${
                isBookInTheList(wishListIds)
                  ? " bg-green-700 border-green-700 opacity-30"
                  : " cursor-pointer hover:bg-cyan-900"
              }`}
            >
              {isBookInTheList(wishListIds) ? "Added" : "Add"} to WishList
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function BookDetails() {
  const { id } = useParams();
  const { booksDetailsPromise } = useLoaderData();

  return (
    <Suspense fallback={<Spinner></Spinner>}>
      <Await
        resolve={booksDetailsPromise}
        errorElement={<ErrorPage></ErrorPage>}
      >
        {(resolvedBooks) => <SingleBook books={resolvedBooks} id={id} />}
      </Await>
    </Suspense>
  );
}
