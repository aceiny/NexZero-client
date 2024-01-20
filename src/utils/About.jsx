import React from "react";
import logo from "../../public/assets/NEXZERO LOGO2.png"

const About = () => {
    return(
        <section className="section relative overflow-hidden h-[100vh] bg-[#1B1919] flex flex-col justify-center items-center">
            <h1 className="text-[#F05323] mt-[3%] text-center text-[60px] font-[700] font-good-times mb-[10px] uppercase [text-shadow:0px_0px_17.8px_#F05323] z-[100] max-md:text-[40px] max-md:mt-[10%]">About <br /> NexZero</h1>
            <div className="relative z-[100]">
                <img src={logo} alt="logo" className="absolute w-[320px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
                <div className="bg-white bg-opacity-5 p-10 w-[58%] text-center rounded-[25px] backdrop-blur-[10px] mx-[auto] max-xl:w-[80%] max-md:w-[90%] max-md:px-4 max-md:py-6">
                    <p className="text-[#FFF] font-[Poppins] leading-[34px] font-[500] text-[18px] max-md:text-[15px] leading-[30px]">NexZero, the first CTF (Capture The Flag) event in Bejaia province ever, marks a pivotal moment for students by providing them with a valuable platform to enhance their cybersecurity skills through captivating challenges. Taking place from February 22nd to 24th, 2024 in Estin, Amizour, Bejaia, this event brings together 15 to 20 teams, each consisting of 5 members, resulting in a total of approximately 80 to 100 participants. The significance of NexZero extends throughout the entire region, holding the promise of enhancing cybersecurity skills and cultivating a competitive and vibrant environment.</p>
                </div>
            </div>
            <img src="../assets/circle.png" className='absolute w-[800px] top-[-58%] right-[-19%] max-md:top-[-25%] max-md:right-[-34%]'/>
            <img src="../assets/circle.png" className='absolute w-[800px] bottom-[-52%] left-[-19%] max-md:bottom-[-18%] max-md:left-[-34%]'/>
        </section>
    )
}

export default About