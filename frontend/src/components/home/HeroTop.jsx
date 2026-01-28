import React from "react";
import Video from "./VideoFile";

function HeroTop() {
  return (
    <div className="font-coke pt-5 text-center text-white">

      {/* Line 1 */}
      <div className="text-[9.5vw] uppercase leading-[8vw]">
        Refresh
      </div>

      {/* Line 2 with oval video */}
      <div className="text-[9.5vw] flex justify-center items-start uppercase leading-[8vw] gap-[1vw]">
        your

        <div className="h-[8vw] w-[14vw] overflow-hidden rounded-full mt-4">
          <Video />
        </div>

        World
      </div>

      {/* Line 3 */}
      <div className="text-[9.5vw] uppercase leading-[8vw]">
        Coca-Cola
      </div>

    </div>
  );
}

export default HeroTop;
