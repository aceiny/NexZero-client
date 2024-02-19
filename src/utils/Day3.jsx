import React from 'react'
import AgendaItem from './AgendaItem'
import { day3 } from '../data/AgendaData'
import img1 from '../../public/assets/Agenda/Vector.png'
import img2 from '../../public/assets/Agenda/Group 117.png'
import img3 from '../../public/assets/Agenda/Group.png'

const Day3 = (count) => {
  return (
    <div>
        <h2 className='text-[#FFFFFF] mt-[2%] text-center text-[36px] font-[700] font-[Poppins] mb-[30px] uppercase [text-shadow:0px_0px_17.8px_#FFFFFF] z-[100] max-md:text-[30px]'>Day 03</h2>
        <div>
            <div>
                {day3.map((day) => {
                    return (
                        <AgendaItem day={day} count={count} />
                    )
                })}
            </div>
        </div>
        <img src={img1} alt="" className='absolute w-[30px] top-[160px] left-[220px] max-md:left-[60px] max-md:top-[108px]' />
        <img src={img2} alt="" className='absolute w-[70px] top-[140px] right-[200px] max-md:right-[50px] max-md:top-[120px]' />
        <img src={img3} alt="" className='absolute w-[36px] bottom-[30px] left-[50%] translate-x-[-50%] max-md:bottom-[110px]' />
    </div>
  )
}

export default Day3