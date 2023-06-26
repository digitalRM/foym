
import { Button } from "@/components/ui/button"

import Mail from "feather-icons-react/build/IconComponents/Mail"
import Briefcase from "feather-icons-react/build/IconComponents/Briefcase"
import { HeartHandshake } from "lucide-react"
import Layout from "feather-icons-react/build/IconComponents/Layout"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { ProfileForm } from "./form-test"

export function ButtonWithIcon() {
  return (
    <>
    
    <Dialog>
        <DialogTrigger className="text-sm font-medium text-neutral-500 text-muted-foreground transition-colors hover:text-primary font-sans flex place-items-center">
        <Button className=" mr-2" >
            <HeartHandshake className="mr-2 h-4 w-4" /> Work Together
        </Button>
        </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-black border-zinc-800 min-w-[43%]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            We'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
          <ProfileForm />
      </DialogContent>
      </Dialog>


      
        

        <Button variant="outline" className=" ml-2 border-zinc-800 hover:bg-zinc-900 bg-black " asChild>
          <div>
          <Layout className="mr-2 h-4 w-4" /> <Link href="/work">Previous Work</Link>
          </div>
            
        </Button>
    </>
  )
}
