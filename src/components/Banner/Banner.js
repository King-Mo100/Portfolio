import React from "react";
import LeftBanner from "./LeftBanner";


const Banner = () => {

  return (
    <section
      id="home"
      className="w-full py-20 flex items-center border-b-[1px] font-titleFont border-b-black">
       
        <LeftBanner/>

      <div className="w-1/2">

      </div>
    </section>
  );
};

export default Banner;
