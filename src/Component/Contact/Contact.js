import React from 'react'

export default function Contact() {
  return (
    <div className='wrapper flex flex-col items-center justify-between text-center mt-20'>
        <div className='flex flex-col items-center justify-between'>
            <h1  className='font-bold text-[30px] text-[#4C4C4C]'>Have Question In Mind?<br/> Let Us Help You</h1> </div>
        <div className='my-20 relative'>
            <input className='caret-primary outline-primary p-5 rounded-full w-[300px] min-w-[250px] sm:w-[500px]' placeholder='yourmail@gmail.com'/>
            <button type='submit' className='hover:bg-secondary duration-200 bg-primary text-[white] rounded-full py-2 px-4 absolute right-3 top-[50%] translate-y-[-50%] '>Submit</button>
        </div>
    </div>
  )
}
