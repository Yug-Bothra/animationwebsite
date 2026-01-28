import React from "react";
import VideoFile from "../../assets/images/home/Cococla.mp4"; // <-- Correct import

function Video() {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={VideoFile}   // <-- Vite will serve it correctly
        type="video/mp4"
      />
    </div>
  );
}

export default Video;
