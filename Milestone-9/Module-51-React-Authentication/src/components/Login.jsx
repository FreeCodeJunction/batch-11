import { useLocation, useNavigate } from "react-router";
import { useFirebaseAuthContext } from "../contexts/firebaseAuthContext";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { user, loading, googleSignIn, signInWithEmail } =
    useFirebaseAuthContext();

  function handleGoogleSignIn() {
    googleSignIn().then(() => {
      navigate(location.state);
    });
  }

  function handleLogin(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmail(email, password)
      .then((userCredentials) => {
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
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
  return (
    <div className="hero bg-base-200 min-h-screen max-w-200 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form action="" onSubmit={handleLogin}>
              <fieldset className="fieldset">
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
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-primary"
                >
                  Log in With Google
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
