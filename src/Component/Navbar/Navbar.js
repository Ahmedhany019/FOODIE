import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

export default function Navbar() {

    const [bar,setBar] = useState(false);

    const clickBar = ()=>{
        setBar((e)=> !e)
    }

  return (
    <div className="container m-auto relative">
    <div className="flex justify-between items-center ">
        <h3 className="z-10 text-[black] md:text-primary font-[500] text-[45px] leading-[67px]">FOOD</h3>
        <ul className="hidden md:flex gap-6 flex-1 justify-center items-center">
            <li className="group"><a href="#Home" className="group-hover:text-primary duration-200 font-bold text-[21px] text-[#373737]">Home</a></li>
            <li className="group"><a href="#About" className="group-hover:text-primary duration-200 font-bold text-[21px] text-[#373737]">About</a></li>
            <li className="group"><a href="#Testimonials" className="group-hover:text-primary duration-200 font-bold text-[21px] text-[#373737]">Testimonials</a></li>
            <li className="group"><a href="#Contact" className="group-hover:text-primary duration-200 font-bold text-[21px] text-[#373737]">Contact</a></li>
            <FaCartShopping className="h-[35px] w-[35px] cursor-pointer hover:text-primary duration-200"/>
            <button className="hover:bg-primary hover:text-[white] duration-200 py-2 px-4 rounded-3xl bg-[white]">Booking Now</button>
        </ul>
        <FaBars onClick={clickBar} className="md:hidden w-[34px] h-[34px] cursor-pointer"/>
        {bar ? 
        <ul className=" z-[1000] transition duration-[3000ms] ease-in-out bg-[white] top-[60px] absolute right-0 rounded-md min-w-[220px] p-4">
            <li><a href="#Home" className="font-bold text-[21px] text-primary">Home</a></li>
            <li><a href="#About" className="font-bold text-[21px] text-primary">About</a></li>
            <li><a href="#Testimonials" className="font-bold text-[21px] text-primary">Testimonials</a></li>
            <li><a href="#Contact" className="font-bold text-[21px] text-primary">Contact</a></li>
        </ul>: null}
    </div>
    </div>
  );
}
