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

import mrImage from "../mukPhoto.jpeg"

import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import NewHead from "@/components/ui/header"
import Footer from "@/components/ui/footer"

export const metadata = {
  title: 'foym. - our work.',
  description: 'focus on your mission, not your website. Our mission is to empower non-profit organizations & small businesses by providing them with websites, for completely free.',
}
 

export default function Work() {
  return (
    <div className="bg-black relative">
      <NewHead />

      <div className="flex justify-center align-center flex-col mt-52 max-w-[290px] sm:max-w-none mx-auto text-center">
        <h1 className="font-sans text-2xl text-black dark:text-white lg:text-5xl md:text-3xl sm:text-2xl font-bold flex justify-center align-center tracking-tight">our work<span className="text-brandPink">.</span></h1>

      </div>

        <div className=" w-full mt-24 flex items-center justify-center mx-auto">


          
     
 
          
        </div>

        <div className=" w-full flex justify-center ">
          <div className="w-full m-2 p-[0px] sm:p-[2px] relative h-fit max-w-[1440px] xl:max-w-[1440px] " >
            <div className="bg-gradient-to-r from-brandBlue to-brandPink flex lg:h-full w-full items-center justify-center bg-white dark:bg-black rounded-[50px] relative transition-all p-[1px]">
      
            
            <div className="absolute -inset-2 rounded-[50px] bg-gradient-to-r from-brandBlue to-brandPink opacity-40 blur-xl h-1/3 sm:h-4/5"/>

            <Card className="dark:bg-blackmax-w-[1440px] bg-black rounded-[50px] p-1 w-full z-[6] relative mb-0 flex-1 sm:min-w-[477px]">
              <CardHeader className="dark:bg-black rounded-[50px] flex flex-wrap flex-row sm:gap-6 gap-3 p-3 pt-2 sm:p-12">
                <Card className="dark:bg-black w-1/3 rounded-[32px] p-1 sm:p-3 z-[6] relative my-2 mb-0 flex-1 min-w-[100%] md:min-w-[50%] flex flex-wrap">
                  <CardHeader className="dark:bg-black rounded-3xl">
                    <CardTitle className="font-sans">Mukilteo Robotics</CardTitle>
                    <CardDescription className=" mt-3 ">Mukilteo Robotics is a student-led non-profit organization located in Mukilteo, Washington. Their organization participates in VEX Robotics, a global competitive robotics program. As part of their program, members have the incredible opportunity to develop their STEM skills, completely free of charge. students of different races, ethnicities, genders, and socio-economic backgrounds find common ground, united by their shared passion for robotics and the pursuit of STEM. </CardDescription>
                    <ul className=" text-zinc-300">
                      <li>• Mukilteo Robotics has over 40+ members.</li>
                      <li>• Mukilteo Robotics is completely free for all of its members.</li>
                      <li>• Mukilteo Robotics raised over $20,000 for their 2022 - 2023 season.</li>
                    </ul>
                  </CardHeader>
                  <div className="flex w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 mb-2  relative smMax:flex-wrap font-sans">
                    <ButtonWithIconWork />
                  </div>  
                </Card>

                

              </CardHeader>
              
              <div className="sm:mx-12 mx-3">
                <Card className="dark:bg-black w-full border-zinc-800 rounded-3xl p-3 z-[6] relative my-4 mt-0 flex-1 ">
                  <CardHeader className="dark:bg-black border-zinc-200 rounded-3xl flex flex-row gap-6 flex-wrap sm:p-6 p-2">

                  <div className="group">
                    {/* <Badge variant='outline' className=" g ml-1 translate-y-7 translate-x-4 font-sans  opacity-100 relative z-10 border-zinc-600 cursor-pointer">View More</Badge> */}
                  
                    <Image 
                      src={mrImage}
                      priority
                      width='100%'
                      quality={100}
                      placeholder="blur"
                    
                      height='100%'
                      className=' rounded-2xl grayscale transition-all opacity-60 hover:grayscale-0 hover:opacity-95'
                      alt="Group picture of members of Mukilteo Robotics at a championship event in Washington State."
                    /> 
                  </div>

                  
                    
              

              


              <div className="bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-[110%] h-1/2 absolute bottom-0 -translate-x-14 sm:-translate-x-12 lg:-translate-x-40 left-12"> </div>
              <div className="bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-[110%] h-1/2 absolute -bottom-10 blur-xl -translate-x-14 sm:-translate-x-12 lg:-translate-x-40 left-12"> </div>

                  
                  

                  </CardHeader>
                  

                </Card>
                <div className="bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-[110%] h-5/6 absolute bottom-0 -translate-x-40 left-12"> </div>

              </div>
              <div>
                
  <div className="bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-screen -ml-4 h-4/5 absolute bottom-0 left-0"> </div>

              </div>

              

            <div className="z-10 pb-24 relative -mb-1 bg-black -bottom-0.5 overflow-hidden">
              <Footer className='' />
            </div>
              
              
            </Card>    

           


            </div>
          </div>
        </div>
      </div>

      
    
  )
}