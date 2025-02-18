import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { LightningBackground } from "@/components/lightning-effect"
import { projects } from "@/components/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <LightningBackground />
      <div className="container px-4 py-16 mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
            <span className="italic">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my latest work combining development expertise with AI innovation.
          </p>
        </header>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-2xl font-display mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, i) => (
                <Card key={i} className="group overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-display mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, i) => (
                <Card key={i} className="group overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={project.github}>
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={project.demo}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </section>
      </div>
    </main>
  )
}

