import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import {BsPersonCheck} from "react-icons/bs";

function SocialLink() {

    const links=[

        {
            id:"1",
            child:(
                <>
                LinkedIn <FaLinkedin size={25}/> 
                 </>
            ),
            href:"https://www.linkedin.com/in/saanya-lall-b7b0b5248/"
        },

        {
            id:"2",
            child:(
                <>
                Github <FaGithub size={25}/> 
                 </>
            ),
            href:"https://github.com/saanyalall?tab=repositories"
        },

        {
            id:"3",
            child:(
                <>
                Resume <BsPersonCheck size={25}/> 
                 </>
            ),
            href:"/Saanya's Resume.pdf",
            download:true
        },


    ]

  return (

    <div className='flex flex-col top-[35%] left-0 fixed'>

        <ul>
        
        {links.map(({id,child,href,download}) => (
            <li 
            key={id} 
            className='flex w-40 h-10 justify-between items-center px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'> 
            
            <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='blank' rel='noreferrer'>
            {child}
            </a>
            </li>
        ))}


        </ul>
    </div>
  )
}

export default SocialLink