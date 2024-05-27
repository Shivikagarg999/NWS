import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  return (
    <div data-scroll data-scroll-speed='.4' className='w-full py-10 text-white  bg-[#151D20]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden'>
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-[17vw] font-["PP_mori"] font-semibold leading-none uppercase mb-20 pt-10'>
          SERVICES WE OFFER
        </motion.h1>
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10, delay: 0.5 }}
          className='text-[17vw] font-["PP_mori"] font-semibold leading-none uppercase mb-20 pt-10'>
          SERVICES WE OFFER
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee;
