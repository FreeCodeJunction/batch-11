import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";

export default function Layout() {
  return (
    <div className="container mx-auto font-work-sans">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
