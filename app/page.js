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

import { ProfileForm } from "@/components/ui/form-test"
import { ScrollDown } from "@/components/ui/scroll-down"




export const metadata = {
  title: 'foym.',
  description: 'focus on your mission, not your website. Our mission is to empower non-profit organizations & small businesses by providing them with websites, for completely free.',
}
 

export default function Home() {

  
  return (
    <div className="flex-col flex bg-white dark:bg-black h-screen w-screen overflow-x-hidden scroll-smooth">
      <div className="border-b border-zinc-800 w-screen fixed backdrop-blur-sm z-10 smMax:backdrop-blur-xl">
        <div className="flex h-16 items-center px-4" >

        <div className="mr-auto ml-6 flex items-center space-x-4 ">

          <Link href={'/'} className="font-sans font-semibold hover:font-bold transition-all text-black dark:text-white text-lg">foym<span className="text-brandPink font-sans text-2xl" >.</span></Link>
        </div>
          <MainNav className="mx-6 bg-transparent dark:bg-transparent" />
          
        </div>
      </div>



      <div className="h-[200vh] w-screen my-[10px] sm:my-[148px] bg-[url('./hero_2x.webp')] bg-cover bg-center bg-no-repeat ">
        <div className="flex justify-center align-center flex-col mt-52 max-w-[300px] sm:max-w-none mx-auto text-center">
          <h1 className="font-sans text-3xl text-black dark:text-white lg:text-5xl md:text-3xl sm:text-3xl font-bold flex justify-center align-center tracking-tighter smMax:hidden">focus on your mission, not your website<span className="text-brandPink">.</span></h1>
          <h1 className="font-sans text-3xl text-black dark:text-white lg:text-5xl md:text-3xl sm:text-3xl font-bold flex justify-center align-center tracking-tighter hidden smMax:block">focus on your mission, not your website.</h1>

        </div>

      <div className="flex max-w-md justify-center align-center lg:max-w-[900px] md:max-w-2xl sm:max-w-lg   text-center mx-auto">
        <h2 className="font-sans text-zinc-400 lg:text-xl font-light flex justify-center align-center tracking-tight mt-6 mx-8">Our mission is to empower non-profit organizations & small businesses by providing them with websites that communicate their vision and help amplify their impact – and we do it for free. </h2>
      </div>

      <div className="flex justify-center align-center max-w-4xl text-center mx-auto mt-6 mb-64">
        <ButtonWithIcon />
      </div>
      </div>

      <a href="#card" aria-label="Scroll Down" >
        <ScrollDown className='absolute bottom-0 left-0 right-0 z-[1] '  />
      </a>  

      


      

      <div className="w-screen h-screen border border-zinc-800 border-x-0 border-b-0 border-t-0 flex justify-evenly p-6 px-0 lg:p-12 md:px-6 sm:px-0 lg:flex-nowrap md:flex-wrap bg-white dark:bg-black ">
      
      
      <div id="card" className="w-full m-2 h-[600px] rounded-[50px] border-zinc-800 mx-2 p-[2px] relative">
          <div className="bg-gradient-to-r from-brandBlue to-brandPink flex h-full w-full items-center justify-center bg-white dark:bg-black rounded-[50px] smMax:rounded-[40px]  transition-all p-[1px]">
            <Card className="w-full rounded-[50px] smMax:rounded-[40px] p-12 h-full border-[0] dark:bg-black flex flex-wrap smMax:p-3">

              <div className=" w-full cardsBreak:w-fit">
                <Card className="dark:bg-black  border-zinc-800 rounded-3xl p-3 w-full cardsBreak:w-fit my-4 mt-1 cardsBreak:m-4 flex-1 sm:min-w-[477px]">
                  <CardHeader className="dark:bg-black  border-zinc-200 rounded-3xl">
                    <CardTitle className="">Creating a positive impact shouldn't be a challenge.</CardTitle>
                    <CardDescription className=" mt-3 max-w-lg">That's why we firmly believe that your valuable time is best spent pursuing your mission, rather than being wasted on website development. Break boundaries, change lives, and do what you do best – don’t worry about the rest.</CardDescription>

                  </CardHeader>
                </Card>

                <Card className="dark:bg-black  border-zinc-800 rounded-3xl p-3 w-full cardsBreak:w-[586px] z-[6] relative my-4 mb-0 cardsBreak:m-4 flex-1 sm:min-w-[477px]">
                  <CardHeader className="dark:bg-black  border-zinc-200 rounded-3xl">
                    <CardTitle className="">Join our newsletter. <Badge variant="outline" className=" -translate-y-0.5 ml-1 border-brandPink">Soon</Badge></CardTitle>
                    <CardDescription className=" mt-3 max-w-lg">No spam – we promise. </CardDescription>
 
                  </CardHeader>

                  <div className="flex w-full max-w-[95%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 smMax:pr-6 relative smMax:flex-wrap">
                    <Input disabled type="email" className=' border-zinc-800 rounded-3xl pl-4 min-w-[180px]' placeholder="Email" />
                    <Button disabled type="submit" className=" rounded-3xl smMax:mt-2  smMax:w-full">Subscribe</Button>
                  </div>   
                </Card>

             
              </div>

                <Card className="dark:bg-black  border-zinc-800 rounded-3xl p-3 w-fit z-[6] relative my-4 cardsBreak:m-4 cardsBreak:ml-0 flex-1 min-w-[50%] h-[376px] smMax:h-fit">
                  <CardHeader className="dark:bg-black  border-zinc-200 rounded-3xl">
                    <CardTitle className="">Small actions lead to big impact.</CardTitle>
                    <CardDescription className=" mt-3">Widespread change begins locally, driven by organizations like yours. Small actions cultivate over time, leading to progress. Our world isn't perfect, and it probably won't ever be, but we hold the power to leave it just a little better than we found it.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full border-zinc-800">
                      <AccordionItem value="item-1" className="border-zinc-800">
                        <AccordionTrigger>Is this really free?</AccordionTrigger>
                        <AccordionContent  className=" text-zinc-400">
                          Yes!
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-zinc-800">
                        <AccordionTrigger>Who is eligible?</AccordionTrigger>
                        <AccordionContent className=" text-zinc-400">
                         Registered 501(c)(3)s, small businesses, state-registered non-profits, unregistered organizations, and more! {/*<Link href="/eligibility" className="text-zinc-300">View Eligibility</Link> */}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border-zinc-800 text-left">
                        <AccordionTrigger className="text-left">Do you provide hosting?</AccordionTrigger>
                        <AccordionContent  className=" text-zinc-400">
                         We are unable to provide hosting at this time, but we will guide you through the process of hosting for free.
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

            <div className="bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full h-1/2 absolute bottom-0 left-0">

            </div>
          </div>

          
<footer className="bg-white sm:mt-[16rem] smMax:mt-[600px] 2xl:mt-1 dark:bg-black mt-0 ">
    <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap font-sans dark:text-white">foym<span className="text-brandPink self-center text-2xl font-semibold whitespace-nowrap font-sans">.</span></span>
              </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-1 font-sans">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-black font-sans dark:text-white">Pages</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="/" className="hover:underline font-sans font-normal">Home Page</a>
                      </li>
                      <li>
                          <a href="/work" className="hover:underline font-sans font-normal">Previous Work</a>
                      </li>
                  </ul>
              </div>
              {/* <div>
                  <h2 className="mb-6 text-sm font-semibold text-black dark:text-white">Legal</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      
                      <li>
                          <a href="#" className="hover:underline font-sans font-normal">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div> */}
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-zinc-800 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">foym</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="https://instagram.com/foym_org" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                  <span className="sr-only">Instagram page</span>
              </a>
              <a href="https://github.com/focus-on-your-mission" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  <span className="sr-only">GitHub account</span>
              </a>

          </div>
      </div>
    </div>
</footer>

        </div>       

      

        


        

  

        

                 
      </div>

      

      

    </div>

    
    
  )
}