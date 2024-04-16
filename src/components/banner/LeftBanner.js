import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaAngellist,
  FaMediumM,
} from 'react-icons/fa';
import { SiJavascript, SiRuby, SiRubyonrails } from 'react-icons/si';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer.', 'Professional Coder.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I&apos;m
          {' '}
          <span className="text-designColor capitalize">
            Khusniddin Ismoilov
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a
          {' '}
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I can help you build a product, feature or website. Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don&apos;t hestiate to contact me.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/khusniddin-ismoilov/"
              className="bannerIcon"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/KIsmoilov"
              className="bannerIcon"
              target="blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://wellfound.com/u/khusniddin-ismoilov"
              className="bannerIcon"
              target="blank"
            >
              <FaAngellist />
            </a>
            <a
              href="https://medium.com/@husniddin.ismoilov"
              className="bannerIcon"
              target="blank"
            >
              <FaMediumM />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiRuby />
            </span>
            <span className="bannerIcon">
              <SiRubyonrails />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
