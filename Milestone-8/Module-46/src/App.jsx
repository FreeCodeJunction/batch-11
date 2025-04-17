import React from "react";
import FormAction from "./FormAction";
import ControlledField from "./components/ControlledField";
import UncontrolledField from "./components/UncontrolledField";

export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target["name"].value);
    console.log(e.target["email"].value);
  };
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-black"
          name="name"
          placeholder="Your name"
        />
        <br />
        <input type="email" placeholder="Your email" name="email" />
        <input type="submit" value={"Submit"} className="block mx-auto" />
      </form>
      <FormAction /> */}
      <ControlledField />
      {/* <UncontrolledField /> */}
    </div>
  );
}
