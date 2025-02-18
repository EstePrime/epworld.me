import Link from "next/link"

export function Footer() {
    return (
        <div className="sticky z-0 bottom-0 left-0 max-w-5xl h-80 bg-white flex justify-center items-center mx-auto">
            <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12">
                <div className="space-x-12 sm:pace-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl">
                    <div className="inline-grid">
                        <Link href="/" className="hover:underline cursor-pointer">Home</Link>
                        <Link href="/projects" className="hover:underline cursor-pointer">Projects</Link>
                        <Link href="/blog" className="hover:underline cursor-pointer">Blog</Link>
                    </div>
                    <div className="inline-grid">
                        <Link href="https://github.com/EstePrime" target="_blank" className="hover:underline cursor-pointer">Github</Link>
                        <Link href="https://x.com/EstePrimeWorld" target="_blank" className="hover:underline cursor-pointer">X</Link>
                    </div>
                </div>
                <h2 className="font-display italic absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] font-calendas">
                    EstePrime
                </h2>
            </div>
        </div>
    )
}