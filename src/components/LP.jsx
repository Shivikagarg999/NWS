import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function LP() {
  const cardsData = [
    {
      title: 'Speed Optimization',
      description: 'We optimize your website for lightning-fast performance, ensuring quick loading times and better user experience.'
    },
    {
      "title": "Web Development",
      "description": "Leverage modern web development technologies to create scalable, secure, and reliable web applications and services."
  },
    {
      title: 'Web Designing',
      description: 'Our expert designers create stunning and user-friendly websites tailored to your brand and target audience.'
    },
    {
      title: 'Online Marketing',
      description: 'Reach your audience effectively through strategic online marketing campaigns, driving traffic and boosting conversions.'
    }
  ];

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const tl = gsap.timeline({ paused: true });
      tl.to(card, { y: -10, duration: 0.3 });

      card.addEventListener('mouseenter', () => tl.play());
      card.addEventListener('mouseleave', () => tl.reverse());

      return () => {
        card.removeEventListener('mouseenter', () => tl.play());
        card.removeEventListener('mouseleave', () => tl.reverse());
      };
    });
  }, []);

  return (
    <div className="bg-black  py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardsData.map((card, index) => (
            <div key={index} className="bg-[#151D20] p-6 rounded-lg text-white card">
              <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LP;
