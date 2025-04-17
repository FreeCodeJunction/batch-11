import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "./components/Footer/Footer";

export default function Layout() {
  const isLoading =
    useNavigation().state === "loading" &&
    useNavigation().location.pathname === "/listedBooks";

  return (
    <div className="container mx-auto font-work-sans">
      <Navbar />
      {isLoading && <div>Fucking....</div>}
      <Outlet />
      <Footer />
    </div>
  );
}
