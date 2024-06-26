import React from "react"
import {
  // SiJavascript,
  // SiCss3,
  // SiHtml5,
  SiRedux,
  SiPostgresql,
  SiGraphql,
  SiNodedotjs,
  SiRubyonrails,
  SiMongodb,
  SiFirebase,
  SiAwsamplify,
  SiNextdotjs,
  SiTypescript,
  SiGatsby,
} from "react-icons/si"
import { FaReact, FaDatabase, FaMobileAlt } from "react-icons/fa"
import { AiFillAppstore } from "react-icons/ai"
import { TbBrandReactNative } from "react-icons/tb"

import Title from "../layouts/Title"

const Features = () => (
  <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
    <Title title="Features" des="What I Do" />
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      <div className="w-full px-12 h-120 py-5 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
        <div className="h-90 overflow-y-hidden">
          <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
            <div className="w-10 h-6 flex flex-col justify-between">
              <span className="text-5xl text-designColor">
                <AiFillAppstore />
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
                Front-end Development
              </h2>
            </div>
            <div className="flex gap-4 mt-5">
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
                <SiGatsby />
              </span>
              <span className="bannerIcon">
                <SiRedux />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-12 h-120 py-5 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
        <div className="h-90 overflow-y-hidden">
          <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
            <div className="w-10 h-6 flex flex-col justify-between">
              <span className="text-5xl text-designColor">
                <FaMobileAlt />
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
                Mobile App development
              </h2>
            </div>
            <div className="flex gap-4 mt-5">
              <span className="bannerIcon">
                <TbBrandReactNative />
              </span>
              <span className="bannerIcon">
                <SiGraphql />
              </span>
              <span className="bannerIcon">
                <SiRedux />
              </span>
              <span className="bannerIcon">
                <SiAwsamplify />
              </span>
              <span className="bannerIcon">
                <SiFirebase />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-12 h-120 py-5 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
        <div className="h-90 overflow-y-hidden">
          <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
            <div className="w-10 h-6 flex flex-col justify-between">
              <span className="text-5xl text-designColor">
                <FaDatabase />
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
                Back-end Development
              </h2>
            </div>
            <div className="flex gap-4 mt-5">
              <span className="bannerIcon">
                <SiNodedotjs />
              </span>
              <span className="bannerIcon">
                <SiGraphql />
              </span>
              <span className="bannerIcon">
                <SiRubyonrails />
              </span>
              <span className="bannerIcon">
                <SiPostgresql />
              </span>
              <span className="bannerIcon">
                <SiMongodb />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <a
        href="https://docs.google.com/document/d/1IwXLLO4fvZNOSvWIDeYRoJkqy2mqtEjQRLwhXhaMpjw/edit?usp=sharing"
        target="_blank"
        className="w-100 mt-20 flex items-center mx-auto"
        rel="noreferrer"
      >
        <button
          type="button"
          className="w-80 h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
        >
          See my Resume
        </button>
      </a>
    </div>
  </section>
)

export default Features
