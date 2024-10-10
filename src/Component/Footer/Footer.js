import React from 'react'
import twitter from '../../images/Vector 1.svg'
import linkedin from '../../images/Vector 2.svg'
import youtube from '../../images/Vector 3.svg'
import facebook from '../../images/face.svg'
export default function Footer() {
  return (
    <div className='bg-[white] rounded-3xl wrapper-footer px-10 py-10 grid grid-cols-1 gap-10 md:gap-0 sm:grid-cols-2 md:grid-cols-4 container m-auto'>
        <div className='flex flex-col justify-center gap-6 w-[230px]'>
            <h3 className='text-[30px] font-medium'>FOOD</h3>
            <div className='flex gap-3'>
                <a href='facebook'><img className='w-[25px] h-[25px]' src={facebook} alt='facebook'/></a>
                <a href='youtube'><img className='w-[25px] h-[25px]' src={youtube} alt='youtube'/></a>
                <a href='twitter'><img className='w-[25px] h-[25px]' src={twitter} alt='twitter'/></a>
                <a href='linkedin'><img className='w-[25px] h-[25px]' src={linkedin} alt='linkedin'/></a>
            </div>
        </div>
            <ul className='w-[180px]'>
                <li className='hover:text-primary duration-[300ms] '><button>Qualtiy</button></li>
                <li className='hover:text-primary duration-[300ms] mt-2'><button>Help</button></li>
                <li className='hover:text-primary duration-[300ms] mt-2'><button>Share</button></li>
                <li className='hover:text-primary duration-[300ms] mt-2'><button>Carrers</button></li>
                <li className='hover:text-primary duration-[300ms] mt-2'><button>Work</button></li>
                <li className='hover:text-primary duration-[300ms] mt-2'><button>Testimonials</button></li>
            </ul>
            <ul className='w-[180px]'>
                <li className='hover:text-primary duration-[300ms] '><button>01098843280</button></li>
                <li className='hover:text-primary duration-[300ms] mt-2'><button>medoo@gmail.com</button></li>
                <li className='hover:text-primary duration-[300ms] mt-2'><button>Koko@gmail.com</button></li>
                <li className='hover:text-primary duration-[300ms] mt-2'><button>contact@gmail.com</button></li>
            </ul>
            <ul className='w-[180px]'>
                <li className='hover:text-primary duration-[300ms] '><button>Terms & Conditions</button></li>
                <li className='hover:text-primary duration-[300ms] mt-2'><button>Privacy</button></li>
            </ul>
    </div>
  )
}

