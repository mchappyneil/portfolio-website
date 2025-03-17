// src/components/ProjectCarousel.js
"use client"; // Client-side component for GSAP animations and interactivity
import { useRef, useEffect } from "react";
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
  const carouselRef = useRef(null);

  useEffect(() => {
    // Slowly rotate the carousel container
    gsap.to(carouselRef.current, {
      rotate: 360,
      duration: 60,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div ref={carouselRef} className="relative overflow-hidden">
      <div className="flex justify-center space-x-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border rounded hover:shadow-lg transition-all cursor-pointer transform hover:scale-105"
            onClick={() => window.open(project.link, "_blank")}
            title={`${project.name}\n${project.startDate} - ${project.endDate}\n${project.description}\nTech: ${project.techStack}`}
          >
            <h3 className="font-bold">{project.name}</h3>
            <p className="text-xs">{project.startDate} - {project.endDate}</p>
            {/* Optionally show more details on hover using CSS tooltips or additional GSAP animations */}
          </div>
        ))}
      </div>
    </div>
  );
}
