import React, { useState } from "react";
import useInputField from "../hooks/useInputField";

export default function ControlledField() {
  const [email, handleEmail] = useInputField("");
  const [password, handlePassword] = useInputField("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    // if (password.length < 6) {
    //   setError("Password must be 6 character's long");
    // } else {
    //   setError("");
    // }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleEmail}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          defaultValue={password}
          onChange={handlePassword}
          placeholder="password"
          required
        />
        <br />
        <input type="submit" className="block mx-auto" />
      </form>
      <p className="text-red-600">{error}</p>
    </div>
  );
}
