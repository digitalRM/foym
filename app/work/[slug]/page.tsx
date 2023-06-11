import { FC } from 'react'
import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from 'components/ui/mdx'
 

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
    const doc = await getDocFromParams(params.slug)
    return (
      <div className=' p-12'>
        <h1 className='font-bold text-xl'>{doc.title}</h1>
      
        <Mdx code={doc.body.code}/>
    
      </div>
    )
    
      
 }

export default page