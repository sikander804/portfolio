import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaGithub, FaAngellist } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiRubyonrails,
  SiAmazonaws,
  SiNextdotjs,
  SiFirebase,
  SiNodedotjs,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Professional Coder."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="capitalize text-lg font-normal">
          CRAFT YOUR VISION. Code IT TO LIFE.
        </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I&apos;m{" "}
          <span className="text-designColor capitalize">Sikander Ahmad</span>
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
          I craft user-centric web & mobile apps. I transform innovative ideas
          into beautiful, functional applications that solve real-world
          problems. Let&apos;s collaborate and bring your vision to life.
          {/* Unlock Your Vision: From Concept to Reality! Explore my portfolio and experience. Whether it&apos;s crafting a cutting-edge product, refining a feature, or bringing your mobile app or website to life, I&apos;m here to turn your ideas into digital masterpieces. Let&apos;s collaborate on your next project! Reach out and let&apos;s make it happen. */}
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div className="mr-14">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/sikander-ahmad-056b60137/"
              className="bannerIcon"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/sikander804"
              className="bannerIcon"
              target="blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://wellfound.com/u/sikander-ahmad"
              className="bannerIcon"
              target="blank"
            >
              <FaAngellist />
            </a>
            {/* <a
              href="https://www.facebook.com/sikander.khan.36/"
              className="bannerIcon"
              target="blank"
            >
              <FaFacebook />
            </a> */}
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4 flex-wrap">
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTypescript />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>

            <span className="bannerIcon">
              <SiRubyonrails />
            </span>
            <span className="bannerIcon">
              <SiAmazonaws />
            </span>
            <span className="bannerIcon">
              <SiFirebase />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
