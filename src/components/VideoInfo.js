import React from "react";

const VideoInfo = ({ info }) => {
  return (
    <div className="pt-[15%] md:pt-[18%] lg:pt-[20%] pl-10 md:pl-20 mr-auto absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold md:w-1/3">
        {info.original_title}
      </h1>
      <p className="hidden lg:inline-block italic text-sm mt-4 w-1/3">
        {info.overview}
      </p>
      <div className="mt-6 w-1/3">
        <button className="bg-white text-black hover:bg-opacity-75 rounded-lg px-4 py-2 md:p-2 md:min-w-24 mr-2">
          ▶️ Play
        </button>
        <button className="bg-gray-500 hidden lg:inline-block hover:bg-gray-700 text-white rounded-lg p-2  min-w-24">
          ☯️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
