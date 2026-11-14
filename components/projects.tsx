"use client"

import {ArrowUpRight, CheckSquare, Cpu, Film, Github, GraduationCap, ShoppingBag, Terminal} from "lucide-react"

interface Project {
  id: string
  title: string
  subtitle: string
  status: string
  statusColor: string
  metric: string
  description: string
  stack: string[]
  icons: { src: string; alt: string }[]
  links: {
    github: string
  }
}

const projects: Project[] = [
  {
    id: "bolt",
    title: "Bolt",
    subtitle: "High-Performance URL Shortener",
    status: "SUB-MS LATENCY",
    statusColor: "#0aff00",
    metric: "< 1ms Redirect · Java 25 Loom",
    description:
      "High-throughput URL shortening service achieving sub-millisecond redirect resolution via Redis caching, Java 25 Virtual Threads, MongoDB persistence, TTL expiration, and cached ZXing QR code generation.",
    stack: ["Java 25", "Spring Boot 4.0.3", "Redis", "MongoDB", "Virtual Threads", "QRGen", "Docker"],
    icons: [
      { src: "/icons/java.svg", alt: "Java" },
      { src: "/icons/spring.svg", alt: "Spring Boot" },
      { src: "/icons/redis.svg", alt: "Redis" },
      { src: "/icons/mongodb.svg", alt: "MongoDB" },
      { src: "/icons/docker.svg", alt: "Docker" },
    ],
    links: {
      github: "https://github.com/AymanHazem/Bolt",
    },
  },
  {
    id: "spring-seed",
    title: "Spring Seed",
    subtitle: "Native CLI Scaffolder for Spring Boot",
    status: "v1.1.2 NATIVE",
    statusColor: "#00f3ff",
    metric: "GraalVM Native · Zero JVM",
    description:
      "Self-contained CLI tool for Linux, macOS, and WSL that scaffolds Spring Boot projects from start.spring.io via interactive wizard or one-shot flags with fuzzy dependency search, YAML migration, and .env setup.",
    stack: ["Java 25", "GraalVM Native", "Picocli", "Spring Initializr", "Jackson", "Jansi"],
    icons: [
      { src: "/icons/java.svg", alt: "Java" },
      { src: "/icons/spring.svg", alt: "Spring" },
      { src: "/icons/file-maven.svg", alt: "Maven" },
      { src: "/icons/git.svg", alt: "Git" },
    ],
    links: {
      github: "https://github.com/AymanHazem/Spring-Seed",
    },
  },
  {
    id: "timeline-preview-system",
    title: "Timeline Preview System",
    subtitle: "Video Scrubbing Sprite & WebVTT Engine",
    status: "PRODUCTION READY",
    statusColor: "#0aff00",
    metric: "Single-Pass FFmpeg · 0 Heap Buffer",
    description:
      "Spring Boot 4 media pipeline that generates YouTube-style timeline hover previews using FFmpeg native tile filters in a single C pass and compiles W3C WebVTT spatial cue sheets (#xywh=x,y,160,90).",
    stack: ["Java 25", "Spring Boot 4", "FFmpeg / ffprobe", "WebVTT", "Virtual Threads", "Docker"],
    icons: [
      { src: "/icons/java.svg", alt: "Java" },
      { src: "/icons/spring.svg", alt: "Spring Boot" },
      { src: "/icons/ffmpeg-icon.svg", alt: "FFmpeg" },
      { src: "/icons/docker.svg", alt: "Docker" },
    ],
    links: {
      github: "https://github.com/AymanHazem/Timeline-Preview-System",
    },
  },
  {
    id: "my-store-api",
    title: "My-Store-API",
    subtitle: "E-Commerce REST API & Stripe Checkout",
    status: "RUNNING",
    statusColor: "#0aff00",
    metric: "JWT Auth · Stripe Webhooks",
    description:
      "Secure e-commerce backend service providing stateless JWT authentication, role-based catalog and cart workflows, Stripe payment session integration, and relational MySQL persistence.",
    stack: ["Java", "Spring Boot 3", "Spring Security", "MySQL", "JWT", "Stripe"],
    icons: [
      { src: "/icons/java.svg", alt: "Java" },
      { src: "/icons/spring.svg", alt: "Spring Boot" },
      { src: "/icons/mysql.svg", alt: "MySQL" },
      { src: "/icons/jwt-icon.svg", alt: "JWT" },
    ],
    links: {
      github: "https://github.com/AymanHazem/My-Store-API",
    },
  },
  {
    id: "honor-schools",
    title: "Honor Schools",
    subtitle: "Role-Based Academic Management Platform",
    status: "ACTIVE",
    statusColor: "#00f3ff",
    metric: "Multi-Role RBAC · SSR",
    description:
      "Full-stack school management platform engineered with Spring MVC, role-based access control for administrators, teachers, and students, server-rendered Thymeleaf templates, and PostgreSQL.",
    stack: ["Spring MVC", "Spring Security", "Thymeleaf", "PostgreSQL"],
    icons: [
      { src: "/icons/spring.svg", alt: "Spring MVC" },
      { src: "/icons/thymeleaf.svg", alt: "Thymeleaf" },
      { src: "/icons/postgres.svg", alt: "PostgreSQL" },
    ],
    links: {
      github: "https://github.com/AymanHazem/Honor-Shcools-Project",
    },
  },
  {
    id: "task-tracker",
    title: "Task-Tracker",
    subtitle: "Clean Architecture Task REST Service",
    status: "DEPLOYED",
    statusColor: "#0aff00",
    metric: "Layered Domain · PostgreSQL",
    description:
      "Task organization REST API structured around strict controller-service-repository separation, validated DTO contracts, custom exception handling, and PostgreSQL persistence.",
    stack: ["Java", "Spring Boot", "REST API", "PostgreSQL", "Clean Architecture"],
    icons: [
      { src: "/icons/java.svg", alt: "Java" },
      { src: "/icons/spring.svg", alt: "Spring Boot" },
      { src: "/icons/postgres.svg", alt: "PostgreSQL" },
    ],
    links: {
      github: "https://github.com/AymanHazem/Task-Tracker",
    },
  },
]

