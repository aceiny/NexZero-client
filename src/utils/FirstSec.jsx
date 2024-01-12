import React from 'react'
import { useContext } from 'react'
import Context from '../Context'
import { NavLink } from 'react-router-dom'
const FirstSec = () => {
    let { modal } = useContext(Context)
  return (
      <div className='relative bg-[url("../assets/firstsec.png")] bg-cover bg-center pt-[100px] overflow-hidden min-h-[100vh] w-[100vw] overflow-x-hidden flex items-center justify-center'>
        
          <div className={`  flex flex-col items-center h-[auto] min-h-[638px] bg-opacity-5 rounded-[36px] py-[5.3vw] px-[5vw] my-backdrop-filter w-[69.4vw] z-[10] origin-top transition-all  ${modal ? " scale-100" : "scale-0"} `}>
           
              <h1 className='w-[80%] text-shadow font-good-times mb-[50px] sm:text-[40px] text-[20px] '>Ahoy, Ninjas and hak3rs !</h1>
              <p className=' sm:text-[40px] text-[20px] font-[Poppins] text-[white] font-light capitalize mb-[9px] max-lg:text-center '> Welcome aboard NEXZERO CTF, where the spirit of daring hack3rs meets the stealthy artistry of ninjas!</p>
          <p className='font-light capitalize font-[Poppins] sm:text-[25px] text-[15px] text-[#F05323] max-lg:text-center'>Ready to set sail into the challenges that lie ahead?Click to join the crew, where minds are connected, and data is secured.</p>
     <a  className={` flex justify-center items-center bg-[#F05323] text-[#1F1F1F] text-[26px]  font-bold capitalize font-good-times rounded-[20px] max-w-[315px]  text-center max-sm:text-[15px] px-2 h-[74px] cursor-pointer mt-[51px]`}>register now</a>
          </div>
          <img src="../assets/circle.png" className='absolute bottom-[-40vw]  left-[-35vw] translate-y-50%  '/>
          <img src="../assets/circle.png" className='absolute top-[-40vw]  right-[-35vw] translate-y-50%  '/>

    </div>
  )
}
export default FirstSec
