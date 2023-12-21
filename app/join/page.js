
import { UserNav } from "@/components/ui/user-nav"
import { MainNewNav } from "@/components/ui/main-new-nav"

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
import NewHead from "@/components/ui/header"
import ComponentThree from "@/components/ui/componentThree"





export const metadata = {
  title: 'join foym.',
  description: 'focus on your mission, not your website.',
}
 

export default function Home() {

  
  return (
    <div className="flex-col flex bg-white dark:bg-black w-screen overflow-x-hidden scroll-smooth ">
      <NewHead />



      
      <div className="h-screen w-screen my-[10px] sm:my-[148px] bg-[url('./join-wave.svg')] bg-cover bg-bottom bg-no-repeat sm:p-0 p-8">
        <div className="flex justify-center align-center flex-col mt-52 max-w-full sm:max-w-none mx-auto text-center">
          <h1 className="font-sans text-3xl text-black dark:text-white lg:text-5xl md:text-3xl sm:text-3xl font-bold flex justify-center align-center tracking-tighter smMax:hidden">help the world, one website at a time<span className="text-brandPink">.</span></h1>

        </div>

      <div className="flex justify-center align-center lg:max-w-[900px] md:max-w-[46rem] max-w-full  text-center mx-auto sm:max-w-[33rem]">
        <h2 className="font-sans text-zinc-400 lg:text-xl font-light flex justify-center align-center tracking-tight md:mt-6 sm:mt-4 mt-2 sm:mx-8 text-left sm:text-center">Our mission is to empower non-profit organizations & small businesses by providing them with websites that communicate their vision and help amplify their impact – and we do it for free. </h2>
      </div>

      <div className="flex justify-center align-center max-w-4xl text-center mx-auto mt-6 mb-64 flex-col sm:flex-row gap-4 sm:gap-0">
        <ButtonWithIcon />
      </div>
      </div>

      <div className="w-screen overflow-hidden h-screen border border-zinc-800 translate-y-8 md:translate-y-0 border-x-0 border-b-0 border-t-0 flex justify-evenly p-6 px-0 lg:p-12 md:px-6 sm:px-0 lg:flex-nowrap md:flex-wrap bg-white dark:bg-black relative ">
        <div className="w-full m-2 overflow-hidden rounded-[50px] border-zinc-800 mx-2 p-[2px] relative h-fit max-w-[1440px]">
          <div className="overflow-hidden rounded-[30px] bg-gradient-to-b from-transparent from-12% via-brandPink  to-black to-88% backdrop-blur-xl  z-[2] relative p-[1px]">
            <ComponentThree />
          </div>
        </div>
      </div>
    </div>

    

      

      


    
    
  )
}