import { UserNav } from "@/components/ui/user-nav"
import { MainNav } from "@/components/ui/main-nav"

import Link from "next/link"
import { ButtonWithIcon } from "@/components/ui/button-home-contact"

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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

import { ProfileForm } from "@/components/ui/form-test"
import { ScrollDown } from "@/components/ui/scroll-down"
import { ButtonWithIconJoin } from "@/components/ui/button-join"




export const metadata = {
  title: 'join foym.',
  description: 'focus on your mission, not your website.',
}
 

export default function Home() {

  
  return (
    <div className="flex-col flex bg-white dark:bg-black w-screen overflow-x-hidden scroll-smooth">
      <div className="border-b border-zinc-800 w-screen fixed backdrop-blur-sm z-10 smMax:backdrop-blur-xl">
        <div className="flex h-16 items-center px-4" >

        <div className="mr-auto ml-6 flex items-center space-x-4 ">

          <Link href={'/'} className="font-sans font-semibold hover:font-bold transition-all text-black dark:text-white text-lg">foym<span className="text-brandPink font-sans text-2xl" >.</span></Link>
        </div>
          <MainNav className="mx-6 bg-opacity-50 bg-black bg-blur-xl" />
          
        </div>
      </div>



      <div className="h-[100vh] w-screen bg-[url('./hero_join.webp')] bg-cover bg-bottom bg-no-repeat ">

        <div className="flex justify-center align-center flex-col mt-72 max-w-[300px] sm:max-w-none mx-auto text-center">
            <h1 className="font-sans text-3xl text-black dark:text-white lg:text-5xl md:text-3xl sm:text-3xl font-bold flex justify-center align-center tracking-tighter smMax:hidden">focus on your mission, not your website<span className="text-brandPink">.</span></h1>
            <h1 className="font-sans text-3xl text-black dark:text-white lg:text-5xl md:text-3xl sm:text-3xl font-bold flex justify-center align-center tracking-tighter hidden smMax:block">focus on your mission, not your website.</h1>

        </div>

        <div className="flex max-w-md justify-center align-center lg:max-w-[900px] md:max-w-2xl sm:max-w-lg   text-center mx-auto">
            <h2 className="font-sans text-zinc-400 lg:text-xl font-light flex justify-center align-center tracking-tight mt-6 mx-8">Our mission is to empower non-profit organizations & small businesses by providing them with websites that communicate their vision and help amplify their impact – and we do it for free. </h2>
        </div>

        <div className="flex justify-center align-center max-w-4xl text-center mx-auto mt-6 mb-64">
            <ButtonWithIconJoin />
        </div>
        

      </div>

      <div className="h-[100vh] w-screen bg-black">

      </div>


      


      

      

        


        

  

        

                 
      </div>

      

      


    
    
  )
}