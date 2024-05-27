import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_idzod57', 'template_pnl4e7d', form.current, '5DnwLKi_mZlCP0o9E')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again');
      });
  };

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
    <div className='w-full font-ubuntu-light text-white'>
      <div className='relative bg-[#151D20] pt-20 min-h-[80vh] flex flex-col lg:flex-row items-center justify-center'>
        <h1 className='headi1 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl z-20 border-b-2 border-gray-600 lg:border-none lg:mr-4'>Contact</h1>
        <h1 className='headi font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl z-20 border-b-2 border-gray-600 lg:border-none lg:ml-4'>Us</h1>
      </div>
      <img
        src='https://i.pinimg.com/236x/12/72/54/127254e3e6c687cac93e157759551fc0.jpg'
        className='img hidden lg:block absolute top-0 h-34 right-0 lg:opacity-50 z-10'
        alt="Background"
      />
      {/* contact part */}
      <div className='min-h-screen w-full lg:flex gap-5 p-8 text-black bg-zinc-300'>
  <div className='w-[50%]'>
    <h2 className='font-semibold text-2xl m-10'>Contact Us</h2>
    <h1 className='font-bold text-4xl lg:text-9xl'>Let's work together</h1>
  </div>
  <div className='w-[50%] p-8'>
    <form ref={form} onSubmit={sendEmail} className='flex flex-col items-start gap-3 justify-start'>
      <label className='font-semibold'>First name</label>
      <input type='text' name='from_name' required className='bg-transparent block outline-none border-b-2 border-gray-600' />
      <label className='font-semibold'>Last name</label>
      <input type='text' name='last_name' required className='bg-transparent block outline-none border-b-2 border-gray-600' />
      <label className='font-semibold'>Email</label>
      <input type='email' name='from_email' required className='bg-transparent block outline-none border-b-2 border-gray-600' />
      <label className='font-semibold'>Message</label>
      <textarea name='message' required className='bg-transparent block outline-none border-2 h-28 border-gray-600'></textarea>
      <button type='submit' className='bg-blue-600 px-6 py-2 rounded-md m-6 text-white font-extrabold'>Submit</button>
    </form>
  </div>
</div>
<div className='min-h-screen w-full lg:flex gap-5 p-8 text-black bg-zinc-300'>
        <div className='w-[50%]'>
          <h2 className='font-semibold text-2xl m-10 '>Contact Us</h2>
          <h1 className='font-bold text-4xl lg:text-9xl'>Let's work together</h1>
        </div>
        <div className='w-[50%] p-8 '>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col items-start gap-3 justify-start'>
            <label className='font-semibold'>First name</label>
            <input type='text' name='from_name' required className='bg-transparent block m-4 outline-none border-b-2 border-gray-600' />
            <label className='font-semibold'>Last name</label>
            <input type='text' name='last_name' required className='bg-transparent block m-4 outline-none border-b-2 border-gray-600' />
            <label className='font-semibold'>Email</label>
            <input type='email' name='from_email' required className='bg-transparent block m-4 outline-none border-b-2 border-gray-600' />
            <label className='font-semibold'>Message</label>
            <textarea name='message' required className='bg-transparent block m-4 outline-none border-2 h-28 border-gray-600'></textarea>
            <button type='submit' className='bg-blue-600 px-6 py-2 rounded-md text-white font-extrabold'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
