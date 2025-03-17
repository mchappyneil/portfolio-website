// src/app/about/page.js
import LifeSlideshow from "@/components/Slideshow";
import Timeline from "../../components/Timeline";

export default function AboutPage() {
  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        I am a passionate software engineer with experience in building scalable, robust software solutions.
        My field of interest is in Machine Learning and AI.
      </p>
      <p className="mb-4">
        In my free time, I pursue photography, watch soccer and Formula 1, read, and snowboard.
      </p>
      <Timeline />
      {/* You can add another image here if needed */}
      <LifeSlideshow />
    </section>
  );
}
