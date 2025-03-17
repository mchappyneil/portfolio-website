// src/components/LifeSlideshow.js
"use client";
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const images = [
  '/images/life1.jpg',
  '/images/life2.jpg',
  '/images/life3.jpg',
  // add more image paths as needed
];

export default function LifeSlideshow() {
  const [current, setCurrent] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrent(prev => (prev + 1) % images.length);
          gsap.fromTo(imageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        },
      });
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex items-center justify-center relative">
      <img
        ref={imageRef}
        src={images[current]}
        alt="Life snippet"
        className="object-cover rounded-md max-h-96"
      />
    </div>
  );
}
