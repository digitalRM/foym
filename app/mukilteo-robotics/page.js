'use client'
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

import { useScroll, useTransform, motion } from "framer-motion";

import { useRef, useEffect } from "react"

import mrImage from "../mukPhoto.jpeg"

import Image from "next/image"
 

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
    const padding = useTransform(scrollYProgress, [0, .4], [6, 12] )
    
    
  
  return (
   

    <div>

<motion.section
        
        className=" bg-gradient-to-b from-black to-mrBack w-screen h-[250vh]"
        ref={targetRef}>

    <div className="border-b border-zinc-800 w-screen fixed backdrop-blur-sm z-10 smMax:backdrop-blur-xl top-0">
        <div className="flex h-16 items-center px-4" >

        <div className="mr-auto ml-6 flex items-center space-x-4 ">

          <Link href={'/'} className="font-sans font-semibold hover:font-black transition-all text-black dark:text-white text-lg">foym<span className="text-brandPink font-sans text-2xl" >.</span></Link>
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
        style={{ shadow:colorSwap, backgroundColor: colorSwap, scale}}
        className=" w-[90%] m-12 ml-auto mr-auto top-24 mt-96 p-12 bg-white h-2/5 shadow-2xl rounded-3xl sticky z-[2]"
      >
        <motion.div style={{scale: scaleCard}} className=" w-full cardsBreak:w-fit">
                <Card className="w-full rounded-[25px] smMax:rounded-[20px] h-full border-[0] bg-transparent flex flex-wrap">

              <div className=" w-full cardsBreak:w-fit">
                <Card className="bg-black border-mrStep bg-opacity-10 rounded-3xl p-3 w-full cardsBreak:w-fit my-4 mt-1 cardsBreak:m-4 flex-1 sm:min-w-[477px]">
                  <CardHeader className="bg-black bg-opacity-0 border-zinc-200 rounded-3xl">
                    <CardTitle className="">Creating a positive impact shouldn't be a challenge.</CardTitle>
                    <CardDescription className=" mt-3 max-w-lg">That's why we firmly believe that your valuable time is best spent pursuing your mission, rather than being wasted on website development. Break boundaries, change lives, and do what you do best – don’t worry about the rest.</CardDescription>

                  </CardHeader>
                </Card>

                <Card className="bg-black border-mrStep bg-opacity-10 rounded-3xl p-3 w-full cardsBreak:w-[586px] z-[6] relative my-4 mb-0 cardsBreak:m-4 flex-1 sm:min-w-[477px]">
                  <CardHeader className="bg-black bg-opacity-0 border-zinc-200 rounded-3xl">
                    <CardTitle className="">Join our newsletter. <Badge variant="outline" className=" -translate-y-0.5 ml-1 border-brandPink">Soon</Badge></CardTitle>
                    <CardDescription className=" mt-3 max-w-lg">No spam – we promise. </CardDescription>

                  </CardHeader>

                  <div className="flex w-full max-w-[95%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 smMax:pr-6 relative smMax:flex-wrap">
                    <Input disabled type="email" className=' border-zinc-800 rounded-3xl pl-4 min-w-[180px]' placeholder="Email" />
                    <Button disabled type="submit" className=" rounded-3xl smMax:mt-2  smMax:w-full">Subscribe</Button>
                  </div>   
                </Card>

             
              </div>

                <Card className="bg-black bg-opacity-10 border-mrStep rounded-3xl p-3 w-fit z-[6] relative my-4 cardsBreak:m-4 cardsBreak:ml-0 flex-1 min-w-[50%] h-[376px] smMax:h-fit">
                  <CardHeader className="bg-black bg-opacity-0 border-zinc-200 rounded-3xl">
                    <CardTitle className="">Even small actions lead to big impact.</CardTitle>
                    <CardDescription className=" mt-3">Widespread change begin locally, driven by non-profits like yours. Small actions cultivate over time, leading to progress. Our world isn’t perfect, and it probably won’t ever be, but we hold the power to leave it just a little better than found it.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full border-zinc-800">
                      <AccordionItem value="item-1" className="border-zinc-800">
                        <AccordionTrigger>Is this really free?</AccordionTrigger>
                        <AccordionContent  className=" text-slate-400">
                          Yes. Consider it a little thank you for your contributions to the world!
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-zinc-800">
                        <AccordionTrigger>Who is eligible?</AccordionTrigger>
                        <AccordionContent className=" text-slate-400">
                          Non-Profit organizations & small businesses. 501(c)(3) designation not currently required.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border-zinc-800 text-left">
                        <AccordionTrigger className="text-left">Do you provide hosting?</AccordionTrigger>
                        <AccordionContent  className=" text-slate-400">
                         Sadly we are unable to provide hosting at this time, but we will guide you through the process!
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>   

             

              
              {/* <CardContent>

              </CardContent>
              <CardFooter className="flex justify-between">

              </CardFooter> */}
            </Card>

             
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