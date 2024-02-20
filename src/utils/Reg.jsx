import React from "react";
import { useContext } from "react";
import Context from "../Context";
const Reg = () => {
  let { modal } = useContext(Context);
  return (
    <div
      className={` absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] flex flex-col items-center h-fit bg-opacity-5 rounded-[36px] py-[5.3vw] px-[5vw] shadow-md  my-backdrop-filter w-[86vw] lg:w-[69.4vw] z-[100000] origin-top transition-all   ${
        modal ? " scale-100" : "scale-0"
      } `}
    >
       
      <h1 className="w-[80%] text-shadow font-good-times mb-[50px] sm:text-[40px] text-[20px] ">
        Ahoy, Ninjas and hak3rs !
      </h1>
      <p className=" sm:text-[40px] text-[20px] font-[Poppins] text-[white] font-light capitalize mb-[9px] max-lg:text-center ">
        {" "}
        Welcome aboard NEXZERO CTF, where the spirit of daring hack3rs meets the
        stealthy artistry of ninjas!
      </p>
      <p className="font-light capitalize font-[Poppins] sm:text-[25px] text-[15px] text-[#F05323] max-lg:text-center">
        Ready to set sail into the challenges that lie ahead?Click to join the
        crew, where minds are connected, and data is secured.
      </p>
      <a 
        
        className={` flex justify-center items-center bg-grey-200 text-white text-[26px]  font-bold capitalize font-good-times rounded-[20px] max-w-[315px]  text-center max-sm:text-[15px] px-2 h-[74px] cursor-pointer mt-[51px]`}
      >
        register now
      </a>
    </div>
  );
};

export default Reg;
