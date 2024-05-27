import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { IoArrowForwardCircleSharp } from "react-icons/io5";

function Animated() {
    useGSAP(()=>{
        gsap.from(".head", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 1, 
            stagger: 1
        })
        gsap.from(".para", {
            opacity: 0,
            duration: 1,
            x: -100
        })
        gsap.from(".img", {
            opacity: 0,
            duration: 1,
            x: 100
        })
    })
  return (
    <div className='font-ubuntu-light relative p-8 w-full  flex flex-col lg:flex-row border-t-2 text-white border-zinc-600 bg-[#151D20]'>
    <p className='para mt-20'>Our team of seasoned designers and developers is dedicated to crafting bespoke websites and applications that not only look stunning but also deliver exceptional performance and user engagement. <IoArrowForwardCircleSharp fontSize={30} style={{ margin: '20px' }} /></p>
    
    <div className='lg:m-20 m-5 z-20'>
        <h1 className=' head text-4xl lg:text-9xl  font-bold mb-4'>Design.</h1>
        <h1 className=' head text-4xl lg:text-9xl  font-bold mb-4'>Development.</h1>
        <h1 className='head text-4xl lg:text-9xl  font-bold mb-4'>Knowledge.</h1>
        
    </div>
    <img 
        src='https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600' 
        className='img hidden lg:block absolute top-0 h-34 right-0 lg:opacity-50 z-10' 
        alt="Background"
    />
</div>
  )
}

export default Animated
