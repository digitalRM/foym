import { UserNav } from "@/components/ui/user-nav"
import { MainNav } from "@/components/ui/main-nav"

export default function Home() {
  return (
    <div className="hidden flex-col md:flex bg-black">
      <div className="border-b border-zinc-800">
        <div className="flex h-16 items-center px-4" >

        <div className="mr-auto ml-6 flex items-center space-x-4 ">
          
          <h1 className="font-sans font-bold">foym<span className="">.</span></h1>
        </div>
          <MainNav className="mx-6 bg-zinc-950" />
          
        </div>
      </div>
    </div>
    
  )
}