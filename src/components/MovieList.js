import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="text-2xl text-white my-4">{title}</h1>
      <MovieCard movies={movies} />
    </div>
  );
};

export default MovieList;
