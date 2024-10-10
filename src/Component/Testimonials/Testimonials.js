import React from 'react'
import {testimonials} from '../data'
export default function Testimonials() {

    const cards = testimonials.map((testimonial,i)=>(
        <div key={i} className='flex flex-col items-center justify-between bg-[white] p-4 rounded-2xl max-w-[700px]'>
                    <img src={testimonial.img} alt='fork'/>
                    <p className='text-secondary font-medium my-5 w-[80%]'>{testimonial.desc}</p>
                    <div className='flex gap-2'>
                        <img className='w-[30px] h-[30px]' src={testimonial.stars} alt='stars'/>
                        <img className='w-[30px] h-[30px]' src={testimonial.stars} alt='stars'/>
                        <img className='w-[30px] h-[30px]' src={testimonial.stars} alt='stars'/>
                        <img className='w-[30px] h-[30px]' src={testimonial.stars} alt='stars'/>
                        <img className='w-[30px] h-[30px]' src={testimonial.stars} alt='stars'/>
                    </div>
                    <h2 className='font-bold text-[30px] mt-4'>{testimonial.name}</h2>
                </div>
    ))

  return (
    <div className='wrapper flex flex-col items-center justify-between text-center'>
        <div className='flex flex-col items-center justify-between'>
            <h5 className='text-primary font-bold text-[20px]'>Testimonials</h5>
                <h1  className='font-bold text-[30px] text-[#4C4C4C]'>What They Are Saying</h1>
                <p className='max-w-[700px] text-secondary font-semibold leading-[30px]'>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie duimagnis facilisis at fringilla quam.</p>
        </div>
        <div className='testimonials-wrapper my-20 mx-4'>
            {cards}
        </div>
    </div>
  )
}
