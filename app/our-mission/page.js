
import { MainNav } from "@/components/ui/main-nav"

import Link from "next/link"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


import { Badge } from "@/components/ui/badge"

import { ProfileForm } from "@/components/ui/form-test"
import { ScrollDown } from "@/components/ui/scroll-down"



export const metadata = {
  title: 'foym.',
  description: 'focus on your mission, not your website. Our mission is to empower non-profit organizations & small businesses by providing them with websites, for completely free.',
}
 

export default function Home() {

  
  return (
    <div className="flex-col flex bg-white dark:bg-black h-screen w-screen overflow-x-hidden scroll-smooth">
      <div className="border-b border-zinc-800 w-screen fixed backdrop-blur-sm z-10 smMax:backdrop-blur-xl">
        <div className="flex h-16 items-center px-4" >

        <div className="mr-auto ml-6 flex items-center space-x-4 ">

          <Link href={'/'} className="font-sans font-semibold hover:font-bold transition-all text-black dark:text-white text-lg">foym<span className="text-brandPink font-sans text-2xl" >.</span></Link>
        </div>
          <MainNav className="mx-6 bg-transparent dark:bg-transparent" />
          
        </div>
      </div>




      

      

    </div>

    
    
  )
}