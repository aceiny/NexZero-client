import thirdSectionImage from "../../public/assets/thirdSection.svg";

const ThirdSection = () => {
  return (
    <section className="section relative overflow-hidden h-[100vh] bg-[#1B1919] flex flex-col justify-center items-center">
      <h1 className="text-[#F05323] mt-[3%] text-center text-[56px] font-[700] font-good-times mb-[10px] uppercase [text-shadow:0px_0px_17.8px_#F05323] z-[100] max-md:text-[36px] max-md:mt-[10%]">
        why you should <br /> participate
      </h1>
      <div className="relative z-[100]">
        <img
          src={thirdSectionImage}
          alt="logo"
          className="absolute w-[320px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
        <div className="bg-white bg-opacity-5 p-10 w-[58%] text-center rounded-[25px] backdrop-blur-[10px] mx-[auto] max-xl:w-[80%] max-md:w-[90%] max-md:px-4 max-md:py-6">
          <p className="text-[#FFF] font-[Poppins]  font-[500] text-[16px] max-md:text-[14px] leading-[30px]">
            {" "}
            Hey Cyber Explorers and Tech Wizards! Ready to dive into the NEXZERO
            CTF fun? It's not just a challenge; it's a super cool adventure!
            Picture brain-twisting puzzles, a squad of awesome pals to team up
            with, and a safe spot for keeping data super secure. This isn't your
            usual thing; it's a chance to meet awesome industry folks, flaunt
            your ninja skills, and maybe snag some cool prizes along the way.
            Excited for this mega fun journey? Smash that register button and
            hop on the NEXZERO CTF train—where the fun never takes a break, and
            you're on your way to becoming a legend! 
          </p>
        </div>
      </div>
      <img
        src="../assets/circle.png"
        className="absolute w-[800px] top-[-58%] left-[-19%] max-md:top-[-25%] max-md:right-[-34%]"
      />
      <img
        src="../assets/circle.png"
        className="absolute w-[800px] bottom-[-52%] right-[-19%] max-md:bottom-[-18%] max-md:left-[-34%]"
      />
    </section>
  );
};

export default ThirdSection;
