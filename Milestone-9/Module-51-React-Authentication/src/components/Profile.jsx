import { useFirebaseAuthContext } from "../contexts/firebaseAuthContext";

export default function Profile() {
  const { user } = useFirebaseAuthContext();
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}
