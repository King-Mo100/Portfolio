import React from "react";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full h-[800px] pb-20 flex border-b-[1px] border-b-black"
    >
      <div className="flex flex-col gap-4 font-titleFont">
        <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
          Features
        </h3>

        <h1 className="text-5xl text-gray-300 font-bold capitalize">
          What I do
        </h1>
      </div>
    </section>
  );
};

export default Features;
