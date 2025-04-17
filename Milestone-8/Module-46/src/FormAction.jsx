import React from "react";

export default function FormAction() {
  const handleFormSubmit = (formData) => {
    console.log(formData);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };
  return (
    <div>
      <form action={handleFormSubmit}>
        <input type="text" placeholder="name" name="name" />
        <br />
        <input type="email" placeholder="email" name="email" />
        <br />
        <input type="submit" className="block mx-auto" />
      </form>
    </div>
  );
}
