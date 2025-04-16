import axios from "axios";
import React from "react";
import { useLoaderData, useNavigation } from "react-router";

export async function productsLoader() {
  try {
    const response = await axios.get(
      "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=50&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches"
    );
    return response.data.data.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      throw new Response(null, {
        status: error.response.status,
        statusText: error.response.statusText || "Server Error",
      });
    } else if (error.request) {
      throw new Response(null, {
        status: 503,
        statusText: "No response from server",
      });
    } else {
      throw new Response(null, {
        status: 500,
        statusText: error.message || "Unexpected error",
      });
    }
  }
}

export default function Products() {
  const data = useLoaderData();
  const isNavigating = useNavigation().state === "loading";
  return (
    <div>
      {isNavigating && <span>Navigation Loading......</span>}
      {data && data.map((product) => <p key={product.id}>{product.title}</p>)}
    </div>
  );
}
