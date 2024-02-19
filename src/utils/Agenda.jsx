import React, { useState } from 'react'
import Day1 from './Day1'
import Day2 from './Day2'
import Day3 from './Day3'
import { RiArrowDropRightFill } from "react-icons/ri";
import { RiArrowDropLeftFill } from "react-icons/ri";


const Agenda = () => {
  const [count, setCount] = useState(1)

  const handleCountPlus = () => {
    if(count === 3) {
        setCount(1)
    }
    else {
        setCount(count + 1)
    }
  }
  const handleCountMoin = () => {
    if(count === 1) {
        setCount(3)
    }
    else {
        setCount(count - 1)
    }
  }

  return (
    <section className='section relative overflow-hidden h-[100vh] bg-[#1B1919] flex flex-col justify-center items-center'>
        <h1 className='text-[#F05323] mt-[6%] text-center text-[60px] font-[700] font-good-times mb-[10px] uppercase [text-shadow:0px_0px_17.8px_#F05323] z-[100] max-md:text-[36px] max-md:mt-[10%]'>Event Agenda</h1>
        {count === 1 ? <Day1 count={count} /> : (count === 2 ? <Day2 count={count} /> : (count === 3 ? <Day3 count={count} /> : ''))}
        <button className={count == 2 ? 'absolute top-[50%] translate-y-[-50%] right-[20px] z-[9999] max-md:top-auto max-md:!bottom-[-80px]' : 'absolute top-[50%] translate-y-[-50%] right-[20px] z-[9999] max-md:top-auto max-md:bottom-[0]'} onClick={handleCountPlus}><RiArrowDropRightFill className='text-[#f0532324] [transition:0.3s] hover:text-[#f05323] hover:[filter:drop-shadow(0px_0px_10px_#F05323)] text-[140px] [text-shadow:0px_0px_17.8px_#F05323]'  /></button>
        <button className={count == 2 ?'absolute top-[50%] translate-y-[-50%] left-[20px] z-[9999] max-md:top-auto max-md:!bottom-[-80px]': 'absolute top-[50%] translate-y-[-50%] left-[20px] z-[9999] max-md:top-auto max-md:!bottom-[0]'} onClick={handleCountMoin}><RiArrowDropLeftFill className=' text-[#f0532324] [transition:0.3s] hover:text-[#f05323] hover:[filter:drop-shadow(0px_0px_10px_#F05323)] text-[140px] [text-shadow:0px_0px_17.8px_#F05323]' /></button>
        <img src="../assets/circle.png" className='absolute w-[800px] top-[-58%] right-[-19%] max-md:top-[-25%] max-md:right-[-34%]'/>
        <img src="../assets/circle.png" className='absolute w-[800px] bottom-[-52%] left-[-19%] max-md:bottom-[-18%] max-md:left-[-34%]'/>
    </section>
  ) 
}

export default Agenda