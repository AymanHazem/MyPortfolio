"use client"

import { useEffect, useState } from "react"

export default function StatusBar() {
  const [latency, setLatency] = useState(12)
  const [uptime] = useState(99.9)

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 15) + 8)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-secondary/50 backdrop-blur border-t border-primary/20 py-4 px-4 md:px-8 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs md:text-sm font-mono">
        <div className="flex gap-6 md:gap-8 text-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>
              <span className="text-primary">System:</span> Online
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-primary">Latency:</span> <span>{latency}ms</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">Uptime:</span> <span>{uptime}%</span>
          </div>
        </div>
        <div className="text-muted">&copy; 2025 Ayman Hazem</div>
      </div>
    </footer>
  )
}
