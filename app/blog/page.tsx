import fs from "fs"
import path from "path"
import Link from 'next/link'
import { LightningBackground } from "@/components/lightning-effect"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/utils/dateFormatter"
import escapeHtml from "escape-html"
import matter from "gray-matter"
function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content/posts")
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "")
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data } = matter(fileContents)

    return {
      slug: escapeHtml(slug),
      title: data.title,
      date: data.date,
      description: data.description,
      image: data.image
    }
  })
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <main className="min-h-screen relative overflow-hidden">
      <LightningBackground />
      <div className="container px-4 py-16 mx-auto">

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
            <span className="italic">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Latest updates, sharing what interests me.
          </p>
        </header>

        {/* Blog list */}
        <section>
          <h2 className="text-2xl font-display mb-8">Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge>{formatDate(post.date)}</Badge>
                    </div>
                  </div>
                </Card>
                
              </Link>

            ))}
          </div>
        </section>
      </div>
    </main>

  )
}

