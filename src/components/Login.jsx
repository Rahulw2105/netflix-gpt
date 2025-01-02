import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  function handleSingInForm() {
    setIsSignIn(!isSignIn);
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

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
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
          type="email"
          placeholder="email"
          className="p-3 m-2 w-full bg-slate-600"
        />
        <input
          type="password"
          placeholder="password"
          className="p-3 m-2 w-full bg-slate-600"
        />
        <button className="bg-red-700 w-full p-2 m-2 rounded-lg">SignIn</button>
        <p className="py-3 m-2 cursor:pointer" onClick={handleSingInForm}>
          New to Netflix? Sign Up Now
        </p>
      </form>
    </div>
  );
};

export default Login;
