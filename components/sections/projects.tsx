import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface Project {
    title: string
    description: string
    image?: string
    github: string
    demo: string
    tags: string[]
    featured: boolean
}

export default function ProjectCards({ projects }: { projects: Project[] }) {
    return (
        <>
            {projects
                .filter((p) => p.featured)
                .map((project, i) => (
                    <Card key={i} className="group overflow-hidden mt-4">
                        <div className="aspect-video relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                                <Button size="sm" variant="secondary" asChild>
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </Link>
                                </Button>
                                <Button size="sm" variant="secondary" asChild>
                                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
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
                                {project.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
        </>
    )
}
