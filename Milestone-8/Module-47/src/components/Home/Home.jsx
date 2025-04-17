import React from "react";
import Button from "../Button/Button";

export default function Home() {
  return (
    <>
      <div className="flex md:px-10 lg:px-20 xl:px-30 justify-between  bg-[rgba(19,19,19,0.05)] rounded-md md:rounded-3xl py-20 md:flex-row flex-col-reverse items-center gap-9 md:gap-0">
        {/* text content */}
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
        <div className="md:rounded-xl rounded-md overflow-hidden max-w-[280px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
          <img src="/src/assets/books.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
