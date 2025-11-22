"use client"

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 243, 255, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 243, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.2,
          animation: 'grid-move 25s linear infinite',
        }}
      />
      
      {/* Floating Glow Orbs */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#00f3ff] blur-3xl animate-float-1" style={{ opacity: 0.3 }} />
      <div className="absolute top-60 right-20 w-48 h-48 rounded-full bg-[#0aff00] blur-3xl animate-float-2" style={{ opacity: 0.25 }} />
      <div className="absolute bottom-40 left-1/4 w-44 h-44 rounded-full bg-[#00f3ff] blur-3xl animate-float-3" style={{ opacity: 0.28 }} />
      <div className="absolute bottom-20 right-1/3 w-36 h-36 rounded-full bg-[#0aff00] blur-3xl animate-float-4" style={{ opacity: 0.25 }} />
      <div className="absolute top-1/2 left-1/2 w-52 h-52 rounded-full bg-[#00f3ff] blur-3xl animate-float-5" style={{ opacity: 0.2 }} />
      
      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent animate-scan-1" style={{ opacity: 0.6 }} />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0aff00] to-transparent animate-scan-2" style={{ opacity: 0.5 }} />
      </div>
    </div>
  )
}
