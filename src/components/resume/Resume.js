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
        <ul>
            <li>Education</li>
            <li>Professional Skills</li>
            <li>Experience</li>
            <li>Achievements</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
