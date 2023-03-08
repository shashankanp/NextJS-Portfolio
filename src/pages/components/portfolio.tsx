import React from "react";
import Image from "next/image";
import web1 from "../../../public/images/web1.png" 
import web2 from "../../../public/images/web2.png" 
import web3 from "../../../public/images/web3.png" 
import web4 from "../../../public/images/web4.png" 
import web5 from "../../../public/images/web5.png" 
import web6 from "../../../public/images/web6.png" 

export default function Portfolio(){
    return (
        <div>
            <div>
                <h3 className="text-3xl py-1 mt-16 dark:text-white">Portfolio:</h3>
                <p className="text-md pt-5 leading-8 text-gray-800 dark:text-gray-200 ">I am well versed in Python and also have built multiple websites.I have worked as a website consultant for <span className="text-teal-500">Not The End Organization</span> and have worked as a Software intern for <span className="text-teal-500">Kaamik</span></p>
                <p className="text-md pt-5 leading-8 text-gray-800 dark:text-gray-200">I offer a large variety of services ranging from Digital Marketing, Content Creation and also building entire websites</p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="basis-1/3 flex-1 "> <Image src={web1} alt="" className="rounded-lg object-cover h-full w-full"/> </div>
                <div className="basis-1/3 flex-1 "> <Image src={web2} alt="" className="rounded-lg object-cover h-full w-full"/> </div>
                <div className="basis-1/3 flex-1 "> <Image src={web3} alt="" className="rounded-lg object-cover h-full w-full"/> </div>
                <div className="basis-1/3 flex-1 "> <Image src={web4} alt="" className="rounded-lg object-cover h-full w-full"/> </div>
                <div className="basis-1/3 flex-1 "> <Image src={web5} alt="" className="rounded-lg object-cover h-full w-full"/> </div>
                <div className="basis-1/3 flex-1 "> <Image src={web6} alt="" className="rounded-lg object-cover h-full w-full"/> </div>
            </div>
        </div>
    )
}