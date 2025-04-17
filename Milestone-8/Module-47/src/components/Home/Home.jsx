import React, { Suspense } from "react";
import Button from "../Button/Button";
import Book from "../Book/Book";
import globalFetchFn from "../../commonFn/globalFetchFn";
import { Await, useLoaderData } from "react-router";
import ErrorPage from "../ErrorPage/ErrorPage";

export function homeLoader({ request }) {
  const signal = request.signal;
  return {
    homeData: globalFetchFn("booksData.json", { signal }),
  };
}

export default function Home() {
  const { homeData } = useLoaderData();
  return (
    <>
      <div className="flex md:px-10 lg:px-20 xl:px-30 justify-between  bg-[rgba(19,19,19,0.05)] rounded-md md:rounded-3xl py-20 md:flex-row flex-col-reverse items-center gap-9 md:gap-0">
        <div className="flex flex-col xl:gap-12 gap-10  justify-center items-start ">
          <h1 className="font-playfair font-bold lg:text-5xl lg:leading-16   xl:leading-19  text-4xl leading-14 max-w-[450px] text-center md:text-start">
            Books to freshen up your bookshelf
          </h1>
          <Button
            btnObject={{
              text: "View The List",
              classes:
                "bg-green-500 hover:bg-green-700 block md:inline-block mx-auto md:mx-0",
              path: "/listedBooks",
            }}
          ></Button>
        </div>
        <div className="md:rounded-xl rounded-md overflow-hidden max-w-[300px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
          <img src="/src/assets/books.jpg" alt="" />
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Suspense
              fallback={
                <div className=" w-full @container">
                  <div className="w-full grid grid-cols-1 @[636px]:grid-cols-2 gap-20 @[636px]:gap-25 @[760px]:gap-16 @[1000px]:gap-[62px] @[1000px]:grid-cols-3  @[1200px]:grid-cols-4 @[1200px]:gap-18  place-items-center">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex w-9/10 @[638px]:w-67 @[1200px]:w-full  @[760px]:w-92 @[1000px]:w-75  flex-col gap-4"
                      >
                        <div className="skeleton h-40 w-full"></div>
                        <div className="skeleton h-7 w-28"></div>
                        <div className="skeleton h-7 w-full"></div>
                        <div className="skeleton h-7 w-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              }
            >
              <Await resolve={homeData} errorElement={<ErrorPage />}>
                {(resolvedHomeData) => {
                  return resolvedHomeData.map((book) => (
                    <Book book={book} key={book.bookId} />
                  ));
                }}
              </Await>
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
