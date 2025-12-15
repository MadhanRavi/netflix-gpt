import React from "react";
import { MOVIE_IMG_CDN } from "../utils/constants";

const MovieCard = ({ movies }) => {
  return (
    movies && (
      <div className="flex overflow-x-auto no-scrollbar">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="w-40 pr-4 cursor-pointer hover:scale-150 hover:shadow-lg"
            src={MOVIE_IMG_CDN + movie?.poster_path}
            alt="Poster"
          />
        ))}
      </div>
    )
  );
};

export default MovieCard;
