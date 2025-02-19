import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { LightningBackground } from "@/components/lightning-effect"
import ProjectCards from "@/components/sections/projects"
import { projects } from "@/components/projects"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <LightningBackground />
      <div className="container px-4 py-16 mx-auto">
        <header className="text-center mb-8">
          <p className="text-sm font-medium tracking-widest mb-4">WELCOME TO MY WORLD</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-6">
            <span className="font-normal">I&apos;m </span>
            <span className="italic">EstePrime</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting digital experiences with code and creativity. Exploring the intersection of design and development.
          </p>
        </header>
        <div className="flex justify-center gap-4 mb-16">
          <Button asChild variant="outline" size="lg">
            <Link href="https://x.com/EstePrimeWorld">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
          <Button asChild size="lg" effect="ringHover">
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 backdrop-blur-sm bg-white/50 hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out">
            <h3 className="font-display text-xl mb-2">Development</h3>
            <p className="text-muted-foreground">
              Building modern web applications with Next.js, React, and TypeScript.
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-white/50 hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out">
            <h3 className="font-display text-xl mb-2">Design</h3>
            <p className="text-muted-foreground">
              Creating beautiful user interfaces with attention to detail and aesthetics.
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-white/50 hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out">
            <h3 className="font-display text-xl mb-2">Innovation</h3>
            <p className="text-muted-foreground">Leveraging AI technologies to accelerate development and deliver efficient solutions faster.</p>
          </Card>
        </div>
        <div className="relative mt-16 mx-auto md:container">
          <div className="w-full flex justify-center">
            <div className="max-w-[1024px] w-full flex items-center justify-between">
              <div>
                <div className="font-display font-medium md:text-5xl text-4xl">
                  From Idea
                  <br />
                  to <span className="italic">Execution</span>
                </div>
                <p className="mt-3">
                  Bringing concepts to life through cutting-edge web development.
                </p>
              </div>
              <Button asChild effect="expandIcon" icon={ArrowRightIcon} iconPlacement="right" className="hidden md:block">
                <Link href="/projects">
                  View more projects
                </Link>
              </Button>
              <Button asChild effect="expandIcon" icon={ArrowRightIcon} iconPlacement="right" className="block md:hidden ">
                <Link href="/projects">
                  More
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ProjectCards projects={projects} />
          </div>
        </div>
      </div>
    </main>
  )
}

