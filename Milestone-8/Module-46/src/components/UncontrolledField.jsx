import React, { useRef } from "react";

export default function UncontrolledField() {
  const emailRef = useRef(null);
  const passWordRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current;
    const password = passWordRef.current;
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          ref={emailRef}
          name="email"
          placeholder="email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          ref={passWordRef}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
}
