"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";

const routes = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/projects",
        label: "Projects",
    },
    {
        href: "/blog",
        label: "Blog",
    },
];

export function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-cream/50 backdrop-blur-sm">
            <div className="container flex h-24 items-center justify-center">
                <div>
                    <div className="justify-center flex items-center md:mb-4">
                        <Link href="/" className="font-display text-xl font-bold italic">
                            EpW
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === route.href ? "text-primary" : "text-muted-foreground",
                                )}
                            >
                                {route.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="ml-auto">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <SheetHeader className="mb-4">
                            <SheetTitle>
                                <Link href="/" className="font-display text-xl font-bold italic">
                                    EpW
                                </Link>
                            </SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col gap-4">
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary",
                                        pathname === route.href ? "text-primary" : "text-muted-foreground",
                                    )}
                                    onClick={() => setOpen(false)} // Close sheet when link is clicked
                                >
                                    {route.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
