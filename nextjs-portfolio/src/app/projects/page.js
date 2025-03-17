// src/app/projects/page.js
import ProjectCarousel from "../../components/ProjectCarousel";

export default function ProjectsPage() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ProjectCarousel />
    </section>
  );
}
