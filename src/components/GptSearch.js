import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langContstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearch = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await fetch("http://localhost:4000/api/gpt", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ prompt: gptQuery }),
    // });

    // const gptResults = "Michael Madana Kama Rajan, Avvai Shanmugi, Thillu Mullu, Panchathanthiram, Ullathai Allitha";
    const gptResults =
      "Avengers, Transformers, X-Men, Harry Potter, Lord of Rings";

    // if (!gptResults.choices) {
    //   <p>No Movies Found!!!!</p>;
    // }

    const gptMovies = gptResults.split(",");
    const promiseMovies = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbMovies = await Promise.all(promiseMovies);
    dispatch(addGptMovies({ movieNames: gptMovies, movieList: tmdbMovies }));
  };
  return (
    <div className="pt-40">
      <form
        className="w-6/12 mx-auto bg-black p-6 rounded-lg grid grid-cols-12 bg-opacity-85"
        onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="p-2 border m-4 col-span-10"
          placeholder={lang[langKey].gptPlaceHolder}
          ref={searchText}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 my-4 bg-red-500 text-white rounded-lg col-span-2 hover:bg-red-600">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
