import axios from "axios";
import React, { Suspense } from "react";
import {
  Await,
  useAsyncError,
  useLoaderData,
  useRouteError,
} from "react-router";
import User from "./User";
export const usersLoader = () => {
  try {
    const usersPromise = axios
      .get("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10")
      .then((response) => {
        console.log(response);
        if (response.statusText == "OK") throw new Error("Failed to load");
        return response.data.data.data;
      });

    return { usersPromise };
  } catch (error) {
    if (error) {
      throw new Response(null, {
        status: 500,
        statusText: "Could not fetch users",
      });
    }
  }
};

function ErrorMessage() {
  const error = useRouteError();
  console.log(error);
  return <div>Error Occurred</div>;
}
export default function Users() {
  const { usersPromise } = useLoaderData();
  return (
    <div>
      <h1>Our Products</h1>
      <Suspense fallback={<span>Loading....</span>}>
        <Await resolve={usersPromise} errorElement={<ErrorMessage />}>
          {(resolvedUsers) => resolvedUsers.map((user) => <User user={user} />)}
        </Await>
      </Suspense>
    </div>
  );
}
