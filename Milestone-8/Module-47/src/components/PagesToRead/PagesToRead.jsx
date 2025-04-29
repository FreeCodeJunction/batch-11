import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "green",
  "skyblue",
  "gray",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const books = useLoaderData().map((book) => ({
    ...book,
    bookName:
      book.bookName.split(" ").length > 1
        ? book.bookName.split(" ").slice(0, 2).join(" ") + " ..."
        : book.bookName,
  }));

  const [slicingIndex, setSlicingIndex] = useState(books.length);
  const data = books.slice(0, slicingIndex);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1280) {
        setSlicingIndex(books.length);
      } else if (window.innerWidth > 1023) {
        setSlicingIndex(books.length - 2);
      } else if (window.innerWidth > 767) {
        setSlicingIndex(books.length - 4);
      } else if (window.innerWidth > 639) {
        setSlicingIndex(books.length - 5);
      } else {
        setSlicingIndex(books.length - 6);
      }
    }
    handleResize();
    const resizeEventMethod = () => {
      handleResize();
    };
    window.addEventListener("resize", resizeEventMethod);
    return () => window.removeEventListener("resize", resizeEventMethod);
  }, []);

  return (
    <div className="w-full h-[50dvh] sm:h-[60dvh] lg:h-[70dvh] xl:h-[80dvh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
