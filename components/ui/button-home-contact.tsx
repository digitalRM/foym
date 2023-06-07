
import { Button } from "@/components/ui/button"

import Mail from "feather-icons-react/build/IconComponents/Mail"
import Briefcase from "feather-icons-react/build/IconComponents/Briefcase"
import Layout from "feather-icons-react/build/IconComponents/Layout"

export function ButtonWithIcon() {
  return (
    <>
        <Button className=" mr-2">
            <Briefcase className="mr-2 h-4 w-4" /> Work Together
        </Button>

        <Button variant="outline" className=" ml-2">
            <Layout className="mr-2 h-4 w-4" /> Past Work
        </Button>
    </>
  )
}
