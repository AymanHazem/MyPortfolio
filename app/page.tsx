import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"
import StatusBar from "@/components/status-bar"
import AnimatedBackground from "@/components/animated-background"

export const metadata = {
  title: "Ayman Hazem | Back-End Software Engineer",
  description:
    "Portfolio of Ayman Hazem - Back-End Software Engineer specializing in Java, Spring Boot, and scalable server-side solutions.",
}

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="min-h-screen bg-transparent text-foreground relative z-10">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <StatusBar />
      </main>
    </>
  )
}
