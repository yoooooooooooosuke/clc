'use client'
import { useEffect, useState } from 'react'
import { Number } from './Wafu60Numbers'
import { NumberM } from './Wafu60NumbersEZ';

import { Yuji_Boku } from "next/font/google";

const inter = Yuji_Boku({ subsets: ["latin"], weight : '400' });

export const Wafu = ({direction}) => {
  const [hour  , setHour  ] = useState(0);
  const [minute, setMinute] = useState(0);
  const [month , setMonth ] = useState(0);
  const [date2  , setDate2  ] = useState(0);
  
  useEffect(()=> {
    const update = () => {
      const date = new Date();
      let hour = date.getHours();
      setHour(hour);
      setMinute(date.getMinutes());
      setMonth(date.getMonth() + 1)
      setDate2(date.getDate())
    }
      update();
      const interval = setInterval(()=> {
          update();
      }, 1000);
      return ()=>clearInterval(interval);
  }, [])

  let base = "clock text-3xl text-white w-60 items-center bg-[url('/kuramewa1.png')] bg-contain rounded-b-2xl border-4 border-t-0 border-white"

  if(direction == 'top'){
    base = "clock text-3xl text-white w-60 items-center bg-[url('/kuramewa1.png')] bg-contain rounded-b-2xl border-4 border-t-0 border-white"
  }else if(direction == 'topleft'){
    base = "clock text-3xl text-white w-60 items-center bg-[url('/kuramewa1.png')] bg-contain rounded-br-2xl border-4 border-t-0 border-l-0 border-white"
  }else if(direction == 'topright'){
    base = "clock text-3xl text-white w-60 items-center bg-[url('/kuramewa1.png')] bg-contain rounded-bl-2xl border-4 border-t-0 border-r-0 border-white"
  }else if(direction == 'left'){
    base = "clock text-3xl text-white w-60 items-center bg-[url('/kuramewa1.png')] bg-contain rounded-l-2xl border-4 border-r-0 border-white"
  }else if(direction == 'right'){
    base = "clock text-3xl text-white w-60 items-center bg-[url('/kuramewa1.png')] bg-contain rounded-r-2xl border-4 border-l-0 border-white"
  }else if(direction == 'bottom'){
    base = "clock text-3xl text-white w-60 items-center bg-[url('/kuramewa1.png')] bg-contain rounded-t-2xl border-4 border-b-0 border-white"
  }else if(direction == 'bottomleft'){
    base = "clock text-3xl text-white w-60 items-center bg-[url('/kuramewa1.png')] bg-contain rounded-tr-2xl border-4 border-b-0 border-l-0 border-white"
  }else if(direction == 'bottomright'){
    base = "clock text-3xl text-white w-60 items-center bg-[url('/kuramewa1.png')] bg-contain rounded-tl-2xl border-4 border-b-0 border-r-0 border-white"
  }else if(direction == 'mid'){
    base = "clock text-3xl text-white w-60 items-center bg-[url('/kuramewa1.png')] bg-contain rounded-2xl border-4  border-white"
  }

  return (
    <div className={inter.className}>
      <div className={base}>
        <div className='flex px-6 py-4 justify-between'>
          <div className='text-sm [writing-mode:vertical-rl] border-2 rounded px-0.5 py-2 flex justify-evenly'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 self-center animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
            <div className=' self-center'>配信中</div>
          </div>
          <div className='flex flex-col  items-center'>
            <div className='flex px-2 pt-3 pb-1'>
              <div className='pr-1 text-3xl'>
                <Number  value={hour}/>
              </div>
              <div className='text-xl text-orange-400 self-end'>時</div>
            </div>
            <div className='flex px-2 pt-1 pb-3'>
              <div className='pr-1 text-3xl'>
                <Number value={minute}/>
              </div>
                <div className='text-xl self-end '>分</div>
            </div>
          </div>
          <div className='text-sm [writing-mode:vertical-rl] flex flex-col'>
            <div className='self-center'><NumberM value={month} />月<NumberM value={date2}/>日</div>
          </div>
        </div>
      </div>
    </div>
  )
}