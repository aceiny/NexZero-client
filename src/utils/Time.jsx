import React from "react";
import { useState, useEffect } from "react";
import screen from '../../public/assets/screen.png'
import blackbg from '../../public/assets/black.png'
import binaire from '../../public/assets/binaire.png'
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
        <section className="section h-[100vh] bg-[#1B1919] mx-[auto] my-[auto] flex flex-col justify-center items-center">
            <h1 className="text-[#F05323] text-center text-[60px] font-[700] font-good-times mb-[10px] uppercase [text-shadow:0px_0px_17.8px_#F05323]">Time Left</h1>
            <div className="relative">
                <img src={laptop} className=""  alt="" />
                <div className="gap-3 rounded-[12px] bg-[rgba(0,_1,_1,_0.63)] backdrop-filter backdrop-blur-[2.549999952316284px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex justify-between text-center px-[10px] py-[20px]">
                    <div className="w-[80px] flex flex-col">
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center	">Days</span>
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center">{remainingTime.days}</span>
                    </div>
                    <div className="w-[80px] flex  flex-col">
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center	">Hours</span>
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center">{remainingTime.hours}</span>
                    </div>
                    <div className="w-[80px] flex flex-col">
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center	">Minutes</span>
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center">{remainingTime.minutes}</span>
                    </div>
                    <div className="w-[80px] flex flex-col">
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center	">Seconds</span>
                        <span className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] uppercase	text-center">{remainingTime.seconds}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Time

/*<img src={screen} className="w-[700px] " alt="screen"/>
                <img src={blackbg} className="w-[440px] absolute top-[8px] left-[132px]" alt="black_background" />
                <img src={binaire} className="w-[440px] absolute top-[8px] left-[132px]" alt="binaire"/>*/