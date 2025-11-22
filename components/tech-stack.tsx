"use client"

import { useState } from "react"

const technologies = [
  { name: "Java", category: "Language" },
  { name: "Spring Boot", category: "Framework" },
  { name: "REST APIs", category: "Architecture" },
  { name: "MySQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "Version Control" },
  { name: "JWT", category: "Security" },
  { name: "OAuth 2.0", category: "Authentication" },
  { name: "Microservices", category: "Architecture" },
  { name: "JUnit", category: "Testing" },
  { name: "Maven", category: "Build Tool" },
]

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 md:px-8 border-b border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="font-mono text-primary text-sm">$ ./tech-stack.sh</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-accent">Tech Arsenal</h3>
          <p className="text-foreground text-lg">Core technologies in my development arsenal</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative animate-float-in cursor-pointer transition-transform duration-700 ease-in-out ${
                hoveredIndex === index ? "scale-110" : ""
              }`}
              style={{
                animationDelay: `${index * 30}ms`,
              }}
            >
              <div
                className={`p-4 rounded terminal-border text-center ${
                  hoveredIndex === index ? "animate-glow-cyan bg-primary/5" : "bg-card/30 hover:bg-secondary/60"
                }`}
              >
                <p className={`font-mono text-sm font-semibold transition-colors duration-700 ease-in-out ${
                  hoveredIndex === index ? "text-accent" : "text-primary"
                }`}>
                  {tech.name}
                </p>
                <p className="text-muted text-xs mt-1">{tech.category}</p>
              </div>

              {hoveredIndex === index && (
                <div className="absolute inset-0 rounded bg-gradient-to-r from-primary/20 to-transparent pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
