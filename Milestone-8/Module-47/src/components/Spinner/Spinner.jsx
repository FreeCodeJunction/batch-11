import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="h-[90vh] w-full grid place-items-center">
      <span className="loader" id="loader"></span>
    </div>
  );
}
