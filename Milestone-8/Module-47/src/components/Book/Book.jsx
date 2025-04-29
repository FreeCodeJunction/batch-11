import { CircleX } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

export default function Book({ book, removeFromList }) {
  const { image, bookName, author, tags, category, rating, bookId } = book;
  return (
    <div className="max-w-[400px] w-full relative   sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 ">
      {removeFromList && (
        <CircleX
          size={40}
          className="absolute cursor-pointer top-0 right-0 z-10 bg-cyan-500 text-red-500 rounded-lg p-1 hover:bg-cyan-300 transition-colors"
          onClick={() => removeFromList(bookId)}
        />
      )}

      <NavLink
        className="block relative h-60 rounded overflow-hidden hover:scale-105 transition-transform"
        to={"/book/" + bookId}
      >
        <img
          alt={bookName}
          className="object-cover object-center w-full h-full block"
          src={image}
        />
      </NavLink>
      <div className="mt-4">
        {tags.length && (
          <h3 className="text-sm tracking-widest title-font mb-1 space-x-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-green-500 font-semibold inline-block bg-green-50 py-1 px-2 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </h3>
        )}

        <h2 className="text-gray-900 title-font font-bold my-3 font-playfair text-2xl line-clamp-1 text-ellipsis">
          {bookName}
        </h2>

        <p className="mt-1 font-medium pb-5 border-b border-dashed border-[rgba(19,19,19,0.15)]">
          By: {author}
        </p>
        <p className="font-medium py-5 flex justify-between">
          <span>{category}</span> <span>{rating}</span>
        </p>
      </div>
    </div>
  );
}
