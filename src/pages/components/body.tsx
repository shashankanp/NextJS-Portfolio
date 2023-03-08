import React from 'react'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
import Image from 'next/image'
import deved from '../../../public/images/dev-ed-wave.png'

export default function Body(){
    return(
        <div>
            <div className='text-center p-10 '>
                <h2 className='text-4xl py-2 text-teal-600 font-medium md:text-6xl'>NP SHASHANKA RAO</h2>
                <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Fullstack Developer</h3>
                <p className='text-md pt-3 leading-8 text-gray-800 max-w-xl mx-auto dark:text-gray-200'>An avid and aspiring fullstack developer using the MERN stack.Currently using NextJS,Tailwind and Postgres :) </p>
            </div>
          
            <div className='flex justify-center gap-6 text-5xl text-gray-600 dark:text-gray-100'> 
                <AiFillLinkedin/>
                <AiFillYoutube/>
                <AiFillTwitterCircle/>
            </div>

            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:w-96 md:h-96'>
                <Image src={deved} alt="" className='' fill  style={{objectFit:"cover"}}  />
            </div>
        </div>
    )

}