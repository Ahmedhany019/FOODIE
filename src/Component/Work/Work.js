import React from 'react'
import {cards} from '../data'
export default function Work() {

    const cardsList = cards.map((card,i)=>(
        <div key={i} className='hover:translate-y-[-15px] duration-300 bg-[white] max-w-[350px] h-[350px] flex flex-col justify-between items-center p-2 md:p-4 rounded-xl'>
                <img className='w-[140px] h-[140px]' src={card.img} alt='fork'/>
                <h2 className='font-bold text-[30px]'> {card.title}</h2>
                <p className='text-secondary font-medium'>{card.desc}</p>
            </div>
            
        )
    )
    
  return (
    <div className='wrapper flex flex-col items-center justify-between text-center'>
        <div className='flex flex-col items-center justify-between'>
            <h5 className='text-primary font-bold text-[20px]'>Work</h5>
                <h1  className='font-bold text-[30px] text-[#4C4C4C]'>How It Works</h1>
                <p className='max-w-[700px] text-secondary font-semibold leading-[30px]'>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie duimagnis facilisis at fringilla quam.Non tincidunt magna non et elit.</p>
        </div>
        <div className='my-20 cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center'>
            {cardsList}
        </div>
    </div>
  )
}
