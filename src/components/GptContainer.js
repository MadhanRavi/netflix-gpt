import React from "react";
import GptSearch from "./GptSearch";
import GptMovieList from "./GptMovieList";
import { NETFLIX_BG } from "../utils/constants";

const GptContainer = () => {
  return (
    <div className="">
      <div className="relative -z-10">
        <img className="fixed" src={NETFLIX_BG} alt="Netflix" />
      </div>
      <GptSearch />
      <GptMovieList />
    </div>
  );
};

export default GptContainer;
