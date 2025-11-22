import type React from "react"
import { JetBrains_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "Ayman Hazem | Back-End Software Engineer",
  description:
    "Portfolio of Ayman Hazem - Back-End Software Engineer specializing in Java, Spring Boot, and scalable server-side solutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
