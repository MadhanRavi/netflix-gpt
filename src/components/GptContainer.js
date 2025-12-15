import React from "react";
import GptMovieList from "./GptMovieList";
import GptSearch from "./GptSearch";
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
