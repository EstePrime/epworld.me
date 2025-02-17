import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { LightningBackground } from "@/components/lightning-effect"
import { formatDate } from "@/utils/dateFormatter"
import { Badge } from "@/components/ui/badge"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Metadata } from "next"

interface BlogPostParams {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content/posts")
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ""),
  }))
}

export default async function BlogPost({ params }: BlogPostParams) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/posts", `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(fileContents);
  const components = {};

  return (
    <main className="min-h-screen relative overflow-hidden">
      <LightningBackground />
      <div className="container px-4 py-16 mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
            <span className="italic">{data.title}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {data.description}
          </p>
          <div className="pt-3">
            <Badge>{formatDate(data.date)}</Badge>
          </div>
        </header>
        <MDXRemote source={content} components={components} />
      </div>
    </main>
  );
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/posts", `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data } = matter(fileContents);

  return {
    title: data.title,
    description: data.description,
  };
}