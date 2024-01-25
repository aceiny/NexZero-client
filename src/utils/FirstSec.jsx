import React from "react";
import { useContext } from "react";
import Context from "../Context";
import { NavLink } from "react-router-dom";
const FirstSec = () => {
  let { modal } = useContext(Context);
  return (
    <div className='section relative bg-[url("../assets/firstsec.png")] overflow-hidden bg-cover bg-center pt-[100px] min-h-[100vh] w-[100vw] overflow-x-hidden flex items-center justify-center'>
    
      <img
        src="../assets/circle.png"
        className="absolute bottom-[-40vw]  left-[-35vw] translate-y-50%  "
      />
      <img
        src="../assets/circle.png"
        className="absolute top-[-40vw]  right-[-35vw] translate-y-50%  "
      />
    </div>
  );
};
export default FirstSec;
