"use client";

import { Button } from "@/components/ui/button"
import { Archive, CircleUser, ArrowRightIcon } from "lucide-react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";

export default function Header() {

    return (
        <div className="relative z-10 flex mt-36 w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
                <div className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )} >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>✨ I'm EstePrime </span>
                        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
                <h1 className="text-3xl md:text-3xl lg:text-6xl font-semibold text-white tracking-tighter">
                    Crafting digital experiences with <br /> code and creativity.
                </h1>
                <p className="text-xl  text-white/70 tracking-tighter">
                    Exploring the intersection of design and development.
                </p>
                <div className="flex gap-2">
                    <Button>
                        <CircleUser /> Get in touch
                    </Button>
                    <Button variant="secondary">
                        <Archive /> View Projects
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-start gap-2 mt-2">
                    <Card className="w-80">
                        <CardHeader>
                            <CardTitle>Development</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Building modern web applications with Next.js, React, and TypeScript.</p>
                        </CardContent>
                    </Card>
                    <Card className="w-80">
                        <CardHeader>
                            <CardTitle>Design</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Creating beautiful user interfaces with attention to detail and aesthetics.</p>
                        </CardContent>
                    </Card>
                    <Card className="w-80">
                        <CardHeader>
                            <CardTitle>Innovation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Leveraging AI technologies to accelerate development and deliver efficient solutions faster.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
