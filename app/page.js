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


export default function Home() {
  return (
    <div className="flex-col flex bg-white dark:bg-black h-screen w-screen overflow-x-hidden">
      <div className="border-b border-zinc-800 w-screen fixed backdrop-blur-sm">
        <div className="flex h-16 items-center px-4" >

        <div className="mr-auto ml-6 flex items-center space-x-4 ">

          <Link href={'/'} className="font-sans font-semibold hover:font-black transition-all text-black dark:text-white text-lg">foym<span className="text-brandPink font-sans text-2xl" >.</span></Link>
        </div>
          <MainNav className="mx-6 bg-white dark:bg-black" />
          
        </div>
      </div>

      <div className="flex justify-center align-center">
        <h1 className="font-sans text-xl  text-black dark:text-white lg:text-5xl md:text-3xl sm:text-xl font-bold flex justify-center align-center tracking-tight mt-52">focus on your mission, not your website<span className="text-brandPink font-sans font-semibold lg:text-5xl md:text-3xl sm:text-xl">.</span></h1>
      </div>

      <div className="flex max-w-md justify-center align-center lg:max-w-4xl md:max-w-2xl sm:max-w-lg   text-center mx-auto">
        <h3 className="font-sans text-zinc-600 dark:text-zinc-400 lg:text-xl font-light flex justify-center align-center tracking-tight mt-6">Our mission is to empower non-profit organizations & small businesses by providing them with websites that communicate their vision and help amplify their impact – and we do it for free. </h3>
      </div>

      <div className="flex justify-center align-center max-w-4xl text-center mx-auto mt-6 mb-36">
        <ButtonWithIcon />
      </div>

      <div className="w-screen h-screen border border-zinc-800 border-x-0 border-b-0 flex justify-evenly p-6 px-0 lg:p-12 md:px-6 sm:px-0 lg:flex-nowrap md:flex-wrap bg-white dark:bg-black relative">
      
      
      <div className="w-full m-2 h-[600px] rounded-[50px] border-zinc-800 mx-2 p-[2px] relative">
          <div className="bg-gradient-to-r from-brandBlue to-brandPink flex h-full w-full items-center justify-center bg-white dark:bg-black rounded-[50px] dark:rounded-[50px] transition-all p-[1px]">
            <Card className="w-full rounded-[50px] p-12 h-full border-[0] dark:bg-black flex flex-wrap">

              <div className=" w-full cardsBreak:w-fit ">
                <Card className="dark:bg-black border-zinc-800 rounded-3xl p-3 w-full cardsBreak:w-fit my-4 cardsBreak:m-4 flex-1 min-w-[477px]">
                  <CardHeader className="dark:bg-black border-zinc-200 rounded-3xl">
                    <CardTitle className="">Creating a positive impact shouldn't be a challenge.</CardTitle>
                    <CardDescription className=" mt-3 max-w-lg">That's why we firmly believe that your valuable time is best spent pursuing your mission, rather than being wasted on website development. Break boundaries, change lives, and do what you do best – don’t worry about the rest.</CardDescription>

                  </CardHeader>
                </Card>

                <Card className="dark:bg-black border-zinc-800 rounded-3xl p-3 w-full cardsBreak:w-[586px] z-10 relative my-4 mb-0 cardsBreak:m-4 flex-1 min-w-[477px]">
                  <CardHeader className="dark:bg-black border-zinc-200 rounded-3xl">
                    <CardTitle className="">Join our newsletter.</CardTitle>
                    <CardDescription className=" mt-3 max-w-lg">No spam – we promise. </CardDescription>

                  </CardHeader>

                  <div className="flex w-full max-w-[95%] items-center space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 relative">
                    <Input type="email" className=' border-zinc-800 rounded-3xl pl-4' placeholder="Email" />
                    <Button type="submit" className="rounded-3xl">Subscribe</Button>
                  </div>   
                </Card>

             
              </div>

                <Card className="dark:bg-black border-zinc-800 rounded-3xl p-3 w-fit z-10 relative my-4 cardsBreak:m-4 cardsBreak:ml-0 flex-1 min-w-[50%] h-[376px]">
                  <CardHeader className="dark:bg-black border-zinc-200 rounded-3xl">
                    <CardTitle className="">Creating a positive impact shouldn't be a challenge.</CardTitle>
                    <CardDescription className=" mt-3">That's why we firmly believe that your valuable time is best spent pursuing your mission, rather than being wasted on website development. Break boundaries, change lives, and do what you do best – don’t worry about the rest.</CardDescription>

                  </CardHeader>
                </Card>   

             

              
              {/* <CardContent>

              </CardContent>
              <CardFooter className="flex justify-between">

              </CardFooter> */}
            </Card>

            <div className="bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full h-1/2 absolute bottom-0 left-0">

            </div>
          </div>

          
        </div>       

      

        


        

  

        

                 
      </div>

      

      

    </div>

    
    
  )
}