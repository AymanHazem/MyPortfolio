"use client"

import { useEffect, useState } from "react"
import { Github } from "lucide-react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isTerminalHovered, setIsTerminalHovered] = useState(false)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const fullText = "Initializing Ayman_Hazem_Core..."

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 80)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 border-b border-primary/20">
      <div className="max-w-4xl w-full space-y-12">
        {/* Terminal Window Frame */}
        <div
          onMouseEnter={() => setIsTerminalHovered(true)}
          onMouseLeave={() => setIsTerminalHovered(false)}
          className={`relative cursor-pointer transition-transform duration-700 ease-in-out ${
            isTerminalHovered ? "scale-[1.02]" : ""
          }`}
        >
          <div className="terminal-border terminal-glow rounded-lg overflow-hidden bg-card/30 backdrop-blur-sm">
          {/* Terminal Header */}
          <div className="bg-secondary/60 px-4 py-3 border-b border-primary/20 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            <span className="text-muted text-sm font-mono ml-4">root@ayman:~</span>
          </div>

          {/* Terminal Content */}
          <div className="p-8 md:p-12 space-y-8">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm">
                {">"} {displayText}
                {displayText.length < fullText.length && <span className="text-primary animate-blink-cursor">_</span>}
              </p>
            </div>

            <div className="space-y-2 pt-4">
              <p className="text-accent font-mono text-sm">[SYSTEM READY]</p>
              <p className="text-card-foreground font-mono text-lg">
                Back-End Software Engineer | Java & Spring Boot Specialist
              </p>
              <p className="text-foreground font-mono text-sm">Available for enterprise backend solutions...</p>
            </div>

            <div className="pt-6 flex gap-4">
              <div
                onMouseEnter={() => setHoveredButton("github")}
                onMouseLeave={() => setHoveredButton(null)}
                className={`relative cursor-pointer transition-transform duration-700 ease-in-out ${
                  hoveredButton === "github" ? "scale-110" : ""
                }`}
              >
                <a
                  href="https://github.com/AymanHazem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group terminal-border terminal-glow px-6 py-2 rounded bg-card/30 text-primary font-mono text-sm flex items-center gap-2 inline-flex ${
                    hoveredButton === "github" ? "bg-secondary/60 text-accent" : ""
                  }`}
                >
                  <Github size={18} />
                  <span>[ View Repository ]</span>
                </a>
              </div>
              <div
                onMouseEnter={() => setHoveredButton("projects")}
                onMouseLeave={() => setHoveredButton(null)}
                className={`relative cursor-pointer transition-transform duration-700 ease-in-out ${
                  hoveredButton === "projects" ? "scale-110" : ""
                }`}
              >
                <a
                  href="#projects"
                  className={`group terminal-border terminal-glow px-6 py-2 rounded bg-card/30 text-primary font-mono text-sm inline-flex ${
                    hoveredButton === "projects" ? "bg-secondary/60 text-accent" : ""
                  }`}
                >
                  [ Execute Projects ]
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
