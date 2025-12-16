import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieList = () => {
  const { gptMovies, gptMoviesList } = useSelector((store) => store.gpt);
  if (!gptMovies) return null;
  return (
    <div className="p-4 m-4 bg-black text-white">
      {gptMovies.map((movieName, index) => {
        return (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMoviesList[index]}
          />
        );
      })}
    </div>
  );
};

export default GptMovieList;
