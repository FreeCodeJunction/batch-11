import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useRef } from "react";

export default function Login() {
  const emailRef = useRef();
  function handleForgetPassword() {
    const email = emailRef.current.value;
    try {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("password reset email sent");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err.message);
    }
  }

  async function handleLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.password.value;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        pass
      );

      if (!userCredential.user.emailVerified) {
        console.log("Email isn't verified");
        return;
      } else {
        console.log("Email is verified");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="hero bg-base-200 min-h-screen max-w-[1000px] mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left max-w-[500px]">
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
                  ref={emailRef}
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
                <div>
                  <a onClick={handleForgetPassword} className="link link-hover">
                    Forgot password?
                  </a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
