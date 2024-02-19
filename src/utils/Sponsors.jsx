import React from 'react'
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import { BsFillTriangleFill } from "react-icons/bs";
import SponsorCard from './SponsorCard';
import { SponsorsData } from '../data/sponsors';
const Sponsors = () => {
  return (
    <section className="section sponsorsSec relative overflow-hidden h-[100vh] bg-[#1B1919] mx-[auto] my-[auto] flex flex-col justify-center items-center">
    <h1 className="text-[#F05323] mt-[3%] text-center text-[60px] font-[700] font-good-times mb-[10px] uppercase [text-shadow:0px_0px_17.8px_#F05323] z-[100] max-md:text-[40px] max-md:mt-[10%]">
      our sponsors
    </h1>

    <div className=" w-[80vw] md:w-[60vw]">
      <Splide hasTrack={false}>
        <div className="custom-wrapper main-slide">
          <SplideTrack>
            {SponsorsData.map((sponsor, index) => {
              return (
                <SplideSlide>
                  <SponsorCard sponsor={sponsor} />
                </SplideSlide>
              );
            })}
          </SplideTrack>

          <div className="splide__arrows">
            <BsFillTriangleFill className=" splide__arrow splide__arrow--prev" />
            <BsFillTriangleFill className=" splide__arrow splide__arrow--next" />
          </div>
        </div>
      </Splide>
    </div>
    <div className=" h-[60px] md:h-0"></div>

    <img
      src="../assets/circle.png"
      className="absolute w-[800px] top-[-58%] right-[-19%] max-md:top-[-25%] max-md:right-[-34%]"
    />
  </section>
  )
}

export default Sponsors