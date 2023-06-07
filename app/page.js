import { UserNav } from "@/components/ui/user-nav"
import { MainNav } from "@/components/ui/main-nav"

import Link from "next/link"

export default function Home() {
  return (
    <div className="hidden flex-col md:flex bg-black h-screen w-screen">
      <div className="border-b border-zinc-800">
        <div className="flex h-16 items-center px-4" >

        <div className="mr-auto ml-6 flex items-center space-x-4 ">

          <Link href={'/'} className="font-sans font-semibold hover:font-black transition-all text-lg">foym<span className="text-brandPink font-sans text-2xl" >.</span></Link>
        </div>
          <MainNav className="mx-6" />
          
        </div>
      </div>

      <div className="flex justify-center align-center">
        <h1 className="font-sans text-white lg:text-5xl md:text-3xl font-semibold flex justify-center align-center tracking-tight mt-36">focus on your mission, not your website<span className="text-brandPink font-sans font-semibold lg:text-5xl md:text-3xl sm:text-xl">.</span></h1>
      </div>

      <div className="flex justify-center align-center max-w-4xl text-center mx-auto">
        <h3 className="font-sans text-zinc-400 lg:text-xl font-light flex justify-center align-center tracking-tight mt-6">Our mission is to empower non-profit organizations & small businesses by providing them with websites that communicate their vision and help amplify their impact – and we do it for free. </h3>
      </div>
      

      

    </div>
    
  )
}