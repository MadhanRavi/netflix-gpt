import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black p-6">
        <div className="-mt-52 relative z-20">
          <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
          <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
          <MovieList title="Trending" movies={movies?.trendingMovies} />
          <MovieList title="Upcoming" movies={movies?.upComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
