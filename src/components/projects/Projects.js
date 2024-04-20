import React from "react"
import {
  SiJavascript,
  SiRuby,
  SiRubyonrails,
  SiCss3,
  SiHtml5,
  SiRedux,
  SiTailwindcss,
  SiWebpack,
  SiEslint,
  SiJest,
} from "react-icons/si"
import { FaReact } from "react-icons/fa"
import Title from "../layouts/Title"
import {
  carRental,
  hpChar,
  math,
  space,
  foodApp,
  leaderboard,
} from "../../assets/index"
import ProjectsCard from "./ProjectsCard"

const Projects = () => (
  <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
    <div className="flex justify-center items-center text-center">
      <Title
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Projects"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
        title="Rental Car App"
        des="This is a user-friendly car rental management app that allows users to reserve cars for rental, add new cars, and delete existing ones."
        src={carRental}
        githubLink="https://github.com/wassimchakib/Car-Rental-Front-End"
        demoLink="https://car-rental-front-end.vercel.app/"
        icons={[
          <SiTailwindcss key="tailwindcss" />,
          <FaReact key="react" />,
          <SiRedux key="redux" />,
          <SiRuby key="ruby" />,
          <SiRubyonrails key="rubyonrails" />,
        ]}
      />
      <ProjectsCard
        title="Space Traveler`s Hub"
        des=" This is a React Web App with the real live data from the SpaceX API.
        The application allows users to book rockets and join selected space missions."
        src={space}
        githubLink="https://github.com/KIsmoilov/Space-Traveler-s-Hub"
        demoLink="https://space-travelers-hub-astn.onrender.com/"
        icons={[
          <SiHtml5 key="html" />,
          <SiCss3 key="css" />,
          <SiJavascript key="javascript" />,
          <FaReact key="react" />,
          <SiRedux key="redux" />,
        ]}
      />
      <ProjectsCard
        title="Harry Potter"
        des="This is a single-page application (SPA) with data from the HP Characters API.
        It allows users to search and read details about different HP characters."
        src={hpChar}
        githubLink="https://github.com/KIsmoilov/React-Capstone_Harry-Potter-Characters"
        demoLink="https://hp-characters-qmdj.onrender.com/"
        icons={[
          <SiHtml5 key="html" />,
          <SiCss3 key="css" />,
          <SiJavascript key="javascript" />,
          <FaReact key="react" />,
          <SiRedux key="redux" />,
        ]}
      />
      <ProjectsCard
        title="Leaderboard App"
        des="This is a leaderboard app that displays scores submitted by different players and allows you to submit your score. The data is stored in the external Leaderboard API."
        src={leaderboard}
        githubLink="https://github.com/KIsmoilov/Leaderboard"
        demoLink="https://kismoilov.github.io/Leaderboard/"
        icons={[
          <SiHtml5 key="html" />,
          <SiCss3 key="css" />,
          <SiJavascript key="javascript" />,
          <SiWebpack key="webpack" />,
          <SiEslint key="eslint" />,
        ]}
      />
      <ProjectsCard
        title="Food App"
        des="This is a food app that allows users to see various kinds of meal categories with like and comment features.
        The MEALDB API data has been used to build the app."
        src={foodApp}
        githubLink="https://github.com/KIsmoilov/JS-Capstone-Project"
        demoLink="https://kismoilov.github.io/JS-Capstone-Project/"
        icons={[
          <SiHtml5 key="html" />,
          <SiCss3 key="css" />,
          <SiJavascript key="javascript" />,
          <SiWebpack key="webpack" />,
          <SiJest key="jest" />,
        ]}
      />
      <ProjectsCard
        title="Math Magicians"
        des="This app is for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote."
        src={math}
        githubLink="https://github.com/KIsmoilov/math-magicians"
        demoLink="https://calculator-by-math-magicians.onrender.com/"
        icons={[
          <SiHtml5 key="html" />,
          <SiCss3 key="css" />,
          <SiJavascript key="javascript" />,
          <FaReact key="react" />,
          <SiEslint key="eslint" />,
        ]}
      />
    </div>
  </section>
)

export default Projects
