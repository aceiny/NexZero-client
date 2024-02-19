import React from 'react'
import steacker from '../../public/assets/Agenda/steacker01.png'


const AgendaItem = ({day, count}) => {
  return (
    <div className={count.count == 2 ? 'flex items-center gap-[20px]' : 'mb-[38px] flex items-center gap-[120px] max-md:gap-[10px]'}>
        <div className='flex items-center gap-[10px]'>
            <img src={steacker} alt="steacker" className={count.count == 2 ? 'hidden' : 'w-[16px] max-md:hidden'} />
            <span className={'text-[#FFFFFF] text-center font-[Poppins] text-[24px] w-[220px] max-md:text-[20px] max-md:!w-[186px]'}>{day.time}</span>
        </div>
        <div className='flex items-center gap-[10px]'>
            <span className={count.count == 3 ? 'text-[#FFFFFF] text-center font-[Poppins] text-[24px] w-[370px] max-md:text-[20px] max-md:!w-[200px]' : 'text-[#FFFFFF] text-center font-[Poppins] text-[24px] w-[270px] max-md:text-[20px] max-md:!w-[200px]'}>{day.act}</span>
            <img src={steacker} alt="steacker" className={count.count == 2 ? 'hidden' : 'w-[16px] max-md:hidden'} />
        </div>
    </div>
  )
}

export default AgendaItem