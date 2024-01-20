import React from "react";
import { useState, useEffect } from "react";
import laptop from '../../public/assets/laptop.png'
const Time = () => {
    const eventDate = new Date("2024-01-26T18:00:00");

    const calculateRemainingTime = () => {
      const currentDate = new Date();
      const timeDifference = eventDate - currentDate;
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      return { days, hours, minutes, seconds };
    };
  
    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setRemainingTime(calculateRemainingTime);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return(
        <section className="section relative overflow-hidden h-[100vh] bg-[#1B1919] mx-[auto] my-[auto] flex flex-col justify-center items-center">
            <h1 className="text-[#F05323] text-center text-[60px] font-[700] font-good-times mt-[4%] mb-[6px] uppercase [text-shadow:0px_0px_17.8px_#F05323] z-[100] max-md:text-[46px]">Time Left</h1>
            <div className="relative max-md:w-[480px] z-[100]">
                <img src={laptop} className="w-[900px]"  alt="" />
                <div className="gap-3 rounded-[12px] bg-[rgba(0,_1,_1,_0.63)] backdrop-filter backdrop-blur-[2.5px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex justify-between text-center px-[10px] py-[20px] max-md:gap-[10px] max-md:p-[10px] max-md:gap-2">
                    <div className="w-[80px] flex flex-col max-md:w-[72px]">
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center	max-md:text-[14px]">Days</span>
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center max-md:text-[14px]">{remainingTime.days}</span>
                    </div>
                    <div className="w-[80px] flex flex-col max-md:w-[72px]">
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center	max-md:text-[14px]">Hours</span>
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center max-md:text-[14px]">{remainingTime.hours}</span>
                    </div>
                    <div className="w-[80px] flex flex-col max-md:w-[72px]">
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center	max-md:text-[14px]">Minutes</span>
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center max-md:text-[14px]">{remainingTime.minutes}</span>
                    </div>
                    <div className="w-[80px] flex flex-col max-md:hidden">
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center	max-md:text-[14px]">Seconds</span>
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center max-md:text-[14px]">{remainingTime.seconds}</span>
                    </div>
                </div>
            </div>
            <img src="../assets/circle.png" className='absolute w-[800px] top-[-58%] left-[-19%] max-md:top-[-25%] max-md:left-[-34%]'/>
            <img src="../assets/circle.png" className='absolute w-[800px] bottom-[-52%] right-[-19%] max-md:bottom-[-18%] max-md:right-[-34%]'/>
        </section>
    )
}

export default Time

/*<img src={screen} className="w-[700px] " alt="screen"/>
                <img src={blackbg} className="w-[440px] absolute top-[8px] left-[132px]" alt="black_background" />
                <img src={binaire} className="w-[440px] absolute top-[8px] left-[132px]" alt="binaire"/>*/