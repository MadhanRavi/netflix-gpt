import React, { useRef, useState } from "react";
import { validateFormData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const message = isSignIn
      ? validateFormData(email.current.value, password.current.value)
      : validateFormData(
          email.current.value,
          password.current.value,
          name.current.value,
          isSignIn
        );
    setErrMsg(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://www.shutterstock.com/image-vector/deadpool-icon-logo-sign-symbol-600nw-2394182337.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const code = error.code.replace("auth/", "");
          const codeFormatted = code.charAt(0).toUpperCase() + code.slice(1);

          const msg = "Error- " + codeFormatted.replace("-", "-");

          // setErrMsg(`${codeFormatted} -- ${msg}`);
          setErrMsg(`${msg}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const code = error.code.replace("auth/", "");
          const codeFormatted = code.charAt(0).toUpperCase() + code.slice(1);

          const msg = "Error- " + codeFormatted.replace("-", "-");

          // setErrMsg(`${codeFormatted} -- ${msg}`);
          setErrMsg(`${msg}`);
        });
    }
  };

  return (
    <div>
      <div>
        <img
          className="fixed"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/30c8b9f4-3db9-4b3b-a1ee-8fa56531b712/web/IN-en-20251201-TRIFECTA-perspective_c7623e8e-c406-43d2-9d9a-0140ce19ac84_large.jpg"
          alt="Netflix"
        />
      </div>

      <form
        onSubmit={formSubmit}
        className="p-12 bg-black bg-opacity-85 absolute mx-auto w-3/12 left-0 right-0 m-32 rounded-lg text-white">
        <h1 className="text-3xl font-bold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="rounded-lg bg-gray-700 p-2 my-4 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter Email"
          className="rounded-lg bg-gray-700 p-2 my-4 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="rounded-lg bg-gray-700 p-2 my-4 w-full"
        />
        {errMsg && <p className="text-red-500 text-sm font-bold">{errMsg}</p>}
        <button
          type="submit"
          className="bg-red-600 p-3 my-4 rounded-lg w-full hover:bg-red-700">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer" onClick={() => toggleSignIn()}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already User? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
