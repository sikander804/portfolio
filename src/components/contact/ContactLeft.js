import React from "react";
import { FaAngellist, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => (
  <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
    <img
      className="w-full h-64 object-cover rounded-lg mb-2"
      src={contactImg}
      alt="contactImg"
    />
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-bold text-white">Khusniddin Ismoilov</h3>
      <p className="text-lg font-normal text-gray-400">Full-Stack Developer</p>
      <p className="text-base text-gray-400 tracking-wide">
        In love with pair-programming and remote work. Open to new
        opportunities.
      </p>
      <p className="text-base text-gray-400 flex items-center gap-2">
        Phone: <span className="text-lightText">+1 415 900 01 55</span>
      </p>
      <p className="text-base text-gray-400 flex items-center gap-2">
        Email:{" "}
        <span className="text-lightText">husniddin.ismoilov@gmail.com</span>
      </p>
    </div>
    <div className="flex flex-col gap-4">
      <h2 className="text-base uppercase font-titleFont mb-6">Find me in</h2>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/khusniddin-ismoilov/"
          target="blank"
          className="bannerIcon"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://twitter.com/Uz_Mnemonist"
          target="blank"
          className="bannerIcon"
        >
          <FaTwitter />
        </a>
        <a
          href="https://wellfound.com/u/khusniddin-ismoilov"
          target="blank"
          className="bannerIcon"
        >
          <FaAngellist />
        </a>
      </div>
    </div>
  </div>
);

export default ContactLeft;
