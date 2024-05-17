import React from 'react';
 import {IoIosArrowDropright} from 'react-icons/io';
const Home = () => {
  return (
    <div name="home" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen" >
      <div className = "max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
                I am a Full Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-med">
                Specializing in HTML, CSS, JavaScript, and frameworks like Bootstrap, Tailwind, and React.js, I bring designs to life with creativity and precision. Let's collaborate and turn ideas into reality. Reach out, and let's build something remarkable together!
            </p>
        </div> 
      </div>
    </div>
  )
}

export default Home
