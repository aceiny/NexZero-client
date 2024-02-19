import React from 'react'
import { day1 } from '../data/AgendaData'
import AgendaItem from './AgendaItem'
import img1 from '../../public/assets/Agenda/Group 229.png'
import img2 from '../../public/assets/Agenda/Group 225.png'

const Day1 = (count) => {
  return (
    <div>
        <h2 className='text-[#FFFFFF] mt-[2%] text-center text-[36px] font-[700] font-[Poppins] mb-[50px] uppercase [text-shadow:0px_0px_17.8px_#FFFFFF] z-[100] max-md:text-[30px]'>Day 01</h2>
        <div>
          {day1.map((day) => {
            return (
              <AgendaItem day={day} count={count}/>
            )
          })}
        </div>
        <img src={img1} alt="" className='absolute top-[140px] right-[200px] w-[90px] max-md:left-[50%] max-md:translate-x-[-50%] max-md:top-[120px]'/>
        <img src={img2} alt="" className='absolute bottom-[90px] left-[180px] w-[80px] max-md:left-[50%] max-md:translate-x-[-50%]' />
    </div>
  )
}

export default Day1