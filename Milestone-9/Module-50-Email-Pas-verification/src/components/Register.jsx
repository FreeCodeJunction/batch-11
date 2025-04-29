import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  validatePassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useState } from "react";

import { Link } from "react-router";

export default function Register() {
  const [signUpSituation, setSignUpSituation] = useState({
    success: false,
    error: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      const passStatus = await validatePassword(getAuth(), password);
      if (!passStatus.isValid) {
        if (!passStatus.containsLowercaseLetter) {
          setSignUpSituation((prevSituation) => ({
            ...prevSituation,
            error: "password must contain one lowercase letter",
            success: false,
          }));

          return;
        } else if (!passStatus.containsUppercaseLetter) {
          setSignUpSituation((prevSituation) => ({
            ...prevSituation,
            error: "password must contain one uppercase letter",
            success: false,
          }));
          return;
        } else if (!passStatus.meetsMaxPasswordLength) {
          setSignUpSituation((prevSituation) => ({
            ...prevSituation,
            error: "password must be less than 30 characters",
            success: false,
          }));
          return;
        } else if (!passStatus.meetsMinPasswordLength) {
          setSignUpSituation((prevSituation) => ({
            ...prevSituation,
            error: "password must be greater than 8 character",
            success: false,
          }));
          return;
        }
      }
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("verification email sending");
      sendEmailVerification(auth.currentUser).then(() => {
        setSignUpSituation((prevSituation) => ({
          ...prevSituation,
          success: "Verification email  sent",
          error: false,
        }));
      });

      console.log("verification email sent");
    } catch (err) {
      setSignUpSituation((prevSituation) => ({
        ...prevSituation,
        error: err.message,
        success: false,
      }));
    }
  }
  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold mb-5">Register Here</h1>

      <form
        onSubmit={handleRegister}
        className="flex flex-col items-center gap-2"
      >
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            name="email"
            placeholder="mail@site.com"
            required
          />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>

        {signUpSituation.error && (
          <p className="text-center text-sm text-red-600 font-medium">
            {signUpSituation.error}
          </p>
        )}
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            // required
            // placeholder="Password"
            // minLength="8"
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
        </label>
        <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />
          At least one number <br />
          At least one lowercase letter <br />
          At least one uppercase letter
        </p>

        <input type="submit" className="btn btn-neutral" value="Register" />
        <p>
          Already have an account <Link to={"/login"}>Log In</Link>
        </p>
        <button onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
        {signUpSituation.success && <p>{signUpSituation.success}</p>}
      </form>
    </div>
  );
}
