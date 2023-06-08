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


export default function Home() {
  return (
    <div className="hidden flex-col md:flex bg-white dark:bg-black h-screen w-screen">
      <div className="border-b border-zinc-800">
        <div className="flex h-16 items-center px-4" >

        <div className="mr-auto ml-6 flex items-center space-x-4 ">

          <Link href={'/'} className="font-sans font-semibold hover:font-black transition-all text-black dark:text-white text-lg">foym<span className="text-brandPink font-sans text-2xl" >.</span></Link>
        </div>
          <MainNav className="mx-6 bg-white dark:bg-black" />
          
        </div>
      </div>

      <div className="flex justify-center align-center">
        <h1 className="font-sans text-black dark:text-white lg:text-5xl md:text-3xl font-bold flex justify-center align-center tracking-tight mt-36">focus on your mission, not your website<span className="text-brandPink font-sans font-semibold lg:text-5xl md:text-3xl sm:text-xl">.</span></h1>
      </div>

      <div className="flex justify-center align-center max-w-4xl text-center mx-auto">
        <h3 className="font-sans text-zinc-600 dark:text-zinc-400 lg:text-xl font-light flex justify-center align-center tracking-tight mt-6">Our mission is to empower non-profit organizations & small businesses by providing them with websites that communicate their vision and help amplify their impact – and we do it for free. </h3>
      </div>

      <div className="flex justify-center align-center max-w-4xl text-center mx-auto mt-6 mb-36">
        <ButtonWithIcon />
      </div>

      <div className="w-screen h-screen border border-zinc-800 flex justify-evenly p-3 lg:flex-nowrap md:flex-wrap bg-white dark:bg-black">
      
      
      <div className="w-full  rounded-lg m-2 h-[400px]  border-zinc-800 mx-2 p-[2px]">
          <div className="bg-gradient-to-r from-brandBlue to-brandPinkStep6 flex h-full w-full items-center justify-center bg-white dark:bg-black rounded-[9px] transition-all p-[2px]">
            <Card className="w-full rounded-lg p-2 h-full border-[0] dark:bg-black ">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent>

              </CardContent>
              <CardFooter className="flex justify-between">

              </CardFooter>
            </Card>
          </div>
        </div>       

      <div className="w-full  rounded-lg m-2 h-[400px]  border-zinc-800 mx-2 p-[2px]">
          <div className="bg-gradient-to-r from-brandPinkStep6 to-brandPinkStep4 flex h-full w-full items-center justify-center bg-white dark:bg-black rounded-[9px] p-[2px]">
            <Card className="w-full rounded-lg p-2 h-full  border-[0] dark:bg-black ">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent>

              </CardContent>
              <CardFooter className="flex justify-between">

              </CardFooter>
            </Card>
          </div>
        </div>


        <div className="w-full  rounded-lg m-2 h-[400px]  border-zinc-800 mx-2 p-[2px]">
          <div className="bg-gradient-to-r from-brandPinkStep4 to-brandPinkStep3 flex h-full w-full items-center justify-center bg-white dark:bg-black rounded-[9px] p-[2px]">
            <Card className="w-full rounded-lg p-2 h-full  border-[0] dark:bg-black ">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent>

              </CardContent>
              <CardFooter className="flex justify-between">

              </CardFooter>
            </Card>
          </div>
        </div>
        
      
      <div className="w-full  rounded-lg m-2 h-[400px]  border-zinc-800 mx-2 p-[2px]">
          <div className="bg-gradient-to-r from-brandPinkStep1 to-brandPink flex h-full w-full items-center justify-center bg-white dark:bg-black rounded-[9px] p-[2px]">
            <Card className="w-full rounded-lg p-2 h-full border-[0] dark:bg-black">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent>

              </CardContent>
              <CardFooter className="flex justify-between">

              </CardFooter>
            </Card>
          </div>
        </div>
      
      
      


        

  

        

                 
      </div>

      

      

    </div>

    
    
  )
}