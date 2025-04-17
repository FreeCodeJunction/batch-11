import { useState } from "react";

export default function useInputField(initialValue) {
  const [inputField, setInputField] = useState(initialValue);
  const handleInputField = (e) => {
    setInputField(e.target.value);
  };

  return [inputField, handleInputField];
}
