import { UserNav } from "@/components/ui/user-nav"
import { MainNavWork } from "@/components/ui/main-nav-work"

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
import { ButtonWithIconWork }from "@/components/ui/button-work-link"

import Image from "next/image"

import mrImage from "../mr1.jpeg"

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

      <div className="flex justify-center align-center flex-col mt-52 max-w-[290px] sm:max-w-none mx-auto text-center">
        <h1 className="font-sans text-2xl text-black dark:text-white lg:text-5xl md:text-3xl sm:text-2xl font-bold flex justify-center align-center tracking-tight">our work<span className="text-brandPink">.</span></h1>

      </div>

        <div className=" w-auto mt-24 mx-10">
          <Card className="dark:bg-black border-zinc-800 rounded-3xl p-3 w-full z-[6] relative my-4 mb-0 flex-1 sm:min-w-[477px]">
            <CardHeader className="dark:bg-black border-zinc-200 rounded-3xl flex flex-wrap flex-row">

              <div className=" mb-3">
              <CardTitle className=" text-2xl">Mukilteo Robotics.</CardTitle>
              <CardDescription className=" mt-3 max-w-3xl">Mukilteo Robotics is a student-led non-profit organization located in Mukilteo, Washington. Their organization participates in VEX Robotics, a global competitive robotics program. As part of their program, members have the incredible opportunity to develop their STEM skills, completely free of charge. </CardDescription>
              <CardDescription className=" mt-3 max-w-[750px]">“Mukilteo Robotics has consistently provided an inclusive environment, welcoming individuals of all backgrounds to learn how to overcome complex challenges,” a quote from the Lynnwood Times reads, a local newspaper. Within the walls of their base of operations, students of different races, ethnicities, genders, and socio-economic backgrounds find common ground, united by their shared passion for robotics and the pursuit of knowledge. </CardDescription>

              </div>

              <Card className="dark:bg-black w-1/3 border-zinc-800 rounded-3xl p-3 z-[6] relative my-4 mb-0 flex-1 min-w-[360px]">
                <CardHeader className="dark:bg-black border-zinc-200 rounded-3xl">
                  <CardTitle className="">Quick Information. <Badge variant="outline" className=" -translate-y-0.5 ml-1 border-brandPink">New</Badge></CardTitle>
                  <CardDescription className=" mt-3 max-w-3xl">Mukilteo Robotics. Mukilteo Washington. </CardDescription>

                  <ul className="font-sans text-slate-300">
                    <li>• Mukilteo Robotics has over 40+ members.</li>
                    <li>• Mukilteo Robotics is completely free for all its members.</li>
                    <li>• Mukilteo Robotics raised over $20,000 for their 2022 - 2023 season.</li>
                  </ul>
                </CardHeader>

                <div className="flex w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 pr-10 smMax:pr-6 relative smMax:flex-wrap">
                  <ButtonWithIconWork />
                </div>  
              </Card>

              

            </CardHeader>
            
            {/* <div className="mx-6">
              <Card className="dark:bg-black w-full border-zinc-800 rounded-3xl p-3 z-[6] relative my-4 mb-0 flex-1 min-w-[360px] ">
                <CardHeader className="dark:bg-black border-zinc-200 rounded-3xl flex flex-row justify-between flex-wrap">
                  <Image 

                    src={mrImage}
                    width={200}
                    height={200}
                    className='rounded-3xl grayscale transition-all hover:grayscale-0'
                    alt="Picture of two members of Mukilteo Robotics."
                  
                  
                  />

                  <Image 

                  src={mrImage}
                  width={200}
                  height={200}
                  className='rounded-3xl grayscale transition-all hover:grayscale-0'
                  alt="Picture of two members of Mukilteo Robotics."


                  />

<Image 

src={mrImage}
width={200}
height={200}
className='rounded-3xl grayscale transition-all hover:grayscale-0'
alt="Picture of two members of Mukilteo Robotics."


/>

<Image 

src={mrImage}
width={200}
height={200}
className='rounded-3xl grayscale transition-all hover:grayscale-0'
alt="Picture of two members of Mukilteo Robotics."


/>

<Image 

src={mrImage}
width={200}
height={200}
className='rounded-3xl grayscale transition-all hover:grayscale-0'
alt="Picture of two members of Mukilteo Robotics."


/>

<Image 

src={mrImage}
width={200}
height={200}
className='rounded-3xl grayscale transition-all hover:grayscale-0'
alt="Picture of two members of Mukilteo Robotics."


/>


                </CardHeader>

              </Card>
            </div> */}


            
             
          </Card>     

          
        </div>
      </div>
    
  )
}