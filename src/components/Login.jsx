import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  function handleSingInForm() {
    setIsSignIn(!isSignIn);
  }

  function handleClickButton() {
    const message = validateData(email.current.value, password.current.value);
    console.log(email);
    console.log(password);
    console.log(message);
    setErrorMessage(message);

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
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg "
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="text-white text-3xl py-3 ">
          {isSignIn ? "Sign In " : "SignUp"}
        </h1>
        {!isSignIn && (
          <input
            className="p-3 m-2 w-full bg-slate-600"
            type="text"
            placeholder="Enter Your Name"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="email"
          className="p-3 m-2 w-full bg-slate-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-3 m-2 w-full bg-slate-600"
        />
        <p className="text-red-600"> {errorMessage}</p>
        <button
          className="bg-red-700 w-full p-2 m-2 rounded-lg"
          onClick={handleClickButton}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-3 m-2 cursor:pointer" onClick={handleSingInForm}>
          New to Netflix? Sign Up Now
        </p>
      </form>
    </div>
  );
};

export default Login;
