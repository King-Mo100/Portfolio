import React from "react";
import Title from "../layouts/Title";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-8">
        <Title 
        title="1+ Years Experience" 
        des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
            <li className="w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300
            flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center 
            border-[1px] rounded-none">Education</li>
            <li className="w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300
            flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center 
            border-[1px] rounded-none">Professional Skills</li>
            <li className="w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300
            flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center 
            border-[1px] rounded-none">Experience</li>
            <li className="w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300
            flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center 
            border-[1px] rounded-none">Achievements</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
