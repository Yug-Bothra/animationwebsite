import React from "react";
import Video from "../components/home/VideoFile";
import HeroBottom from "../components/home/HeroBottom";
import HeroTop from "../components/home/HeroTop";

function Home() {
  return (
    <div className="h-screen w-screen relative">

      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <Video />
      </div>

      {/* Optional dark overlay for visibility */}
      <div className="absolute inset-0 bg-black/40 -z-0"></div>

      {/* Text content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between">
        <HeroTop />
        <HeroBottom />
      </div>

    </div>
  );
}

export default Home;
