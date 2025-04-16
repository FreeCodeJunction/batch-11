import axios from "axios";
import React, { Suspense } from "react";
import { Await, useLoaderData, useNavigation } from "react-router";
import ErrorElement from "./ErrorElement";
import User from "./User";
export function usersLoader() {
  const usersPromise = axios
    .get("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10")
    .then((response) => {
      if (response.status !== 200) throw new Error("fuck you");
      console.log(response.data.data.data);
      return response.data.data.data;
    })
    .catch((error) => {
      throw new Error(error?.message || "something went wrong");
    });

  return { usersPromise };
}

export default function Users() {
  const { usersPromise } = useLoaderData();

  return (
    <>
      <div>
        <Suspense fallback={<span>Loading....</span>}>
          <Await resolve={usersPromise} errorElement={<ErrorElement />}>
            {(resolvedUsers) => (
              <div className="flex justify-center flex-wrap gap-10">
                {resolvedUsers.map((user) => (
                  <User user={user} key={user.id} />
                ))}
              </div>
            )}
          </Await>
        </Suspense>
      </div>
    </>
  );
}
