import { Link } from "react-router";
import { useFirebaseAuthContext } from "../contexts/firebaseAuthContext";

export default function Register() {
  const { createUserWithEmail } = useFirebaseAuthContext();
  function handleRegister(event) {
    event.preventDefault();
    const fullName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmail(email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <form action="" onSubmit={handleRegister} className="max-w-80 mx-auto">
      <fieldset className="fieldset">
        <label className="label">Full Name</label>
        <input type="text" name="name" className="input" placeholder="name" />
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />
        <button type="submit" className="btn btn-neutral mt-4">
          Login
        </button>
        <p>
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </fieldset>
    </form>
  );
}
