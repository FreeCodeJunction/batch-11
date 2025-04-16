import React from "react";
import { useAsyncError, useRouteError } from "react-router";

export default function ErrorElement() {
  const error = useRouteError() || useAsyncError();
  return (
    <div>
      {error?.status}
      {error.statusText || error.message}
    </div>
  );
}
