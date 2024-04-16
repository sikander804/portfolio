/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const ProjectsCard = ({
  title, des, src, githubLink, demoLink, icons,
}) => (
  <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
    <div className="w-full h-60 overflow-hidden rounded-lg border-solid border-2 border-white-600">
      <img
        className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        src={src}
        alt="src"
      />
    </div>
    <div className="w-full mt-5 flex flex-col  gap-6">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal">
            {title}
          </h3>
          <div className="flex gap-2">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <BsGithub />
            </a>
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <FaGlobe />
            </a>
          </div>
        </div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
          {des}
        </p>
        <div className="flex gap-4 mt-5">
          {icons && icons.length > 0 && icons.map((icon, index) => (
            <span key={index} className="bannerIcon">
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

ProjectsCard.propTypes = {
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ProjectsCard;
