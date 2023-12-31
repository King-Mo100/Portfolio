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
            <li className="resumeLi">Education</li>
            <li className="resumeLi">Professional Skills</li>
            <li className="resumeLi">Experience</li>
            <li className="resumeLi">Achievements</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
