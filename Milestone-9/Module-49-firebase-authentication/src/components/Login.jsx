import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignInHandler = () => {
    console.log("sign in with google");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(() => result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signout completed");
        setUser(() => null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log("signed in with github ");
        console.log(result);
        const loggedInUser = result.user;
        if (!loggedInUser.email && loggedInUser?.providerData?.length > 0) {
          console.log("user email isn't directly provided");
          if (loggedInUser.providerData[0].email) {
            const userEmail = loggedInUser.providerData[0].email;
            loggedInUser.email = userEmail;
          }
        }
        setUser(() => result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="text-center mt-10">
      <h2>Please Log in </h2>

      <button
        onClick={googleSignInHandler}
        className="bg-black py-2 px-4 rounded text-white hover:text-black hover:bg-white transition-colors cursor-pointer hover:border border-black block mt-3 mx-auto"
      >
        Sign in with google
      </button>
      <button
        className="bg-black py-2 px-4 rounded text-white hover:text-black hover:bg-white transition-colors cursor-pointer hover:border border-black block mt-3 mx-auto"
        onClick={handleSignOut}
      >
        sign out
      </button>

      <button
        className="bg-black py-2 px-4 rounded text-white hover:text-black hover:bg-white transition-colors cursor-pointer hover:border border-black block mt-3 mx-auto"
        onClick={handleGithubSignIn}
      >
        Sing with github
      </button>
      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}
