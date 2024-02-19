import React from "react";

const FaqqCard = ({ faq }) => {
  console.log(faq);
  return (
    <div className={`flex flex-col items-center text-center`}>
      <div className="font-bold text-white text-[50px] mb-[30px]">
        {faq.quest}
      </div>
      <div className="h-[300px] w-[31.5vw] min-w-[400px]  bg-[#262525]  rounded-[20px] flex justify-center items-center px-[3vw]">
        <p className="text-[#FFF] font-[Poppins] leading-[34px] font-[500] text-[22px] max-md:text-[15px] leading-[30px]">
          {" "}
          {faq.ans}
        </p>
      </div>
    </div>
  );
};

export default FaqqCard;
