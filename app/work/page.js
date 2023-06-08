import { UserNav } from "@/components/ui/user-nav"
import { MainNavWork } from "@/components/ui/main-nav-work"

import Link from "next/link"


export default function Work() {
  return (
    <div className="flex-col flex bg-white dark:bg-black h-screen w-screen overflow-x-hidden">
      <div className="border-b border-zinc-800 w-screen fixed backdrop-blur-sm z-50">
        <div className="flex h-16 items-center px-4" >

        <div className="mr-auto ml-6 flex items-center space-x-4 ">

          <Link href={'/'} className="font-sans font-semibold hover:font-black transition-all text-black dark:text-white text-lg">foym<span className="text-brandPink font-sans text-2xl" >.</span></Link>
        </div>
          <MainNavWork className="mx-6 bg-white dark:bg-black" />
          
        </div>
      </div>

    

    </div>

    
    
  )
}