'use client'
import { UserNav } from "@/components/ui/user-nav"
import { MainNav } from "@/components/ui/main-nav-work-page"

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

import { useScroll, useTransform, motion } from "framer-motion";

import { useRef, useEffect } from "react"

import mrImage from "../mukPhoto.jpeg"

import Image from "next/image"

import UserIcon from "@/components/ui/userIcon"
import TrendingUpp from "@/components/ui/trendingUp"
import DollarIcon from "@/components/ui/dollarSignIcon"

import VelocityScroll from "@/components/ui/text-scroll"
import DollarSignIcon from "@/components/ui/dollarSignIcon"
 

export default function Home() {

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0.7, 0.3], [0, 1])
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.4])
    const scaleCard = useTransform(scrollYProgress, [0, 1.8], [1, 0.58])
    const heightScale = useTransform(scrollYProgress, [0, 1], [0.8, 2.4])
    const colorSwap = useTransform(scrollYProgress, [0, .3], ["#232946", "#000"])
    const colorSwapOp = useTransform(scrollYProgress, [0, .3], ["#000", "#232946"])
    const padding = useTransform(scrollYProgress, [0, .4], [6, 12] )
    
    
  
  return (
   

    <div>

<motion.section
        
        className=" bg-gradient-to-b from-black to-mrBack w-screen h-[250vh]"
        ref={targetRef}>

    <div className="border-b border-zinc-800 w-screen fixed backdrop-blur-sm z-10 smMax:backdrop-blur-xl top-0">
        <div className="flex h-16 items-center px-4" >

        <div className="mr-auto ml-6 flex items-center space-x-4 ">

          <Link href={'/'} className="font-sans font-semibold hover:font-bold transition-all text-black dark:text-white text-lg">foym<span className="text-brandPink font-sans text-2xl" >.</span></Link>
        </div>
          <MainNav className="mx-6 bg-transparent dark:bg-transparent" />
          
        </div>
      </div>


      <motion.div

      style={{ opacity }}
        
      className="flex justify-center align-center flex-col mt-52 max-w-[290px] sm:max-w-none mx-auto text-center fixed left-0 right-0 top-0 z-0">
        
        <h1 className="font-sans text-2xl text-black dark:text-white lg:text-5xl md:text-3xl sm:text-2xl font-bold flex justify-center align-center tracking-tight">mukilteo robotics<span className="text-brandPink">.</span></h1>

        <div className="flex max-w-md justify-center align-center mt-20 lg:max-w-4xl md:max-w-2xl sm:max-w-lg text-center mx-auto fixed left-0 right-0">
            <h3 className="font-sans text-zinc-600 dark:text-slate-400 lg:text-xl font-light flex justify-center align-center tracking-tight mt-6 mx-8">VEX Robotics organization based in Mukilteo, Washington. </h3>
        </div>
      
      </motion.div>


      <motion.div
        style={{ shadow:colorSwapOp, backgroundColor: colorSwap, scale}}
        className=" w-[90%] m-12 ml-auto mr-auto top-24 mt-96 p-1 pt-8 bg-white h-2/5 shadow-2xl rounded-[40px] sticky z-[2]"
      >
        <div className="bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full h-5/6 absolute bottom-0 left-0"> </div>
        <motion.div style={{scale: scaleCard}} className=" w-full cardsBreak:w-fit">
        

                <Card className="w-full rounded-[25px] smMax:rounded-[20px] h-full border-[0] bg-transparent flex flex-wrap">

            <div className="flex ">

            <div className=" w-full cardsBreak:w-fit">
                <Card className="bg-black border-mrStep bg-opacity-10 rounded-3xl p-3 w-full cardsBreak:w-fit my-4 mt-1 cardsBreak:m-4 flex-1 sm:min-w-[427px]">
                  <CardHeader className="bg-black bg-opacity-0 border-zinc-200 rounded-3xl flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="">New Active Members</CardTitle>
                    <UserIcon />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold tracking-tight ">+23 Members</div>
                    <p className="text-xs text-muted-foreground mt-1.5 -mb-1.5">
                       +48% last year
                    </p>
                  </CardContent>

                </Card>

                <Card className="bg-black border-mrStep bg-opacity-10 rounded-3xl p-3 w-full cardsBreak:w-fit my-4 mt-1 cardsBreak:m-4 flex-1 sm:min-w-[427px]">
                  <CardHeader className="bg-black bg-opacity-0 border-zinc-200 rounded-3xl flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="">New Major Sponsors</CardTitle>
                    <TrendingUpp/>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold tracking-tight">+5 Sponsors</div>
                    <p className="text-xs text-muted-foreground mt-1.5 -mb-1.5">
                        +5x last year
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black border-mrStep bg-opacity-10 rounded-3xl p-3 w-full cardsBreak:w-fit my-4 mt-1 cardsBreak:m-4 flex-1 sm:min-w-[427px]">
                  <CardHeader className="bg-black bg-opacity-0 border-zinc-200 rounded-3xl flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="">Amount Fundraised</CardTitle>
                    <DollarIcon />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold tracking-tight">+ $23,301.05</div>
                    <p className="text-xs text-muted-foreground mt-1.5 -mb-1.5">
                        +3.71x last year
                    </p>
                  </CardContent>
                </Card>

             
              </div>

              <div className=" w-full cardsBreak:w-fit">
              <Card className="bg-black bg-opacity-10 border-mrStep rounded-3xl p-3 w-fit z-[6] relative my-4 cardsBreak:m-4 pb-1 cardsBreak:ml-0 h-fit smMax:h-fit flex-[1] min-w-[600px]">
                  <CardHeader className="bg-black bg-opacity-0 border-zinc-200 rounded-3xl">
                    <CardTitle className="">What is Mukilteo Robotics?</CardTitle>
                    <div className=" w-full h-full flex place-items-center mb-2.5">
                                            <CardDescription className=" mt-3">Mukilteo Robotics is a student-led non-profit organization located in Mukilteo, Washington. Their organization participates in VEX Robotics, a global competitive robotics program. As part of their program, members have the incredible opportunity to develop their STEM skills, completely free of charge. Students of different races, ethnicities, genders, and socio-economic backgrounds find common ground, united by their shared passion for robotics and the pursuit of STEM knowledge.</CardDescription>
                    </div>
                  
                  </CardHeader>
                  
                </Card>   


                <Card className="bg-black bg-opacity-10 border-mrStep rounded-3xl p-3 w-fit z-[6] relative my-4 cardsBreak:m-4  pb-1 cardsBreak:ml-0 h-fit smMax:h-fit flex-[1] min-w-[600px] ">

                  <CardContent>
                  <video className="w-screen h-auto max-w-full my-6">
                    <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                    
                  </CardContent>
                </Card>   


              </div>
             



            </div>

              

              

                

            

             

              
              {/* <CardContent>

              </CardContent>
              <CardFooter className="flex justify-between">

              </CardFooter> */}
            </Card>

            {/* <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Subscriptions
                    </CardTitle>
                    
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card> */}


                

             
        </motion.div>

              
      </motion.div>


      <motion.div
        
        className=" w-[100%] h-[140vh] sticky z-[2]"
      >


      </motion.div>



    
                

      


    </motion.section>

    <motion.section
        
        className="flex-col flex bg-gradient-to-b from-black via-black to-mrBack w-screen h-[150vh]"
       >






      


    </motion.section>

    </div>

    
    
  )
}