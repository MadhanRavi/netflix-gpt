import { useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos";

const VideoBackground = ({ info }) => {
  useMovieVideos(info.id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&playsinline=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media;"></iframe>
    </div>
  );
};

export default VideoBackground;
