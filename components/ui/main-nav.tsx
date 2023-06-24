import Link from "next/link"

import { cn } from "@/lib/utils"

import { MainNavContact } from "./main-nav-contact"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"




export function MainNav({
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
        className="text-sm font-medium transition-colors hover:text-primary font-sans"
      >
        Home
      </Link>
      <Link
        href="/work"
        className="text-sm font-medium text-neutral-500 text-muted-foreground transition-colors hover:text-primary font-sans"
      >
        Our Work
      </Link>

      <Dialog>
        <DialogTrigger className="text-sm font-medium text-neutral-500 text-muted-foreground transition-colors hover:text-primary font-sans flex place-items-center">
        Contact</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>


      

    </nav>
  )
}