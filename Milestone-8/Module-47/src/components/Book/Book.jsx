import React from "react";

export default function Book({ book }) {
  const { image, bookName, author, tags, category, rating } = book;
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-60 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {tags.length &&
            tags.map((tag, index) => <span key={index}>{tag}</span>)}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {bookName}
        </h2>

        <p className="mt-1">By: {author}</p>
        <p>
          <span>{category}</span> <span>{rating}</span>
        </p>
      </div>
    </div>
  );
}
