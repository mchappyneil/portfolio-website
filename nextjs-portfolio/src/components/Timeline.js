// src/components/Timeline.js
export default function Timeline() {
    const experiences = [
      {
        role: "Instructor",
        company: "Code Ninjas",
        duration: "2020 - 2022",
        description: "Mentored young minds on programming games in JavaScript.",
      },
      {
        role: "Backend Developer",
        company: "KOHO",
        duration: "2022 - 2023",
        description: "Built and maintained scalable backend services.",
      },
      {
        role: "Application Developer",
        company: "FCT Insurance",
        duration: "2025 - Present",
        description: "Developing robust applications for insurance solutions.",
      },
    ];
  
    return (
      <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{exp.role} @ {exp.company}</h3>
            <span className="text-sm text-gray-500">{exp.duration}</span>
            <p className="text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    );
  }
  