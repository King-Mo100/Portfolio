import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin,  FaGithub,  FaTwitter,  FaReact, } from "react-icons/fa";
import { SiHtml5,  SiCss3,  SiJavascript, SiPython} from "react-icons/si";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Web Developer.", "Software Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className="w-full py-20 flex items-center border-b-[1px] font-titleFont border-b-black"
    >
      <div className="w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Moses King</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            minus temporibus! Iste enim illo exercitationem culpa pariatur. Non
            pariatur labore temporibus corrupti rem eum blanditiis porro, ad
            eius sequi laudantium voluptates aspernatur animi dolorem doloremque
            saepe, eveniet autem officia cupiditate?
          </p>
        </div>
        <div className="flex justify-between">
          <div className="findMe">
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me on
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaGithub />
              </span>
              <span className="bannerIcon">
                <FaTwitter />
              </span>
              <span className="bannerIcon">
                <FaLinkedin />
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4"> 
            Skills
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <SiHtml5 />
              </span>
              <span className="bannerIcon">
                <SiCss3 />
              </span>
              <span className="bannerIcon">
                <SiJavascript />
              </span>
              <span className="bannerIcon">
                <FaReact/>
              </span>
              <span className="bannerIcon">
                <SiPython/>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2"></div>
    </section>
  );
};

export default Banner;
