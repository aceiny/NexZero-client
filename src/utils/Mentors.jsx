import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

const Mentors = () => {
  const mentors = [
    {
      name: "youcef",
      surname: "boobchich",
      job: " 2cp student",
      experiece: " app developer, lil nigga",
      image: null,
    },
  ];
  return (
    <section className="section relative overflow-hidden h-[100vh] bg-[#1B1919] mx-[auto] my-[auto] flex flex-col justify-center items-center">
      <h1 className="text-[#F05323] text-center text-[60px] font-[700] font-good-times mt-[4%] mb-[6px] uppercase [text-shadow:0px_0px_17.8px_#F05323] z-[100] max-md:text-[46px]">
        our mentors
      </h1>
    </section>
  );
};

export default Mentors;
