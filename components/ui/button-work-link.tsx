
import { Button } from "@/components/ui/button"

import Mail from "feather-icons-react/build/IconComponents/Mail"
import Briefcase from "feather-icons-react/build/IconComponents/Briefcase"
import { HeartHandshake } from "lucide-react"
import Layout from "feather-icons-react/build/IconComponents/Layout"
import { ArrowUpRight } from "lucide-react"

export function ButtonWithIconWork() {
  return (
    <>
        <Button className="group rounded-3xl smMax:mt-2  smMax:w-full w-full">Learn More<ArrowUpRight className=' transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-0.5'  height='16' width='16'/></Button>
    </>
  )
}
