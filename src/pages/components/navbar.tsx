import React from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs'


export default function Navbar(props:any) {
    return(
       <div className="py-10 flex justify-between">
       <h1 className="text-xl font-burtons pt-2 dark:text-white">Developed by Shashank</h1>
       <ul className="flex items-center">
        <li className="cursor-pointer text-2xl dark:text-white"><BsFillMoonStarsFill 
        onClick={()=>{props.handleCLick(!props.dark)
        console.log(!props.dark)}}/>
        </li>
        <li className="first-letter:capitalize bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md ml-8 px-4 py-2 "><a href=""> resume</a></li>
       </ul>
       </div>
    );
}