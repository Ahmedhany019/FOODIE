import React from 'react'
import img from '../../images/About Section Background.svg'
import img2 from '../../images/About Page Banner Image Background Removed 1.png'

import { MdSlowMotionVideo } from "react-icons/md";

export default function About() {
  return (
    <div className='wrapper flex md:flex-row flex-col my-20 justify-between md:items-center gap-10'>
        <div className='relative flex-1 order-2 '>
            <img src={img} alt='background'/>
            <img src={img2} alt='food' className='absolute min-w-[300px] md:max-w-[600px] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]'/>
        </div>
        <div className='info flex-1 z-20 items-center md:items-start flex flex-col px-2 md:order-2'>
            <h5 className='text-primary font-bold text-[20px]'>About</h5>
            <h1  className='text-center md:text-start font-bold text-[30px] text-[#4C4C4C]'>Food Is An Important Part Of A Balanced Diet</h1>
            <p className='text-center md:text-start text-secondary font-semibold leading-[30px]'>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie duimagnis facilisis at fringilla quam.<p>Non tincidunt magna non et elit. Dolor turpis molestie 
            dui magnis facilisis at fringilla quam.</p></p>
            <div className='flex items-center mt-10 ml-5 gap-5'>
            <button className='hover:bg-secondary duration-200 w-[max-content] flex gap-2 justify-center items-center text-[white] rounded-full bg-primary py-2 px-4 text-[25px]'>Learn more</button>
            <button className='bg-secondary hover:bg-primary duration-200 w-[max-content] flex gap-2 justify-center items-center text-[white] rounded-full py-3 px-3 font-medium text-[25px]'>
                <MdSlowMotionVideo/>
            </button>
            <button className='text-secondary hover:text-primary duration-200'>Watch Video</button>
            </div>
        </div>
    </div>
  )
}
