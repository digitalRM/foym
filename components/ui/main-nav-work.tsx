import Link from "next/link"

import { cn } from "@/lib/utils"

import { MainNavContact } from "./main-nav-contact"


export function MainNavWork({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {

  return (


    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6 bg-black", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium text-neutral-500 transition-colors hover:text-primary font-sans"
      >
        Home
      </Link>
      <Link
        href="/work"
        className="text-sm font-medium text-primary transition-colors hover:text-primary font-sans"
      >
        Our Work
      </Link>
      <MainNavContact />

    </nav>
  )
}