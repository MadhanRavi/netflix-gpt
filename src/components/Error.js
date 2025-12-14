import React from "react";
import { ERR_IMG } from "../utils/constants";

const Error = () => {
  return (
    <div className="w-6/12 mx-auto my-5 text-center">
      <img className="w-96 h-96 mx-auto" src={ERR_IMG} alt="404" />
      <h1 className="font-bold text-2xl">Error</h1>
    </div>
  );
};

export default Error;
