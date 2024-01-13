import React from "react";

const About = () => {
    return(
        <section className="section h-[100vh] bg-[#1B1919] flex flex-col justify-center	items-center">
            <h1 className="text-[#F05323] text-center text-[60px] font-[700] font-good-times mb-[10px] uppercase [text-shadow:0px_0px_17.8px_#F05323]">About <br /> NexZero</h1>
            <div className="bg-white bg-opacity-5 p-10 w-[800px] text-center rounded-[25px] backdrop-blur-[17.5px]">
                <p className="text-[#FFF] font-[Poppins] leading-[30px] font-[500] text-[18px]">NexZero, the first CTF (Capture The Flag) event in Bejaia province ever, marks a pivotal moment for students by providing them with a valuable platform to enhance their cybersecurity skills through captivating challenges. Taking place from February 22nd to 24th, 2024 in Estin, Amizour, Bejaia, this event brings together 15 to 20 teams, each consisting of 5 members, resulting in a total of approximately 80 to 100 participants. The significance of NexZero extends throughout the entire region, holding the promise of enhancing cybersecurity skills and cultivating a competitive and vibrant environment.</p>
            </div>
        </section>
    )
}

export default About