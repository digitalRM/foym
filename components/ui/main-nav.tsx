import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary font-sans"
      >
        Home
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-neutral-500 text-muted-foreground transition-colors hover:text-primary font-sans"
      >
        Our Work
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-neutral-500 text-muted-foreground transition-colors hover:text-primary font-sans"
      >
        Contact
      </Link>

    </nav>
  )
}