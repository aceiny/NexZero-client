import React, { useState } from 'react'
import Sponsors from './Sponsors'
import group from '../../public/assets/Group 75.png'
const OurSponsors = () => {
    const clickHandler = () => {
        document.querySelector('.sponsorsSec').scrollIntoView({behavior: 'smooth'})
    }
  return (
    <div className=' relative gap-[10vh] justify-center section h-screen flex items-center flex-col'>
        <h1 className="text-[#F05323] mt-[3%] text-center text-[60px] font-[700] font-good-times mb-[10px] uppercase [text-shadow:0px_0px_17.8px_#F05323] z-[100] max-md:text-[40px] max-md:mt-[10%]">
        our sponsors
        </h1>
        <div className=' relative bg-white flex flex-col items-center h-fit bg-opacity-5 rounded-[36px] py-[5.3vw] px-[5vw] shadow-md  my-backdrop-filter w-[86vw] lg:w-[69.4vw] z-[100000]'>
            <img src={group} className=' absolute  opacity-60 left-[50%] translate-x-[-50%] blur-lg ' alt="" />
            <span className='font-[Poppins] z-50 text-white text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] font-[600]'>
                We are honored to collaborate with companies and organizations sharing the same passion for cybersecurity, and this event have been impossible to organize without the contribution of these generous organisations:
            </span>
        </div>
        <button onClick={clickHandler} className='border h-[78px] w-[340px] uppercase flex items-center justify-center text-center rounded-[24px] border-[#F05323] text-[#F05323] font-[700] text-[28.5px] '>
            Press To See
        </button>
    </div>
  )
}

export default OurSponsors