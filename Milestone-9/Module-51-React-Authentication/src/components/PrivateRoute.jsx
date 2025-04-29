import { Navigate, useLocation } from "react-router";
import { useFirebaseAuthContext } from "../contexts/firebaseAuthContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useFirebaseAuthContext();
  const location = useLocation();
  if (loading) {
    return (
      <>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-xl"></span>
      </>
    );
  }
  if (!user) {
    return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
  }
  return children;
}
