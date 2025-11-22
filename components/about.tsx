"use client"

import { useState } from "react"

export default function About() {
  const [showJson, setShowJson] = useState(true)
  const [isCodeBlockHovered, setIsCodeBlockHovered] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const aboutData = {
    name: "Ayman Hazem",
    role: "Back-End Engineer",
    location: "Al-Sharqia, Egypt",
    degree: "B.Sc. Computer Science",
    expertise: ["Scalability", "Security", "Clean Architecture"],
    specialization: "Java & Spring Boot",
    focus_areas: ["REST APIs", "Microservices", "Database Optimization", "Authentication & Security"],
  }

  return (
    <section className="py-20 px-4 md:px-8 border-b border-primary/20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 space-y-4">
          <h2 className="font-mono text-primary text-sm">$ cat about.json</h2>
          <div className="flex gap-4 items-center">
            <h3 className="text-4xl md:text-5xl font-bold text-accent">About Me</h3>
            <button
              onClick={() => setShowJson(!showJson)}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className={`text-primary font-mono text-xs border border-primary/30 px-3 py-1 rounded transition-all duration-700 ease-in-out cursor-pointer ${
                isButtonHovered ? "scale-110 text-accent" : ""
              }`}
            >
              {showJson ? "[ View Text ]" : "[ View JSON ]"}
            </button>
          </div>
        </div>

        {showJson ? (
          // JSON View
          <div
            onMouseEnter={() => setIsCodeBlockHovered(true)}
            onMouseLeave={() => setIsCodeBlockHovered(false)}
            className={`code-block overflow-x-auto transition-transform duration-700 ease-in-out cursor-pointer ${
              isCodeBlockHovered ? "scale-[1.02]" : ""
            }`}
          >
            <pre className="text-sm leading-relaxed">
              <span className="text-accent">{"{"}</span>
              {"\n  "}
              <span className="text-primary">"name"</span>
              <span className="text-foreground">: </span>
              <span className="text-green-500">"{aboutData.name}"</span>
              <span className="text-foreground">,</span>
              {"\n  "}
              <span className="text-primary">"role"</span>
              <span className="text-foreground">: </span>
              <span className="text-green-500">"{aboutData.role}"</span>
              <span className="text-foreground">,</span>
              {"\n  "}
              <span className="text-primary">"location"</span>
              <span className="text-foreground">: </span>
              <span className="text-green-500">"{aboutData.location}"</span>
              <span className="text-foreground">,</span>
              {"\n  "}
              <span className="text-primary">"degree"</span>
              <span className="text-foreground">: </span>
              <span className="text-green-500">"{aboutData.degree}"</span>
              <span className="text-foreground">,</span>
              {"\n  "}
              <span className="text-primary">"specialization"</span>
              <span className="text-foreground">: </span>
              <span className="text-green-500">"{aboutData.specialization}"</span>
              <span className="text-foreground">,</span>
              {"\n  "}
              <span className="text-primary">"expertise"</span>
              <span className="text-foreground">: [</span>
              {"\n    "}
              {aboutData.expertise.map((exp, idx) => (
                <span key={exp}>
                  <span className="text-green-500">"{exp}"</span>
                  {idx < aboutData.expertise.length - 1 && <span className="text-foreground">,</span>}
                  {"\n    "}
                </span>
              ))}
              <span className="text-foreground">]</span>
              {"\n" + "}\n"}
            </pre>
          </div>
        ) : (
          // Text View
          <div
            onMouseEnter={() => setIsCodeBlockHovered(true)}
            onMouseLeave={() => setIsCodeBlockHovered(false)}
            className={`code-block space-y-6 transition-transform duration-700 ease-in-out cursor-pointer ${
              isCodeBlockHovered ? "scale-[1.02]" : ""
            }`}
          >
            <p className="text-foreground leading-relaxed">
              I am a Computer Science graduate from Zagazig National University with a passion for building robust,
              scalable backend systems. I specialize in Java and Spring Boot, designing secure REST APIs and
              microservices that handle complex business logic with precision.
            </p>

            <p className="text-foreground leading-relaxed">
              Every line of code I write follows SOLID principles and Clean Architecture best practices. From JWT
              authentication to database optimization and microservices orchestration, I architect solutions that scale
              with business needs.
            </p>

            <div className="pt-6 border-t border-primary/20">
              <p className="text-primary font-mono text-sm mb-4">
                <span className="text-accent">// Core Competencies</span>
              </p>
              <ul className="space-y-2 text-foreground text-sm">
                {aboutData.focus_areas.map((area) => (
                  <li key={area} className="flex gap-2">
                    <span className="text-primary">&gt;</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
