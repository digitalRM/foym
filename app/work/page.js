
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

import mrImage from "@/public/muk.jpeg"
import waImage from "@/public/wa.jpeg"
import plImage from "@/public/planet.jpeg"
import portfolioImage from "@/public/portfolio.jpeg"

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
              <div className="w-full grid lg:grid-cols-2 gap-4">
              <CardHeader className="dark:bg-black rounded-[50px] flex flex-wrap flex-row sm:gap-6 gap-3 p-3 pt-2 sm:p-12 lg:pr-0 sm:pb-0">
                <Card className="dark:bg-black w-1/3 rounded-[32px] p-1 sm:p-3 z-[6] relative my-2 mb-0 flex-1 min-w-[100%] md:min-w-[50%] flex flex-wrap">
                  <CardHeader className="dark:bg-black rounded-3xl">
                    <CardTitle className="tracking-tight text-base md:text-2xl">Mukilteo Robotics</CardTitle>
                    <CardDescription className=" mt-3 ">Mukilteo Robotics is a student-led non-profit organization located in Mukilteo, Washington. Their organization participates in VEX Robotics, a global competitive robotics program. As part of their program, members have the incredible opportunity to develop their STEM skills, completely free of charge. students of different races, ethnicities, genders, and socio-economic backgrounds find common ground, united by their shared passion for robotics and the pursuit of STEM. </CardDescription>
                  </CardHeader>
                  <div className="flex w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 mb-2  relative smMax:flex-wrap">
                    <ButtonWithIconWork link="https://mukilteorobotics.org" />
                  </div>  

                  <div className="group w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 mb-2  relative smMax:flex-wrap">
                    {/* <Badge variant='outline' className=" g ml-1 translate-y-7 translate-x-4 font-sans  opacity-100 relative z-10 border-zinc-600 cursor-pointer">View More</Badge> */}
                  
                    <Image 
                      src="/muk.jpeg"
                      priority
                      width='586'
                      height='360'
                      className=' rounded-2xl transition-all border border-neutral-800 mt-4'
                      alt="An image of the Mukilteo Robotics website designed by Ruslan Mukhamedvaleev."
                    /> 
                  </div>
                </Card>


              

                

              </CardHeader>
              <CardHeader className="dark:bg-black rounded-[50px] flex flex-wrap flex-row sm:gap-6 gap-3 p-3 pt-2 sm:p-12 lg:pl-0 sm:pb-0">
                <Card className="dark:bg-black w-1/3 rounded-[32px] p-1 sm:p-3 z-[6] relative my-2 mb-0 flex-1 min-w-[100%] md:min-w-[50%] flex flex-wrap">
                  <CardHeader className="dark:bg-black rounded-3xl">
                    <CardTitle className="tracking-tight text-base md:text-2xl">Washington Youth Alliance</CardTitle>
                    <CardDescription className=" mt-3" >The Washington Youth Alliance is a student-led advocacy organization that empowers young people to engage in the political process while also advocating for their rights as young citizens of their state. Their organization is also dedicated to empowering youth across Washington State by fostering essential life skills, promoting digital literacy, and preparing young people for their educational and career futures.</CardDescription>
                  </CardHeader>
                  <div className="flex w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 md:mt-5 pt-0 pl-1 mb-2  relative smMax:flex-wrap ">
                    <ButtonWithIconWork link="https://washingtonyouthalliance.org" />
                  </div>  

                  <div className="group w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 mb-2  relative smMax:flex-wrap">
                    {/* <Badge variant='outline' className=" g ml-1 translate-y-7 translate-x-4 font-sans  opacity-100 relative z-10 border-zinc-600 cursor-pointer">View More</Badge> */}
                  
                    <Image 
                      src="/wa.jpeg"
                      priority
                      width='586'
                      height='360'
                      className=' rounded-2xl transition-all border border-neutral-800 mt-4'
                      alt="An image of the Washington Youth Alliance website designed by Ruslan Mukhamedvaleev."
                    /> 
                  </div>
                </Card>


              

                

              </CardHeader>
              <CardHeader className="dark:bg-black rounded-[50px] flex flex-wrap flex-row sm:gap-6 gap-3 p-3 sm:p-12 lg:pr-0 sm:py-0 ">
                <Card className="dark:bg-black w-1/3 rounded-[32px] p-1 sm:p-3 z-[6] relative my-2 mb-0 flex-1 min-w-[100%] md:min-w-[50%] flex flex-wrap">
                  <CardHeader className="dark:bg-black rounded-3xl">
                    <CardTitle className="tracking-tight text-base md:text-2xl">The Portfolio - An FOYM<span className="text-brandPink lg:text-4xl">.</span> Template</CardTitle>
                    <CardDescription className=" mt-3 " >This is the first template we have created for our clients—the first of many to come. It is a simple, clean, modern website modeled after a resume, perfect for showcasing your work. It is fully responsive and works on all devices. It is also fully customizable and easy to use. You can use it to create a portfolio that showcases your work to potential clients and employers. </CardDescription>
                  </CardHeader>
                  <div className="flex w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 sm:mt-6 pt-0 pl-1 mb-2  relative smMax:flex-wrap">
                    <ButtonWithIconWork link="https://portfolio.foym.org" />
                    <ButtonWithIconWork link="https://github.com/digitalRM/FOYM-Portfolio" color="code" />
                  </div>  

                  <div className="group w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 mb-2  relative smMax:flex-wrap">
                    {/* <Badge variant='outline' className=" g ml-1 translate-y-7 translate-x-4 font-sans  opacity-100 relative z-10 border-zinc-600 cursor-pointer">View More</Badge> */}
                  
                    <Image 
                      src='/portfolio.jpeg'
                      
                      width="586"
                      height="360"
                      className=' rounded-2xl transition-all border border-neutral-800 mt-4'
                      alt="An image of the Portfolio template website designed by Ruslan Mukhamedvaleev."
                    /> 
                  </div>
                </Card>


              

                

              </CardHeader>
              <CardHeader className="dark:bg-black rounded-[50px] flex flex-wrap flex-row sm:gap-6 gap-3 p-3 sm:p-12 lg:pl-0 sm:py-0 ">
                <Card className="dark:bg-black w-1/3 rounded-[32px] p-1 sm:p-3 z-[6] relative my-2 mb-0 flex-1 min-w-[100%] md:min-w-[50%] flex flex-wrap">
                  <CardHeader className="dark:bg-black rounded-3xl">
                    <CardTitle className="tracking-tight text-base md:text-2xl">Green Planet - An FOYM<span className="text-brandPink lg:text-4xl">.</span> Template</CardTitle>
                    <CardDescription className=" mt-3 " >This is the second template that we have created for our clients that is fully open source. It’s modeled after a made-up environmental organization called “Green Planet.” It is entirely responsive, works on all devices, and is fully customizable. You can use it to showcase your organization, group, nonprofit, or anything else.  </CardDescription>
                  </CardHeader>
                  <div className="flex w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 sm:mt-6 pt-0 pl-1 mb-2  relative smMax:flex-wrap">
                    <ButtonWithIconWork link="https://planet.foym.org" />
                    <ButtonWithIconWork link="https://github.com/digitalRM/FOYM-Green-Planet" color="code" />
                  </div>  

                  <div className="group w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 mb-2  relative smMax:flex-wrap">
                    {/* <Badge variant='outline' className=" g ml-1 translate-y-7 translate-x-4 font-sans  opacity-100 relative z-10 border-zinc-600 cursor-pointer">View More</Badge> */}
                  
                    <Image 
                      src='/planet.jpeg'
                      width='586'
                      height='360'
                      className=' rounded-2xl transition-all border border-neutral-800 mt-4'
                      alt="An image of the Green Planet template website designed by Ruslan Mukhamedvaleev."
                    /> 
                  </div>
                </Card>


              

                

              </CardHeader>
              <CardHeader className="dark:bg-black rounded-[50px] flex flex-wrap flex-row sm:gap-6 gap-3 p-3 sm:p-12 lg:pr-0 sm:py-0 ">
                <Card className="dark:bg-black w-1/3 rounded-[32px] p-1 sm:p-3 z-[6] relative my-2 mb-0 flex-1 min-w-[100%] md:min-w-[50%] flex flex-wrap">
                  <CardHeader className="dark:bg-black rounded-3xl">
                    <CardTitle className="tracking-tight text-base md:text-2xl">Blue Ocean - An FOYM<span className="text-brandPink lg:text-4xl">.</span> Template</CardTitle>
                    <CardDescription className=" mt-3 " >This is the third fully open-source template we have created for our clients. Its design is very similar to “Green Planet,” one of the other FOYM templates. This template is modeled on a different but made-up environmental organization called “Blue Ocean.” </CardDescription>

                  </CardHeader>
                  <div className="flex w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 sm:mt-6 pt-0 pl-1 mb-2  relative smMax:flex-wrap">
                    <ButtonWithIconWork link="https://ocean.foym.org" />
                    <ButtonWithIconWork link="https://github.com/digitalRM/FOYM-Blue-Ocean" color="code" />
                  </div>  

                  <div className="group w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 mb-2  relative smMax:flex-wrap">
                    {/* <Badge variant='outline' className=" g ml-1 translate-y-7 translate-x-4 font-sans  opacity-100 relative z-10 border-zinc-600 cursor-pointer">View More</Badge> */}
                  
                    <Image 
                      src='/ocean.jpeg'
                      width='586'
                      height='360'
                      className=' rounded-2xl transition-all border border-neutral-800 mt-4'
                      alt="An image of the Blue Ocean template website designed by Ruslan Mukhamedvaleev."
                    /> 
                  </div>
                </Card>


              

                

              </CardHeader>

              <CardHeader className="dark:bg-black rounded-[50px] flex flex-wrap flex-row sm:gap-6 gap-3 p-3 sm:p-12 lg:pr-0 sm:py-0 ">
                <Card className="dark:bg-black w-1/3 rounded-[32px] p-1 sm:p-3 z-[6] relative my-2 mb-0 flex-1 min-w-[100%] md:min-w-[50%] flex flex-wrap">
                  <CardHeader className="dark:bg-black rounded-3xl">
                    <CardTitle className="tracking-tight text-base md:text-2xl">Volunteer Today - An FOYM<span className="text-brandPink lg:text-4xl">.</span> Template</CardTitle>
                    <CardDescription className=" mt-3 " >This is the fourth fully open-source template we have created. This is a template for organizations modeled after a made-up volunteering nonprofit called “Volunteer Today.” It features a bento hero section, a double stacked informational section, and a call-to-action card.</CardDescription>

                  </CardHeader>
                  <div className="flex w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 sm:mt-6 pt-0 pl-1 mb-2  relative smMax:flex-wrap">
                    <ButtonWithIconWork link="https://volunteer.foym.org" />
                    <ButtonWithIconWork link="https://github.com/digitalRM/FOYM-Volunteer-Today" color="code" />
                  </div>  

                  <div className="group w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 mb-2  relative smMax:flex-wrap">
                    {/* <Badge variant='outline' className=" g ml-1 translate-y-7 translate-x-4 font-sans  opacity-100 relative z-10 border-zinc-600 cursor-pointer">View More</Badge> */}
                  
                    <Image 
                      src='/volunteer.jpeg'
                      width='586'
                      height='360'
                      className=' rounded-2xl transition-all border border-neutral-800 mt-4'
                      alt="An image of the Volunteer Today template website designed by Ruslan Mukhamedvaleev."
                    /> 
                  </div>
                </Card>


              

                

              </CardHeader>
              </div>
              
              
              <div>
                
  <div className="bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-screen -ml-4 h-4/5 absolute bottom-0 -right-48"> </div>

              </div>

              

            <div className="z-10 pb-24 relative -mb-1 bg-black -bottom-0.5 overflow-hidden w-full">
              <Footer className='' />
            </div>
              
              
            </Card>    

           


            </div>
          </div>
        </div>
      </div>

      
    
  )
}