import { FC } from 'react'
import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from 'components/ui/mdx'
import { MainNavNon } from "@/components/ui/main-nav-noton"

import Link from "next/link"
 

interface DocPageProps {
    params: {
      slug: string[]
    }
  }
  
async function getDocFromParams(slug: string) {

    const doc = allDocs.find((doc) => doc.slugAsParams === slug)
  
    if (!doc) notFound()
  
    return doc
  }
  

const page = async ({ params }: DocPageProps) => {
    const doc = await getDocFromParams(params.slug.join('/'))
    return (
      <div className="flex-col flex bg-white dark:bg-black h-screen w-screen overflow-x-hidden bg-gradient-to-b from-black via-black to-mrBack">
      <div className="border-b border-zinc-800 w-screen fixed backdrop-blur-sm z-50">
        <div className="flex h-16 items-center px-4" >

        <div className="mr-auto ml-6 flex items-center space-x-4 ">

          <Link href={'/'} className="font-sans font-semibold hover:font-black transition-all text-black dark:text-white text-lg">foym<span className="text-brandPink font-sans text-2xl" >.</span></Link>
        </div>
          <MainNavNon className="mx-6 bg-white dark:bg-black" />
          
        </div>

      </div>

      <div className=' mt-36 p-10'>
      <h1 className="font-sans text-xl  text-black dark:text-white lg:text-5xl md:text-3xl sm:text-xl font-bold flex justify-center align-middle tracking-tight">{doc.title}<span className="text-brandPink font-sans font-semibold lg:text-5xl md:text-3xl sm:text-xl">.</span></h1>

      
        <Mdx code={doc.body.code}/>
      </div>

        
      </div>

    )
    
      
 }

export default page