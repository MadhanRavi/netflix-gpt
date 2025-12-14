import React from "react";

const VideoInfo = ({ info }) => {
  return (
    <div className="pt-[20%] px-28 mr-auto absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{info.original_title}</h1>
      <p className="italic text-sm mt-4 w-1/3">{info.overview}</p>
      <div className="mt-6">
        <button className="bg-white text-black hover:bg-opacity-75 rounded-lg p-2 min-w-24 mr-2">
          ▶️ Play
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white rounded-lg p-2  min-w-24">
          ☯️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
