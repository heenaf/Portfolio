import React from 'react';
import aaga from '../assestss/aaga-removebg-preview.png';
import amazon from '../assestss/amazon-removebg-preview.png';
import bike from '../assestss/brs-removebg-preview.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: aaga,
    },
    {
      id: 2,
      src: amazon,
    },
    {
      id: 3,
      src: bike,
    },
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6">Below, you'll find a selection of projects I've personally developed and contributed to.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 " />
              <p className="text-xl mt-4 mb-2 pl-4 pr-4">
              Our Java-based Bike Rental System simplifies bike rentals for users and management for rental shops. Users easily browse bikes, make reservations, and manage rentals. Owners efficiently manage inventory, track transactions, and generate reports. This system ensures a seamless rental experience and streamlined operations for rental businesses. </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
