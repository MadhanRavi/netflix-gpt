import React from "react";
import VideoInfo from "./VideoInfo";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  return (
    <div className="relative pt-[40%] md:pt-[15%] lg:p-0 bg-black">
      <VideoInfo info={mainMovie} />
      <VideoBackground info={mainMovie} />
    </div>
  );
};

export default MainContainer;
