import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {H1OutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: <FaLinkedin size={30} />,
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        }
        {
            id: 1,
            child: <FaGithub size={30} />,
            href: 'https://github.com',
            
        }
        {
            id: 1,
            child: <H1OutlineMail size={30} />,
            href: 'https://linkedin.com',
            
        }
        {
            id: 1,
            child: <BsFillPersonLinesFill size={30} />,
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        }
    ];
    
  return (
    <div className=" flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-700 ml-[-100px] hover:ml-[10px] hover:rounded-md duration-300">
            <a className="flex justify-between items-center w-full text-white" href="">
                <>LinkedIn <FaLinkedin size={30}/>
        </>
        </a></li>
      </ul>
    </div>
  )
}

export default SocialLinks
