import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
