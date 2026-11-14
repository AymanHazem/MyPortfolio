"use client"

interface TechItem {
  name: string
  category: string
  detail: string
  icon: string
}

const technologies: TechItem[] = [
  {
    name: "Java 25",
    category: "Language & Runtime",
    detail: "Project Loom Virtual Threads & Modern JDK",
    icon: "/icons/java.svg",
  },
  {
    name: "Spring Boot 4",
    category: "Backend Framework",
    detail: "REST APIs, Spring MVC, Security & Actuator",
    icon: "/icons/spring.svg",
  },
  {
    name: "Redis",
    category: "In-Memory Cache",
    detail: "Sub-ms Redirect Resolution & TTL Caching",
    icon: "/icons/redis.svg",
  },
  {
    name: "MongoDB",
    category: "Document Database",
    detail: "High-Throughput NoSQL Persistence",
    icon: "/icons/mongodb.svg",
  },
  {
    name: "PostgreSQL",
    category: "Relational Database",
    detail: "ACID Transactions & Indexed Schemas",
    icon: "/icons/postgres.svg",
  },
  {
    name: "MySQL",
    category: "Relational Database",
    detail: "Relational E-Commerce Data Modeling",
    icon: "/icons/mysql.svg",
  },
  {
    name: "GraalVM & Picocli",
    category: "Native CLI Tooling",
    detail: "Zero-JVM Native Binaries & Terminal Wizards",
    icon: "/icons/java.svg",
  },
  {
    name: "FFmpeg & WebVTT",
    category: "Media Pipeline",
    detail: "Native C Tile Sprites & Spatial Scrubbing",
    icon: "/icons/ffmpeg-icon.svg",
  },
  {
    name: "Docker & Compose",
    category: "Containerization",
    detail: "Multi-Stage JRE 25 Images & Service Stacks",
    icon: "/icons/docker.svg",
  },
  {
    name: "JWT & OAuth 2.0",
    category: "Security & Auth",
    detail: "Stateless Token Guards & RBAC Filters",
    icon: "/icons/jwt-icon.svg",
  },
  {
    name: "JUnit 5 & Mockito",
    category: "Testing & QA",
    detail: "MockMvc & Integration Test Suites",
    icon: "/icons/junit5.svg",
  },
  {
    name: "Maven & Git",
    category: "Build & Versioning",
    detail: "Multi-Profile Builds & Release Workflows",
    icon: "/icons/file-maven.svg",
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-4 md:px-8 border-b border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 space-y-3">
          <p className="font-mono text-primary text-sm">$ ./tech-stack.sh --list</p>
          <h2 className="text-4xl md:text-5xl font-bold text-accent tracking-tight">
            Tech Arsenal
          </h2>
          <p className="text-foreground/90 text-base md:text-lg max-w-2xl">
            Core runtimes, data stores, and infrastructure powering my backend systems and native developer tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-start gap-3.5 rounded-xl bg-[#0b1020]/90 border border-primary/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/50 hover:bg-[#0e152a]"
            >
              <div className="w-10 h-10 rounded-lg bg-white/95 p-2 flex items-center justify-center shrink-0 shadow-xs">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                  loading="lazy"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-mono text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                </div>
                <p className="font-mono text-[11px] text-accent/90 mt-0.5">{tech.category}</p>
                <p className="text-xs text-muted-foreground mt-1.5 leading-snug">{tech.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
