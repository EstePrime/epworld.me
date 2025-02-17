import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { LightningBackground } from "@/components/lightning-effect"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <LightningBackground />
      <div className="container px-4 py-16 mx-auto">
        <header className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest mb-4">WELCOME TO MY WORLD</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-6">
            <span className="font-normal">I&apos;m </span>
            <span className="italic">EstePrime</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting digital experiences with code and creativity. Exploring the intersection of design and development.
          </p>
        </header>

        <div className="flex justify-center gap-4 mb-20">
          <Button asChild variant="outline" size="lg">
            <Link href="https://x.com/EstePrimeWorld">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
          <Button size="lg" disabled>
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 backdrop-blur-sm bg-white/50">
            <h3 className="font-display text-xl mb-2">Development</h3>
            <p className="text-muted-foreground">
              Building modern web applications with Next.js, React, and TypeScript.
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-white/50">
            <h3 className="font-display text-xl mb-2">Design</h3>
            <p className="text-muted-foreground">
              Creating beautiful user interfaces with attention to detail and aesthetics.
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-white/50">
            <h3 className="font-display text-xl mb-2">Innovation</h3>
            <p className="text-muted-foreground">Leveraging AI technologies to accelerate development and deliver efficient solutions faster.</p>
          </Card>
        </div>

        <footer className="mt-20 text-center">
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/esteprime" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://x.com/EstePrimeWorld" target="_blank">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:esteprime@proton.me" target="_blank">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </footer>
      </div>
    </main>
  )
}

