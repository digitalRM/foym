import Link from "next/link"
import { ButtonWithIcon } from "@/components/ui/button-home-contact"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Badge } from "@/components/ui/badge"

import { ProfileForm } from "@/components/ui/form-test"

import ComponentOne from "@/components/ui/component"
import NewHead  from "@/components/ui/header"
import ComponentTwo from "@/components/ui/componentTwo"
import ComponentThree from "@/components/ui/componentThree"
import WordChanger from "../components/ui/wordChanger"
import Footer from "@/components/ui/footer"






export const metadata = {
  title: 'Focus on Your Mission.',
  description: 'focus on your mission, not your website. Our mission is to empower non-profit organizations & small businesses by providing them with websites, for completely free.',
}
 

export default function Home() {
  return (
    <div className="relative bg-black">
        <NewHead />
       <div className="h-full w-screen my-[10px] sm:my-[148px] sm:mb-24 sm:p-0 p-4  bg-cover bg-center sm:bg-[url('./hero2x.webp')] z-[2] mt-48 relative">
          <div className="pb-32 pt-20 text-left sm:text-center lg:pt-44 mx-auto lg:max-w-7xl md:max-w-2xl sm:max-w-xl px-4 sm:px-6 lg:px-8 ">
            <h1 className="sm:mx-auto sm:max-w-3xl lg:text-7xl font-semibold max-w-[326px]   tracking-tighter text-white md:text-6xl sm:text-5xl text-left text-3xl sm:text-center">
              Focus On Your{' '}
              <span className="relative whitespace-nowrap text-neutral-100">
                <span id="change" className="relative italic hidden sm:inline-block"><WordChanger/></span>
                <span className="relative italic sm:hidden inline-block">Mission</span>
              </span>{' '}
              Not Your <span className="relative italic">Website<span className="relative text-brandPink">.</span></span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-lg tracking-tight text-neutral-400 ">
            We work with non-profits and other organizations to create free websites that help amplify their impact.
            </p>

            <div className="flex justify-center align-center max-w-4xl text-center mx-auto mt-6 flex-col sm:flex-row gap-4 sm:gap-0">
              <ButtonWithIcon />
            </div>
          </div>

            {/* <a href="#card" aria-label="Scroll Down" >
              <ScrollDown className='absolute bottom-0 left-0 right-0 z-[1] '  />
            </a>   */}
        </div>



      


      

      <div className="w-screen overflow-x-hidden border border-zinc-800 translate-y-8 md:translate-y-0 border-x-0 border-b-0 border-t-0 flex justify-evenly py-6 px-1 sm:px-4 lg:py-12 md:py-6 md:px-0 lg:flex-nowrap md:flex-wrap bg-white dark:bg-black relative">
      
      
      <div id="card" className="w-full rounded-[50px] border-zinc-800 flex flex-col items-center">
        <div className="w-full m-2 p-[0px] sm:p-[2px] relative h-fit max-w-[1440px] xl:max-w-[1480px]" >
          <div className="bg-gradient-to-r from-brandBlue to-brandPink flex lg:h-full w-full items-center justify-center bg-white dark:bg-black rounded-[50px] smMax:rounded-[40px] relative transition-all p-[1px]">
    
          
          <div className="absolute -inset-2 rounded-[50px] bg-gradient-to-r from-brandBlue to-brandPink opacity-40 blur-xl h-4/5"/>

            <Card className="w-full rounded-[50px] smMax:rounded-[40px] relative p-16 h-full border-[0] dark:bg-black smMax:p-3 z-[5]">
            
            <div className="xl:grid xl:grid-cols-2 xl:grid-rows-2 flex-col flex gap-4">

                <Card className="col-start-1 row-start-2 bg-black border-zinc-800 rounded-[32px] sm:rounded-3xl p-3 items-center flex justify-center h-fit xl:h-full">
                  <div className="w-full">
                  <CardHeader className="dark:bg-black border-zinc-200 rounded-3xl">
                    <CardTitle className="">Join our newsletter. <Badge variant="outline" className=" -translate-y-0.5 ml-1 border-brandPink">Soon</Badge></CardTitle>
                    <CardDescription className=" mt-3 max-w-lg">No spam – we promise. </CardDescription>
                  </CardHeader>

                  <div className="flex w-full max-w-[95%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 smMax:pr-6 relative smMax:flex-wrap">
                    <Input disabled type="email" className=' border-zinc-800 rounded-3xl pl-4 min-w-[180px]' placeholder="Email" />
                    
                  </div>  
                  </div>
                </Card>

                <Card className="col-start-1 row-start-1 bg-black border-zinc-800 rounded-3xl p-3">
                  <CardHeader className="dark:bg-black border-zinc-200 rounded-3xl">
                    <CardTitle className=" font-semibold">Creating a positive impact shouldn't be a challenge.</CardTitle>
                    <CardDescription className=" mt-8 text-neutral-400 max-w-xl">Your time is valuable to every single person affected by your actions, so why waste it learning the intricacies of web development for a simple landing page? Why should you be forced to pay a hefty monthly fee for a no-code choice?<br/><br/> If you need more than a few pages, those options might be perfect for your organization; if not, don't waste your time or money – let us help.</CardDescription>
                  </CardHeader>

                </Card>
                <Card className="row-span-2 col-start-2 xl:h-auto h-96 md:h-[486px]  relative row-start-1 p-9 bg-black border-zinc-800 rounded-3xl bg-[url('./starBox.png')] bg-cover">
                  <Dialog>
                  <Button variant="outline" className=" bottom-9 left-9 absolute border-zinc-800 bg-white hover:bg-neutral-200 text-black hover:text-black  w-24" asChild>
                    <DialogTrigger className="">
                      Apply
                    </DialogTrigger>
                  </Button>
                  <DialogContent className="sm:max-w-[525px] bg-black border-zinc-800 min-w-[43%]">
                    <DialogHeader>
                      <DialogTitle>Contact Us</DialogTitle>
                      <DialogDescription>
                        We'll get back to you as soon as possible.
                      </DialogDescription>
                    </DialogHeader>
                      <ProfileForm />
                  </DialogContent>
                </Dialog>
                  

                </Card>
            </div>
  
            </Card>

            <div className="bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full h-[200px] absolute bottom-0 left-0">

            </div>
          </div>
        </div>

          

        <div className="w-full m-2 p-[0px] sm:p-[2px] relative h-fit max-w-[1440px] xl:max-w-[1480px] z-[3]" >
          <div className="relative">
          <div className="absolute inset-3 scale-[1.015] rounded-[50px] from-10% to-90% bg-gradient-to-r from-transparent via-brandBlue to-transparent opacity-50 blur-xl h-full"/>

            <div className="absolute -inset-0 scale-[1.02] rounded-[50px] from-10% to-90% bg-gradient-to-b from-transparent via-brandBlue to-transparent opacity-40 blur-xl h-full"/>

            <div className="overflow-hidden rounded-[30px] bg-gradient-to-r from-transparent from-10% via-brandBlue  to-black to-90% backdrop-blur-xl  z-[2] relative p-[1px]">
              
              <div id="benefits" className="overflow-hidden rounded-[30px] bg-gradient-to-b from-transparent from-10% via-brandBlue  to-black to-90% backdrop-blur-xl  z-[2] relative p-[1px]">
                <ComponentOne /> 
              </div>
            </div> 
           
          </div>
        </div>

        <div className="w-full m-2 p-[0px] sm:p-[2px] relative h-fit max-w-[1440px] xl:max-w-[1480px]" >
          <div className="relative">
            <div className="absolute -inset-2 rounded-[50px] bg-gradient-to-b from-transparent from-10% to-90% via-brandPinkStep6 to-transparent opacity-50 blur-xl h-full"/>
            <div id="join" className="overflow-hidden rounded-[30px] bg-gradient-to-b from-transparent from-10% to-90% via-brandPinkStep6 to-black backdrop-blur-xl  z-[2] relative p-[1px]">
              <ComponentTwo />
            </div>         
          </div>
        </div>


          {/* <div className="overflow-hidden rounded-[30px] bg-gradient-to-b from-transparent from-12% via-brandPinkStep3  to-black to-88% backdrop-blur-xl  z-[2] relative p-[1px]">
            <ComponentFour />
          </div> */}


        <div className="w-full m-2 p-[0px] sm:p-[2px] relative h-fit max-w-[1440px] xl:max-w-[1480px] z-[3]" >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[50px] translate-y-1 bg-gradient-to-r from-10% to-90% from-transparent via-brandPink to-transparent opacity-40 blur-xl h-full"/>
            
            <div className="absolute -inset-0 scale-[1.02] rounded-[50px] bg-gradient-to-b from-10% to-90% from-transparent via-brandPink to-transparent opacity-40 blur-xl h-full"/>

            <div className="overflow-hidden rounded-[30px] bg-gradient-to-b from-transparent from-10% via-brandPink  to-black to-90% backdrop-blur-xl  z-[2] relative p-[1px]">
              
            
            <div id="faq" className="overflow-hidden rounded-[30px] bg-gradient-to-r from-transparent from-10% via-brandPink  to-black to-90% backdrop-blur-xl  z-[2] relative py-[1px]">
              <ComponentThree />
            </div>
            </div>
          </div>
        </div>
          
        <div className="w-full m-2 p-[0px] sm:p-[2px] relative h-fit max-w-[1440px] xl:max-w-[1480px] z-0" >
          <div className="bg-gradient-to-r from-brandPink to-brandBlue flex lg:h-full w-full items-center justify-center bg-white rounded-[50px] smMax:rounded-[40px] relative transition-all p-[1px] ">
          <div className="absolute -inset-2 top-32 rounded-[50px] bg-gradient-to-r to-brandBlue from-brandPink opacity-40 blur-xl h-[7%]"/>
            <Card className="w-full bg-black shadow-none  overflow-hidden rounded-[50px] smMax:rounded-[40px] relative h-full border-[0]  flex flex-wrap p-3 md:p-4 lg:p-0 z-10">
              <div className="mx-auto  w-full ">
                <div className="relative isolate overflow-hidden  mx-auto max-w-7xl px-6 py-8 md:py-16 lg:py-12 lg:px-8 md:pt-12">
                  
                  <div className="mx-auto max-w-[986px] lg:mx-0 lg:flex-auto lg:py-24 text-left">
                    <h2 className="text-2xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
                    Spend more time doing the things you're passionate about<span className="text-brandPink">.</span>
                      
                    </h2>
                    <p className="mt-6 text-lg max-w-[840px] leading-8 text-neutral-400">
                      If that's coding, design, or writing, consider joining our team! If you're in need of a website, apply for one today. We'll take care of the technical stuff so you can focus on what you do best.
                    </p>


                  
                    <div className="mt-6 gap-3 flex md:flex-row flex-col md:justify-start">
                    <Button variant="outline" className=" border-zinc-800 bg-white hover:bg-neutral-200 text-black hover:text-black w-full md:w-24" asChild>              
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLScviDVRqq-U7dgOjmwMXaPbc_bemIEi7HDj2ESmC2_wHjD3sQ/viewform?usp=sf_link">Apply</a>
                    </Button>
                    <Button variant="outline" className=" border-zinc-800 hover:bg-zinc-900 bg-black w-full md:w-24 " asChild>              
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfijcsbyMfWcblc6fBknXn5CuP967v603C93MaXbi0-2kpYOQ/viewform?usp=sf_link">Join Us</a>
                    </Button>
                    </div>
                   
                  </div>

                </div>
              </div>
            </Card>

            <div className="bg-gradient-to-t dark:from-transparent dark:via-black/50 to-50% dark:to-black w-full h-[200px] absolute top-0 left-0" />
          </div>
        </div> 
          
           

          

        <div className="w-full m-2 p-[0px] sm:p-[2px] relative h-fit max-w-[1440px] xl:max-w-[1480px]" >
          <div className="overflow-hidden rounded-[30px]  h-28  z-[-1] relative p-[1px]"/>
          <Footer />    
        </div>                       
      </div>
    </div>    
  </div>
  )
}