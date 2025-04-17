import { useAsyncError } from "react-router";

export default function ErrorPage() {
  const error = useAsyncError();
  return (
    <div>
      <p>{error.name || "Hello text"}</p>
      <p>{error.message || "Hello Error Text"}</p>
    </div>
  );
}
