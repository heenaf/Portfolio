import React from 'react';
 import {IoIosArrowDropright} from 'react-icons/io';
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-black text-white" >
      <div className = "max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
                I am a Full Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-med">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquam distinctio veniam fuga, eius optio voluptates incidunt natus veritatis culpa aliquid odit,
                 nemo quaerat quod tenetur alias facilis doloremque nobis magni.
            </p>
            {/* <div>
                <button className="text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-white hover:bg-gray-200 border-black">
                    Portfolio
                    <span>
                         <IoIosArrowDropright/> 
                    </span>
                </button>
            </div> */}
        </div> 
      </div>
    </div>
  )
}

export default Home