function ProjectGlyph({ id }: { id: string }) {
  switch (id) {
    case "bolt":
      return <Cpu className="w-4 h-4 text-primary" />
    case "spring-seed":
      return <Terminal className="w-4 h-4 text-accent" />
    case "timeline-preview-system":
      return <Film className="w-4 h-4 text-primary" />
    case "my-store-api":
      return <ShoppingBag className="w-4 h-4 text-primary" />
    case "honor-schools":
      return <GraduationCap className="w-4 h-4 text-primary" />
    default:
      return <CheckSquare className="w-4 h-4 text-primary" />
  }
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 border-b border-primary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="font-mono text-primary text-sm">$ ps aux | grep backend-systems</p>
            <h2 className="text-4xl md:text-5xl font-bold text-accent tracking-tight">
              Engineered Systems
            </h2>
            <p className="text-foreground/90 text-base md:text-lg max-w-2xl">
              High-concurrency Java 25 services, GraalVM native CLI tooling, and native media pipelines built for production workloads.
            </p>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground border border-primary/20 bg-card/40 px-3.5 py-2 rounded-md self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>6 active repositories · OpenJDK 25 / Spring Boot 4</span>
          </div>
        </div>

        {/* Projects Grid — 3-up equal-height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between rounded-xl bg-[#0b1020]/90 border border-primary/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_12px_32px_-12px_rgba(0,243,255,0.18),inset_0_1px_0_rgba(255,255,255,0.1)] p-6 md:p-7"
            >
              <div>
                {/* Top Status & Brand Icon Tiles */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.statusColor }}
                    />
                    <span className="font-mono text-xs tracking-wider text-primary uppercase">
                      {project.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5" aria-label="Technology icons">
                    {project.icons.map((ic) => (
                      <span
                        key={ic.src}
                        title={ic.alt}
                        className="w-6 h-6 rounded bg-white/95 p-1 flex items-center justify-center shadow-xs"
                      >
                        <img
                          src={ic.src}
                          alt={ic.alt}
                          width={16}
                          height={16}
                          className="w-4 h-4 object-contain"
                          loading="lazy"
                        />
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <ProjectGlyph id={project.id} />
                    <h3 className="text-xl font-bold font-mono text-card-foreground group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-foreground/90 text-[15px] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="space-y-5">
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono bg-primary/5 border border-primary/25 text-primary/90 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-3 border-t border-primary/15 flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] text-muted-foreground truncate">
                    {project.metric}
                  </span>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[40px] px-4 py-2 rounded-md font-mono text-xs font-medium bg-primary/10 text-primary border border-primary/35 transition-all duration-150 hover:bg-primary hover:text-primary-foreground active:translate-y-px shrink-0"
                  >
                    <Github size={14} />
                    <span>Explore Source</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
