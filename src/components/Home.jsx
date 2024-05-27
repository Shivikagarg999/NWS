import React from 'react';
import { useInView } from 'react-intersection-observer';
import { RiServiceLine, RiCodeSSlashLine, RiBrushLine } from "react-icons/ri";
import '../Home.css';
import Animated from './Animated';
import Marquee from './Marquee';

function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  return (
    <main className='font-ubuntu-light'>
      <Animated/>
      <Marquee/>
      <div className='relative min-h-screen w-full bg-[#151D20] p-4'>
        
      
        <h1 ref={ref} className={`font-bold text-white text-[11vw] heading ${inView ? 'animate' : ''}`}>
          Transform Your Business
        </h1>
       <div className='flex items-center justify-center'>
       <a href='/service' className='bg-white  text-black font-semibold px-4 py-2 rounded-md mt-5 self-center'>Services</a> {/* Centering the button horizontally */}
      
       </div>
        <div className='w-full p-12 flex flex-col md:flex-row justify-between items-center'>
          <div className='text-white font-semibold text-2xl flex gap-8 mb-8 md:mb-0 md:mr-8'>
            <h3 className='border border-zinc-100 rounded-md p-2 cursor-pointer hover:text-zinc-100 hover:bg-black transition-colors duration-300'>
              Full Stack development
            </h3>
            <h3 className='border border-zinc-100 rounded-md p-2 cursor-pointer'>
              Web Designing
            </h3>
          </div>
          <img
            src='https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='h-28 rounded-md transform transition-transform duration-300 hover:scale-105'
            alt='Designing'
          />
        </div>
      </div>
      

      <div className='relative h-screen w-full bg-[#DEF580] p-8 flex justify-center items-center'>
  <div className='relative h-full w-full max-h-[95%] max-w-[95%] bg-[#0C4834] flex justify-center items-center'>
    <div className='relative h-full w-full max-h-[85%] max-w-[85%] bg-[#DEF580] rounded-md p-8'>
      <h1 className='font-bold text-4xl text-[#0C4834] mb-8'>Transforming Your Business Dreams</h1>
      <h1 className='font-bold text-2xl text-[#0C4834] mb-8'>into Reality with</h1>
      <h1 className='font-bold text-4xl text-[#0C4834] mb-8'>Expert Web Development and Design</h1>
      
      <div className='absolute left-0 bottom-0 h-[40%] w-full bg-[#0f3a2b] flex flex-col md:flex-row'>
        <section className='w-full md:w-[50%] p-4 text-white text-xl flex items-center border-zinc-700 border-b-2 md:border-b-0 md:border-r-2'>
          <RiServiceLine className='text-5xl mr-4' />
          <h2>Our Services</h2>
        </section>
        <div className='w-full md:w-[50%] p-8 text-white'>
          <div className='flex items-center mb-4'>
            <RiCodeSSlashLine className='text-3xl mr-4' />
            <p>Full Stack Development</p>
          </div>
          <div className='flex items-center mb-4'>
            <RiBrushLine className='text-3xl mr-4' />
            <p>Web Designing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
      

    </main>
  );
}

export default Home;
