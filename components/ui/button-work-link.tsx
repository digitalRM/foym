
import { Button } from "@/components/ui/button"


import Layout from "feather-icons-react/build/IconComponents/Layout"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function ButtonWithIconWork() {
  return (
    <>
        {/* <Button className="group rounded-3xl smMax:mt-2  smMax:w-full w-full font-sans">
          Learn More<ArrowUpRight className=' transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-0.5'  height='16' width='16'/>
        
        </Button> */}

        <Link className="group rounded-3xl smMax:mt-2  smMax:w-full w-full font-sans" href="/mukilteo-robotics">
          <Button className="group rounded-3xl smMax:mt-2  smMax:w-full w-full font-sans" asChild>
            <div>
            Learn More<ArrowUpRight className=' transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-0.5'  height='16' width='16'/>
            </div>
              
          </Button>
        </Link>

        
    </>
  )
}
