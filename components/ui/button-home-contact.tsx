
import { Button } from "@/components/ui/button"

import Mail from "feather-icons-react/build/IconComponents/Mail"
import Briefcase from "feather-icons-react/build/IconComponents/Briefcase"
import { HeartHandshake } from "lucide-react"
import Layout from "feather-icons-react/build/IconComponents/Layout"
import Link from "next/link"

export function ButtonWithIcon() {
  return (
    <>
        <Button className=" mr-2" >
            <HeartHandshake className="mr-2 h-4 w-4" /> Work Together
        </Button>

        <Button variant="outline" className=" ml-2 border-zinc-800 hover:bg-zinc-900 bg-black " asChild>
          <div>
          <Layout className="mr-2 h-4 w-4" /> <Link href="/work">Previous Work</Link>
          </div>
            
        </Button>
    </>
  )
}
