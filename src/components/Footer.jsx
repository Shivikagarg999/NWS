import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-[#151D20] font-ubuntu-light h-[45vh] w-full text-white p-8 md:p-20 flex flex-col md:flex-row items-center md:items-start'>
      <div className='content flex flex-col md:flex-row gap-6 w-full md:w-[60%]'>
        <div className='left w-full md:w-[50%] text-xl md:text-2xl mb-6 md:mb-0'>
          <h2 className='font-bold text-[#DEF580] m-3'>GET IN TOUCH</h2>
          <div className='flex gap-5'>
            <FaLinkedinIn />
            <FaWhatsapp />
            <FaDiscord />
            <FaFacebookSquare />
          </div>
        </div>
        <div className='right w-full md:w-[50%]'>
          <ul className='font-mono underline'>
            <li><a href='#' className='hover:text-gray-400'>Home</a></li>
            <li><a href='#' className='hover:text-gray-400'>About</a></li>
            <li><a href='#' className='hover:text-gray-400'>Services</a></li>
            <li><a href='#' className='hover:text-gray-400'>Contact</a></li>
          </ul>
        </div>
      </div>
      <h1 className='font-bold text-xl md:text-2xl italic uppercase text-center md:text-left mt-6 md:mt-0 border-b-2 border-gray-500'>
        This is the part where you get in touch and we make amazing things happen
      </h1>
    </div>
  );
}

export default Footer;
