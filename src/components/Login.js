import React, { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
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

      <form className="p-12 bg-black bg-opacity-85 absolute mx-auto w-3/12 left-0 right-0 m-32 rounded-lg text-white">
        <h1 className="text-3xl font-bold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Enter Name"
            className="rounded-lg bg-gray-700 p-2 my-4 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Enter Email"
          className="rounded-lg bg-gray-700 p-2 my-4 w-full"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="rounded-lg bg-gray-700 p-2 my-4 w-full"
        />
        <button className="bg-red-600 p-3 my-4 rounded-lg w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer" onClick={() => handleSignIn()}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already User? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
