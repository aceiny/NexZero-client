import React from "react";

const FaqqCard = ({ faq }) => {
  console.log(faq);
  console.log(window.innerHeight);
  return (
    <div className={`flex flex-col items-center text-center`}>
      <div className="font-bold text-white text-[50px] mb-[30px] max-xl:text-[30px] h-[13vh] flex items-center justify-center">
        {faq.quest}
      </div>
      <div className="h-[40vh] w-[31.5vw] min-w-[320px]  bg-[#262525]  rounded-[20px] flex justify-center items-center px-[3vw]">
        <p className="text-[#FFF] font-[Poppins]  font-[500] text-[22px] max-md:text-[15px] leading-[30px]">
          {" "}
          {faq.ans}
        </p>
      </div>
    </div>
  );
};

export default FaqqCard;
