import React from "react"
import { bannerImg } from "../../assets/index"

const RightBanner = () => (
  <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
    <img
      className="w-[300px] h-[400px] mb-[2px] lgl:w-[500px] lgl:h-[650px] lgl:mb-[102px] z-10"
      src={bannerImg}
      alt="bannerImg"
    />
    <div className="absolute bottom-0 w-[350px] h-[370px] lgl:w-[500px] lgl:h-[620px] lgl:mb-[100px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center" />
  </div>
)

export default RightBanner
