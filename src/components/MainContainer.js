import React from "react";
import VideoInfo from "./VideoInfo";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  return (
    <div className="">
      <VideoInfo info={mainMovie} />
      <VideoBackground info={mainMovie} />
    </div>
  );
};

export default MainContainer;
