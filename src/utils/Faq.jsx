// import data from "./faqData";
// import { useState } from "react";
// const Faq = () => {
//   let [list, setList] = useState(data);
//   function handle(id) {
//     console.log(id);
//     setList(
//       list.map((e) => {
//         if (e.id === id) {
//           return { ...e, state: "side" };
//         } else if (e.id === id + 1) {
//           return { ...e, state: "center" };
//         } else {
//           return { ...e, state: "side" };
//         }
//       })
//     );
//     console.log(list);
//   }
//   return (
//     <div className="section h-[100vh] w-[100vw] pt-[8%] flex flex-col items-center  relative">
//       <p className=" text-[#F05323] text-center text-[60px] font-[700] font-good-times mb-[50px] uppercase [text-shadow:0px_0px_17.8px_#F05323] z-[100] max-md:text-[40px] max-md:mt-[10%] ">
//         FAQ
//       </p>
//       {list.map((e, i) => {
//         return (
//           <div
//             key={i}
//             className={` origin-right transition-all flex flex-col items-center absolute z-[10] top-[300px]   ${
//               e.state === "center" ? "scale-100" : "scale-0"
//             }`}
//             onClick={() => handle(e.id < 5 ? e.id : 0)}
//           >
//             <div className="font-bold text-white text-[50px] mb-[30px]">
//               {e.quest}
//             </div>
//             <div className="h-[300px] w-[31.5vw] min-w-[400px]  bg-[#262525]  rounded-[20px] flex justify-center items-center px-[50px]">
//               <p className="text-[#FFF] font-[Poppins] leading-[34px] font-[500] text-[22px] max-md:text-[15px] leading-[30px]">
//                 {" "}
//                 {e.ans}
//               </p>
//             </div>
//           </div>
//         );
//       })}{" "}
//       *
//     </div>
//   );
// };

// export default Faq;

import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import { BsFillTriangleFill } from "react-icons/bs";
import SponsorCard from "./SponsorCard";
import faqData from "./faqData";
import FaqqCard from "./FaqqCard";
const Faq = () => {
  return (
    <section className="section sponsorsSec relative overflow-hidden h-[100vh] bg-[#1B1919] mx-[auto] my-[auto] flex flex-col justify-center items-center">
      <h1 className="text-[#F05323] mt-[3%] text-center text-[60px] font-[700] font-good-times mb-[10px] uppercase [text-shadow:0px_0px_17.8px_#F05323] z-[100] max-md:text-[40px] max-md:mt-[10%]">
        FAQ
      </h1>

      <div className=" w-[80vw] md:w-[60vw]">
        <Splide hasTrack={false}>
          <div className="custom-wrapper main-slide">
            <SplideTrack>
              {faqData.map((faq, index) => {
                return (
                  <SplideSlide>
                    <FaqqCard faq={faq} />
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
  );
};

export default Faq;
