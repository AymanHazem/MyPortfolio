"use client"
import { useState } from "react"
import { Github } from "lucide-react"

export default function Contact() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [isGithubHovered, setIsGithubHovered] = useState(false)

  return (
    <section className="py-20 px-4 md:px-8 border-b border-primary/20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="font-mono text-primary text-sm">$ telnet establish_connection</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-accent">Establish Connection</h3>
        </div>

        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <div
              onMouseEnter={() => setHoveredButton("whatsapp")}
              onMouseLeave={() => setHoveredButton(null)}
              className={`relative cursor-pointer transition-transform duration-700 ease-in-out flex-1 ${
                hoveredButton === "whatsapp" ? "scale-110" : ""
              }`}
            >
              <a
                href="https://wa.me/201017404874"
                target="_blank"
                rel="noopener noreferrer"
                className={`terminal-border terminal-glow px-8 py-4 rounded bg-card/30 text-primary font-mono text-sm flex items-center justify-center gap-3 w-full ${
                  hoveredButton === "whatsapp" ? "bg-secondary/60 text-accent" : ""
                }`}
              >
                <span>[ WhatsApp ]</span>
              </a>
            </div>
            <div
              onMouseEnter={() => setHoveredButton("linkedin")}
              onMouseLeave={() => setHoveredButton(null)}
              className={`relative cursor-pointer transition-transform duration-700 ease-in-out flex-1 ${
                hoveredButton === "linkedin" ? "scale-110" : ""
              }`}
            >
              <a
                href="https://www.linkedin.com/in/ayman-hazem/"
                target="_blank"
                rel="noopener noreferrer"
                className={`terminal-border terminal-glow px-8 py-4 rounded bg-card/30 text-primary font-mono text-sm flex items-center justify-center gap-3 w-full ${
                  hoveredButton === "linkedin" ? "bg-secondary/60 text-accent" : ""
                }`}
              >
                <span>[ LinkedIn ]</span>
              </a>
            </div>
            <div
              onMouseEnter={() => setHoveredButton("email")}
              onMouseLeave={() => setHoveredButton(null)}
              className={`relative cursor-pointer transition-transform duration-700 ease-in-out flex-1 ${
                hoveredButton === "email" ? "scale-110" : ""
              }`}
            >
              <a
                href="mailto:ayman.hazem.gassar@gmail.com"
                className={`terminal-border terminal-glow px-8 py-4 rounded bg-card/30 text-primary font-mono text-sm flex items-center justify-center gap-3 w-full ${
                  hoveredButton === "email" ? "bg-secondary/60 text-accent" : ""
                }`}
              >
                <span>[ Email ]</span>
              </a>
            </div>
          </div>

          {/* GitHub Link */}
          <div className="pt-8 border-t border-primary/20 w-full">
            <a
              href="https://github.com/AymanHazem"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsGithubHovered(true)}
              onMouseLeave={() => setIsGithubHovered(false)}
              className="flex items-center justify-center gap-3 text-primary transition-all duration-700 ease-in-out text-lg font-mono cursor-pointer"
            >
              <Github size={32} className={`transition-transform duration-700 ease-in-out ${isGithubHovered ? "scale-110" : ""}`} />
              <span className={isGithubHovered ? "text-accent" : ""}>github.com/AymanHazem</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
