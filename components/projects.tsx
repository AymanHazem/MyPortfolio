"use client"

import { useState } from "react"
import { Github } from "lucide-react"

const projects = [
  {
    title: "My-Store-API",
    status: "RUNNING",
    statusColor: "#0aff00", // Terminal Green
    description: "Secure E-commerce REST API with JWT & Stripe integration.",
    stack: ["Java", "Spring Boot 3", "MySQL"],
    links: {
      github: "https://github.com/AymanHazem",
    },
  },
  {
    title: "Honor Schools",
    status: "ACTIVE",
    statusColor: "#00f3ff", // Neon Cyan
    description: "Full-stack school management platform with role-based access control.",
    stack: ["Spring MVC", "Thymeleaf", "PostgreSQL"],
    links: {
      github: "https://github.com/AymanHazem/Honor-Shcools-Project",
    },
  },
  {
    title: "Task-Tracker",
    status: "DEPLOYED",
    statusColor: "#0aff00", // Terminal Green
    description: "Task organization API with layered architecture and PostgreSQL backend.",
    stack: ["REST API", "PostgreSQL", "Clean Architecture"],
    links: {
      github: "https://github.com/AymanHazem/Task-Tracker",
    },
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 px-4 md:px-8 border-b border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="font-mono text-primary text-sm">$ ps aux | grep projects</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-accent">Projects</h3>
          <p className="text-foreground text-lg">Production-grade backend systems</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-slide-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative cursor-pointer transition-transform duration-700 ease-in-out ${
                  hoveredIndex === index ? "scale-105" : ""
                }`}
              >
              <div className={`terminal-border terminal-glow rounded-lg p-6 md:p-8 bg-card/30 ${
                hoveredIndex === index ? "bg-card/50" : ""
              }`}>
              {/* Status Indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: project.statusColor }}
                  ></div>
                  <span className="font-mono text-xs text-primary">{project.status}</span>
                </div>
              </div>

              {/* Project Title */}
              <h3 className={`text-2xl font-bold mb-3 transition-colors duration-700 ease-in-out font-mono ${
                hoveredIndex === index ? "text-primary" : "text-card-foreground"
              }`}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-foreground mb-6 leading-relaxed text-sm">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-primary/20">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-primary/5 border border-primary/30 text-primary rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2 pt-2">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredButton(`repo-${index}`)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`flex items-center gap-2 text-primary transition-all duration-700 ease-in-out cursor-pointer group/link font-mono text-sm flex-1 justify-center py-2 border border-primary/30 rounded ${
                    hoveredButton === `repo-${index}` ? "scale-105 text-accent bg-primary/5" : ""
                  }`}
                >
                  <Github size={16} />
                  <span>Repository</span>
                </a>
              </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
