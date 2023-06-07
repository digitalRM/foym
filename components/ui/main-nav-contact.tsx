'use client'
import Link from "next/link"
import ArrowRight from "feather-icons-react/build/IconComponents/ArrowRight"
import ArrowUpRight from "feather-icons-react/build/IconComponents/ArrowUpRight"
import { cn } from "@/lib/utils"



export function MainNavContact({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <Link
        href="/"
        className="text-sm font-medium text-neutral-500 text-muted-foreground transition-colors hover:text-primary font-sans flex place-items-center"
    >
        Contact
        <ArrowUpRight className=' ml-0.5' height='16' width='16'/>
    </Link>
  )
}