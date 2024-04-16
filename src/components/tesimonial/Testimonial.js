import React, { useState } from "react";
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import {
  testimonialOne,
  testimonialTwo,
  testimonialThree,
  quote,
} from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      />
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT OTHERS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    From Nigeria
                  </p>
                  <h3 className="text-2xl font-bold">Valentine Ezekwonna</h3>
                  <p className="text-base tracking-wide mt-2 text-gray-500">
                    Full-Stack Web Developer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                      Built Space Traveler`s Hub App
                    </h3>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-small tracking-wide leading-6">
                    Khusniddin is an exceptional developer who possesses all the
                    skills one would want in an excellent software developer.
                    From HTML, JavaScript, and CSS to React, he masters the top
                    programming languages. He has been a great resource for our
                    group projects. He did an incredible job on all projects,
                    making timely deliveries and helping me nurture long-term
                    networking relationships. His work is always top-notch, and
                    he is always welcoming to feedback and making improvements.
                    Plus, Khusniddin Ismoilov is self-motivated and a great team
                    player.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialTwo}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    From Turkey
                  </p>
                  <h3 className="text-2xl font-bold">Mert Kaya</h3>
                  <p className="text-base tracking-wide mt-2 text-gray-500">
                    Full-Stack Blockchain Developer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                      Worked in Pair-Programming Sessions
                    </h3>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-small tracking-wide leading-6">
                    Khusniddin is an intelligent developer who effortlessly
                    solves web development challenges. Through our collaboration
                    on numerous projects, I have observed his remarkable skills
                    and unwavering dedication as a coding partner. His
                    proficiency in JavaScript, Ruby, and Redux has significantly
                    benefited our team, enabling us to consistently complete
                    projects ahead of schedule. I am impressed by his
                    punctuality, reliability, and overall pleasant demeanor. I
                    enthusiastically endorse him for anyone seeking assistance
                    with their team or web development project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialThree}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    From Myanmar
                  </p>
                  <h3 className="text-2xl font-bold">Hein Tay Zar</h3>
                  <p className="text-base tracking-wide mt-2 text-gray-500">
                    Full-Stack Web Developer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                      Solved Coding Challenges Together
                    </h3>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-small tracking-wide leading-6">
                    Khusniddin is a highly skilled professional who excels in
                    effective communication. His professionalism is truly
                    inspiring, and he consistently provides valuable support in
                    various ways. Working together on an app development
                    project, Khusniddin proved to be an exceptional team player,
                    contributing significantly to its success. He actively
                    participates in all meetings, contributing ideas, writing
                    code, and managing the app. He is a thorough and
                    well-mannered individual, consistently communicating in a
                    polite and respectful manner. If you are seeking to have the
                    absolute best team players on your team, he would
                    undoubtedly be an exceptional fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
