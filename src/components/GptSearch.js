import React from "react";
import { NETFLIX_BG } from "../utils/constants";
import { useSelector } from "react-redux";
import lang from "../utils/langContstants";

const GptSearch = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-40">
      <form className="w-6/12 mx-auto bg-black p-6 rounded-lg grid grid-cols-12 bg-opacity-85">
        <input
          type="text"
          className="p-2 border m-4 col-span-10"
          placeholder={lang[langKey].gptPlaceHolder}
        />
        <button className="px-4 py-2 my-4 bg-red-500 text-white rounded-lg col-span-2 hover:bg-red-600">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
