import React from "react";
import { useContext } from "react";
import Context from "../Context";
const NavBar = () => {
  let { toogleModal } = useContext(Context);
  return (
    <div className=" py-[50px] w-[100vw] flex justify-between px-[9.8vw] items-center  absolute fixed top-0  z-[1000]">
      <img src="../assets/navimg.png" alt="" className="max-lg:w-[120px]" />
      <div className="h-[52px] w-[230px] max-lg:w-[150px] max-lg:h-[30px] max-lg:text-[14px] border border-[#F05323] rounded-[16px] text-[19px] font-bold text-[#F05323] font-good-times flex justify-center items-center cursor-pointer "
      onClick={toogleModal}>
        REGISTER NOW
      </div>
    </div>
  );
};

export default NavBar;
