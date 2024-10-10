import React from 'react'
import img from '../../images/Banner Background.png'
import imgHome from '../../images/Home Page Banner Image Background Removed 1.png'
import Navbar from '../Navbar/Navbar'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className='overflow-hidden '>
        <Navbar />
        <div className='relative flex flex-col md:flex-row items-center '>
            <div className=' banner absolute top-[-100px] right-[-170px] -z-10 max-w-[700px]'>
                <img  src={img} alt='banner'/>
            </div>
            <div className='w-[90%] flex flex-col items-center md:items-start mt-10 '>
                <h1 className='text-center md:text-start text-[30px] md:text-[60px] md:leading-[70px] font-bold'>Your Favourite Food<br className='hidden md:block'/>
                    Delivered Hot &<br className='hidden md:block'/>
                    Fresh
                </h1>
                <p className=' text-secondary text-center md:text-start font-semibold text-[16px] md:text-[25px]'>Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook
                a fresh food.</p>
                <button className='group hover:bg-secondary duration-200 w-[max-content] flex gap-2 justify-center items-center text-[white] rounded-full mt-10 ml-5 bg-primary py-2 px-4 text-[25px] '>Order Now <FaLongArrowAltRight className='pt-1 text-[25px] group-hover:animate-move-arrow'/></button>
            </div>
            <div className='max-w-[500px] md:max-w-[700px]'>
                <img alt='dish' src={imgHome}/>
            </div>
        </div>
            
    </div>
  )
}
