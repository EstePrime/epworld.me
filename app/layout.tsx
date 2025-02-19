import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PostHogProvider } from './providers'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata = {
  title: "EstePrime | Portfolio",
  description: "Personal portfolio of EstePrime",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={cn("min-h-screen bg-cream font-sans antialiased", inter.variable, playfair.variable)}>
      <PostHogProvider>
        <Navbar />
        <div className="w-full items-center justify-center h-full overflow-auto">
          {children}
          <Footer />
        </div>
        </PostHogProvider>
      </body>
    </html>
  )
}

