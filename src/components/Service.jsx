import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GrServices } from "react-icons/gr";
import ServiceMar from './ServiceMar'
import LP from './LP'

function Service() {
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
    <div className='w-full text-white font-ubuntu-light'>
      <div className='relative bg-[#151D20] flex flex-col overflow-hidden lg:flex-row items-center justify-center lg:justify-between py-12 lg:py-20 px-4 lg:px-24 space-y-8 lg:space-y-0'>
        <div className='text-center lg:text-left'>
          <h1 className='headi1 font-bold text-6xl lg:text-9xl'>Services</h1>
          <h1 className='headi font-bold text-6xl lg:text-9xl'>we offer</h1>
          <div className='flex justify-center lg:justify-start'>
            <GrServices size={30} color='white' className='hover:text-gray-500 transition-colors duration-200' />
          </div>
        </div>
        <img
          src='https://i.pinimg.com/564x/11/eb/c1/11ebc17d29ee2f78d16142a0b3f59ea8.jpg'
          className='img lg:block absolute top-0 h-34 right-0 opacity-50 z-10'
          alt="Background"
        />
      </div>
      <ServiceMar />
      <div className='h-auto p-12 bg-zinc-800 flex flex-col lg:flex-row justify-center lg:justify-evenly items-center'>
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <h2 className='text-gray-400 font-semibold'>What we can do</h2>
          <h1 className='text-white font-bold text-4xl lg:text-6xl'>Services We can</h1>
          <h1 className='text-white font-bold text-4xl lg:text-6xl'>help you with</h1>
          <div className='w-24 h-24 lg:w-[15vw] lg:h-[15vw] mt-6 rounded-full bg-black'></div>
          <div className='w-32 h-32 lg:w-[20vw] lg:h-[20vw] mt-6 mr-16 rounded-full bg-black'></div>
        </div>
        <div className='w-full lg:w-1/2 mt-8 lg:mt-0'>
          <img src='https://i.pinimg.com/236x/55/7a/17/557a1765036e1f5409dcbf78b855b44d.jpg' className='h-48 lg:h-64 mb-4 lg:mb-0'/>
          <img src='https://i.pinimg.com/236x/03/53/46/035346a563872cd1e8c6ba4a49d0cf57.jpg' className='h-48 lg:h-64 ml-4 lg:absolute lg:right-0'/>
          <img src='https://i.pinimg.com/236x/fd/54/40/fd54409b11274973f1a513304bf4a7dc.jpg' className='h-48 lg:h-64 ml-8 lg:ml-0'/>
        </div>
      </div>
      <LP/>
    </div>
  );
}

export default Service;
