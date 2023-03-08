import React from "react";
import Image from "next/image";
import design from '../../../public/images/design.png'
import code from '../../../public/images/code.png'
import consulting from '../../../public/images/consulting.png'

export default function Navbar() {
    return(
       <div>
           <div className="py-10">
            <h3 className="text-3xl py-1 dark:text-white">Services I offer:</h3>
            <p className="text-md pt-5 leading-8 text-gray-800 dark:text-gray-200">I am well versed in Python and also have built multiple websites.I have worked as a website consultant for <span className="text-teal-500">Not The End Organization</span> and have worked as a Software intern for <span className="text-teal-500">Kaamik</span></p>
            <p className="text-md pt-5 leading-8 text-gray-800 dark:text-gray-200">I offer a large variety of services ranging from Digital Marketing, Content Creation and also building entire websites</p>
           </div>

           <div className="lg:flex gap-10">
               <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <div>
                    <Image src={design} width={100} height={100} alt="" className="mx-auto" />
                </div>
                <h3 className="text-lg pt-8 pb-2 font-medium">Beautiful Designs:</h3>
                <p>Creating elegant designs suited for you.</p>
                <h4 className="py-4 text-teal-600">Design Tools that I use:
                    <p className="text-gray-800
                     py-1">Photoshop</p>
                    <p className="text-gray-800
                     py-1">Illustrator</p>
                    <p className="text-gray-800
                     py-1">Figma</p>
                    <p className="text-gray-800
                     py-1">Canva</p>
                </h4>
               </div>
               <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <div>
                    <Image src={code} width={100} height={100} alt="" className="mx-auto" />
                </div>
                <h3 className="text-lg pt-8 pb-2 font-medium">Languages Used:</h3>
                <p>Using the most appropriate languages.</p>
                <h4 className="py-4 text-teal-600">Languagues that I use:
                    <p className="text-gray-800
                     py-1">MERN stack</p>
                    <p className="text-gray-800
                     py-1">Tailwind</p>
                    <p className="text-gray-800
                     py-1">NextJS</p>
                    <p className="text-gray-800
                     py-1">HTML, CSS, Bootstrap</p>
                </h4>
               </div>
               <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <div>
                    <Image src={consulting} width={100} height={100} alt="" className="mx-auto" />
                </div>
                <h3 className="text-lg pt-8 font-medium">Consultation Service:</h3>
                <p>Can help in providing Consultations too.</p>
                <h4 className="py-4 text-teal-600">Help that I can provide:<p className="text-gray-800
                     py-1">Consultations</p>
                    <p className="text-gray-800
                     py-1">Freelance</p>
                    <p className="text-gray-800
                     py-1">Part-Time</p>
               
                </h4>
               </div>
           </div>
       </div>
    );
}