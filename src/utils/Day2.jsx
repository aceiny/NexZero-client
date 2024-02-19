import React, { useState } from 'react'
import AgendaItem from './AgendaItem'
import { day2Morning } from '../data/AgendaData'
import { day2Afternoun } from '../data/AgendaData'
import steacker from '../../public/assets/Agenda/steacker01.png'
import img1 from '../../public/assets/Agenda/Jungle.png'
import img2 from '../../public/assets/Agenda/Support.png'

const Day2 = (count) => {
    const check1 = true
    const check2 = false
  return (
    <div>
        <h2 className='text-[#FFFFFF] mt-[2%] text-center text-[36px] font-[700] font-[Poppins] mb-[50px] uppercase [text-shadow:0px_0px_17.8px_#FFFFFF] z-[100] max-md:text-[30px]'>Day 02</h2>
        <div className='flex items-center gap-[120px] max-md:flex-col max-md:gap-[0]'>
            <div>
                {day2Morning.map((day, check1) => {
                    return (
                        <div className='flex items-center justify-center mb-[38px]'>
                            <img src={steacker} alt="steacker" className='w-[16px] max-md:hidden' />
                            <AgendaItem day={day} count={count} />
                        </div>
                    )
                })}
            </div>
            <div>
                {day2Afternoun.map((day, check2) => {
                    return (
                        <div className='flex items-center justify-center mb-[38px]'>
                            <AgendaItem day={day} count={count}  />
                            <img src={steacker} alt="steacker" className='w-[16px] max-md:hidden' />
                        </div>
                    )
                })}
            </div>
        </div>
        <img src={img1} alt="" className='absolute top-[160px] left-[200px] w-[80px] max-md:left-[40px] max-md:w-[60px] max-md:top-[174px]' />
        <img src={img2} alt="" className='absolute bottom-[30px] left-[50%] translate-x-[-50%] w-[80px] max-md:bottom-[16px]' />
    </div>
  )
}

export default Day2