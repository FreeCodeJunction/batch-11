import axios from "axios";
import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router";
import ErrorElement from "./ErrorElement";
import User from "./User";
export function userLoader({ params }) {
  const userPromise = axios
    .get("https://api.freeapi.app/api/v1/public/randomusers/" + params.id)
    .then((response) => {
      // if (response.status !== 200) {
      // throw new Error("User Fetch Failed");
      // }
      // console.log(response.data.data);
      return response.data.data;
    })
    .catch((error) => {
      throw new Response(null, {
        status: 404,
        statusText: error?.message || "something went wrong",
      });
    });
  return { userPromise };
}

export default function SingleUser() {
  const { userPromise } = useLoaderData();
  return (
    <div>
      <Suspense fallback={<span>Loading....</span>}>
        <Await resolve={userPromise} errorElement={<ErrorElement />}>
          {(resolvedUser) => <User user={resolvedUser} />}
        </Await>
      </Suspense>
    </div>
  );
}
