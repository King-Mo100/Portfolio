import React from "react";
import Title from "../layouts/Title";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full h-[800px] py-20 border-b-[1px] border-b-black"
    >
        <Title title="Features" des="What I Do"/>
        <div className="w-1/2 px-12 h-80 py-10 rounded-lg sgadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group
        hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100"></div>
    </section>
  );
};

export default Features;
