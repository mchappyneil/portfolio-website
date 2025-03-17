// src/components/ProjectCarousel.js
"use client"; // Client-side component for GSAP animations and interactivity
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const projects = [
  {
    name: "Dungeons and Delerium",
    startDate: "Mar 2025",
    endDate: "Present",
    description: "A (work in progress) Dungeons & Dragons-inspired text adventure featuring an absurd, chaotic AI-powered Dungeon Master.",
    techStack: "Python, FastAPI, React, Vite, Uvicorn",
    link: "https://github.com/mchappyneil/dungeons-and-delirium",
  },
  {
    name: "GouGAN",
    startDate: "Nov 2024",
    endDate: "Dec 2024",
    description: "A generative AI model capable of converting real-world photographs into paintings. " + 
    "Developed as part of the CSC413 Neural Networks and Deep Learning course at the University of Toronto.",
    techStack: "Python, Jupyter, Pytorch, Scikit-learn, Bash",
    link: "https://github.com/mchappyneil/CSC413-GouGAN",
  },
  {
    name: "Actimon",
    startDate: "Sep 2024",
    endDate: "Dec 2024",
    description: "A prototype gamified fitness app for university students. " + 
    "Developed as part of CSC318: The Design of Interactive Computational Media at the University of Toronto.",
    techStack: "Figma, Adobe Illustrator, Google Workspace",
    link: "https://github.com/mchappyneil/CSC318-Actimon",
  },
  {
    name: "Neural Network-Based City Classifier",
    startDate: "Mar 2024",
    endDate: "Apr 2024",
    description: "An AI model that guesses one of four cities based on UofT student survey answers (Rio de Janeiro, Dubai, New York City, or Paris).",
    techStack: "Python, PyTorch, Scikit-learn",
    link: "https://github.com/mchappyneil/csc311-final-project/blob/main/csc311challenge.pdf",
  },
  // Add more projects as needed
];

export default function ProjectCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);
    const cardRef = useRef(null);
  
    // Auto-slide every 4 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
  
      return () => clearInterval(interval);
    }, []);
  
    // Animate slide transition when currentIndex changes
    useEffect(() => {
      if (!slidesRef.current) return;
  
      const slideWidth = 600; // card width
      const newX = -currentIndex * slideWidth;
  
      gsap.to(slidesRef.current, {
        x: newX,
        duration: 0.8,
        ease: "power2.out",
      });
    }, [currentIndex]);
  
    // Tilt effect on hover
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
  
      const rect = cardRef.current.getBoundingClientRect();
      const cardWidth = rect.width;
      const cardHeight = rect.height;
      const centerX = rect.left + cardWidth / 2;
      const centerY = rect.top + cardHeight / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
  
      // Scale factor for how much tilt you want
      const rotateMax = 10; // degrees
  
      const rotateY = (mouseX / cardWidth) * rotateMax;
      const rotateX = -(mouseY / cardHeight) * rotateMax;
  
      gsap.to(cardRef.current, {
        rotateY,
        rotateX,
        duration: 0.3,
        ease: "power2.out",
      });
    };
  
    const handleMouseLeave = () => {
      // Reset tilt
      gsap.to(cardRef.current, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };
  
    return (
      <div className="relative w-full flex flex-col items-center">
        {/* Carousel Wrapper */}
        <div
          className="overflow-hidden border dark:border-gray-700 rounded"
          style={{ width: "600px", height: "350px" }}
        >
          {/* Slides Container */}
          <div
            ref={slidesRef}
            className="flex"
            style={{ width: `${projects.length * 600}px` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-[600px] h-[350px] flex items-center justify-center p-4"
              >
                {/* Card */}
                <div
                  ref={index === currentIndex ? cardRef : null}
                  className="relative w-full h-full bg-white dark:bg-gray-800 text-black dark:text-gray-100 
                             rounded-lg shadow-lg cursor-pointer transform transition-transform 
                             hover:scale-105"
                  onMouseMove={index === currentIndex ? handleMouseMove : null}
                  onMouseLeave={index === currentIndex ? handleMouseLeave : null}
                  onClick={() => window.open(project.link, "_blank")}
                >
                  {/* Project Title */}
                  <h3 className="text-xl font-bold absolute top-4 left-4">
                    {project.name}
                  </h3>
                  <p className="text-xs absolute top-4 right-4">
                    {project.startDate} - {project.endDate}
                  </p>
  
                  {/* Reveal on hover (description & tech) */}
                  <div
                    className="absolute bottom-4 left-4 right-4 opacity-0 hover:opacity-100 
                               transition-opacity duration-300 bg-white/80 dark:bg-black/40 
                               rounded p-2"
                  >
                    <p className="text-sm">{project.description}</p>
                    <p className="text-xs italic mt-1">{project.techStack}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }