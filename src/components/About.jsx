import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Marquee from './Marquee';
import { FaArrowDown } from "react-icons/fa6";

function About() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".headi1", {
      x: -200,
      duration: 0.6,
      scale: 0.6,
      opacity: 0,
      stagger: 1
    })
      .from(".headi", {
        x: 200,
        duration: 0.6,
        scale: 0.6,
        opacity: 0,
        stagger: 1
      });
    gsap.from(".img", {
      opacity: 0,
      duration: 1,
      x: 100
    });
  });

  return (
    <div className='h-auto relative p-9 bg-[#151D20] text-white font-ubuntu-light'>
      <div className='bg-[#151D20] pt-20 h-[80vh] flex flex-col lg:flex-row items-center justify-center space-x-4'>
        <h1 className='headi1 font-bold text-8xl z-20 border-b-2 border-gray-600 lg:border-none lg:mr-4'>About</h1>
        <h1 className='headi font-bold text-8xl z-20 border-b-2 border-gray-600 lg:border-none lg:ml-4'>Us</h1>
      </div>
      <div className='flex justify-center'>
        <FaArrowDown size={30} color='white' className='hover:text-gray-500 transition-colors duration-200' />
      </div>
      <img
        src='https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600'
        className='img hidden lg:block absolute top-0 h-34 right-0 lg:opacity-50 z-10'
        alt="Background"
      />
      <Marquee/>
      <div className='lg:h-[90vh] w-full flex flex-col lg:flex-row gap-4'>
        <div className='left lg:w-[50%]'>
          <img src='https://i.pinimg.com/564x/d3/53/2d/d3532d53c1e7c86ab91c3618182b5d18.jpg' className='h-full w-full' alt="About Us" />
        </div>
        <div className='right lg:w-[50%] p-16 flex flex-col justify-center'> {/* Centering the content vertically */}
          <h2 className='text-gray-400 font-semibold text-2xl'>About Us</h2>
          <h1 className='font-bold text-4xl lg:text-4xl'>WE ALWAYS MAKE THE BEST</h1>
          <p className='mt-2'>
            Our dedicated team of developers and designers harness the latest technologies to create websites and applications. We understand the unique challenges faced by businesses today, and we tailor our services to provide scalable, secure, and seamless digital experiences. Whether you're looking to launch a new website or revamp an existing one, <span className='italic text-gray-400 font-semibold'>NectarWeb Solutions</span> is your trusted partner in navigating the digital landscape and achieving online excellence.
          </p>
          <a href='/' className='bg-white  text-black font-semibold px-4 py-2 rounded-md mt-5 self-center'>Home</a> {/* Centering the button horizontally */}
        </div>
        
      </div>
      <div className='bg-zinc-900 mt-5 rounded-md w-full p-4 flex flex-col items-center justify-center'>
            <h1 className='m-8 font-ubuntu-light font-bold text-4xl'>Let's work together</h1>
            <a href='/contact' className='bg-white  text-black font-semibold px-4 py-2 rounded-md mt-5 self-center'>Contact Us</a> 
        </div>
    </div>
  )
}

export default About;
