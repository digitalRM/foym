'use client'
import React from 'react'
import { ArrowUpSquare, Banknote, BookHeart, ChevronRight, LineChart, Minus, MinusIcon, Paintbrush, Plus, PlusIcon, } from 'lucide-react'
import Mark from './mark.jsx'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Disclosure } from '@headlessui/react'


  const features = [

    {
      name: 'Tailored & White Labeled.',
      description:
        "We work with you to understand your organization and goals, before creating a website that reflects your brand. We also offer white labeling, so you can take full credit for your website.",
      href: '#',
      icon: Paintbrush,
    },
    {
      name: 'At No Cost.',
      description:
        "Our services come at no cost. We are very committed to supporting your mission without burdening your budget. Doing good for our world shouldn't be limited by monthly fees.",
      href: '#',
      icon: Banknote,
    },
  ]

const faqs = [
  {
    id: 1,
    question: "Do you require a watermark or credit on the website?",
    answer:
      "No, we do not require a watermark or any form of credit on the website. If you would like to credit us, we would greatly appreciate it, but it is absolutely not required.",
  },
  {
    id: 2,
    question: "What exactly does white labeling mean?",
    answer:
      "We will provide you with a website without any watermarks or credit to FOYM. Your logo and branding will be displayed on the website, not ours.",
  },
  {
    id: 3,
    question: "What is the maximum number of pages that can be requested?",
    answer:
      "We primarily focus on smaller websites that are concise. If you have specific page requirements, please include them with your request, and we'll do our best to fulfill them.      ",
  },
  {
    id: 6,
    question: "Are there templates to choose from, or is the design built from scratch?",
    answer:
      "We build websites using some pre-built components, but we do not rely on complete templates. By mixing pre-built and custom-coded components, we can quickly create websites while still ensuring a unique design for each one.",
  },
]

const faqs2 = [
  {
    id: 7,
    question: "What is a custom domain?",
    answer:
      "A custom domain is a unique URL that you can purchase for your website. For example, our organization is called 'FOYM', so we purchased the domain 'foym.org'. This process is not done through FOYM, but we can assist you in setting it up. If you do not purchase a custom domain, your website will be hosted on a subdomain of foym.org (for example, example.foym.org).",
  },
  {
    id: 8,
    question: "How much does a custom domain cost?", 
    answer:
      "Typically, it costs around $10-15 USD per year.",

  },
]
 

function Faq() {
  return (
    <div>
      <dl className="mt-4 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.id} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-medium leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-neutral-400">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
    </div>
  )


}
  

function Faq2() {
  return (
    <div>
      <dl className="mt-4 space-y-6 divide-y divide-white/10">
            {faqs2.map((faq) => (
              <Disclosure as="div" key={faq.id} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-medium leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-neutral-400">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
    </div>
  )


}
  

export default function ComponentOne() {

  return (
    <div className="w-full h-full rounded-[30px] py-24 pt-12 sm:pt-12 sm:py-24 bg-black">
      
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center sm:items-center pt-14 pb-4 flex flex-col">
            
            <h2 className="text-base font-semibold leading-7 text-blue-500">How do you code a website fast? How do you learn a CSS? Wha-</h2>
            <p className="mt-2 text-2xl font-bold xs:tracking-tight tracking-[-0.035em] sm:max-w-none xss:max-w-[250px] text-white sm:text-4xl">Will that <span className='italic mr-0.5'>really</span> help your misson?</p>
            <p className="mt-4 text-lg leading-8 text-neutral-400 max-w-[550px]">
            If so, great! If not, we can help. Break boundaries, change lives, or just do what you do best – don’t worry about the rest.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              src="./sec1.png"
              alt="App screenshot"
              className="mb-[-4%] rounded-xl shadow-2xl -mt-14 pr-2 "
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-1 bottom-0 bg-gradient-to-t from-black pt-[17%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
         <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-400">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-4">
                    {feature.name == 'Impact Amplifying.' ? <div></div> :
                    <Dialog >
                      <DialogTrigger className="text-sm font-semibold leading-6 text-white group transition">
                        Learn More <ChevronRight strokeWidth={2.5} className="h-5 w-5 inline-flex group-hover:translate-x-1 transition" aria-hidden="true" />
                      </DialogTrigger>

                      <DialogContent className="w-full max-w-[1240px] overflow-y-scroll scroll-smooth scroll-thin sm:rounded rounded-3xl md:rounded-tr-none h-auto  max-h-[95%] sm:max-h-[83%] bg-black sm:p-8 flex flex-col items-center ">
                      {feature.name == 'Tailored & White Labeled.' ? 
                      <div className='sm:p-12 p-3'>                      
                        <h1 className="text-3xl font-bold tracking-tight py-6 pt-0 text-white sm:text-4xl">Tailored & White Labeled<span className='text-brandPink'>.</span></h1>
                        
                        <p className=' text-neutral-400'>It's simple – we work closely with you to understand your organization and goals, then we create a website that reflects your brand. Afterwards, we assist in deploying your website with white labeling, allowing you to take full credit for the website without any pesky watermarks.</p>
                        
                        <dl className="space-y-6 divide-y divide-white/10 pb-20">
                          <Faq />
                        </dl>
                        <div className="relative">                       
                          <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <img
                              src='./sec2.png'
                              alt="App screenshot"
                              className="mb-[-4%] rounded-xl shadow-2xl sm:-mt-14 pr-2 sm:block hidden "
                              width={1432}
                              height={1442}
                            />
                            <div className="relative p-[22px]" aria-hidden="true">
                              <div className="absolute -inset-x-1 bottom-0 bg-gradient-to-t translate-y-2 sm:-mt-14 from-black pt-[27%]" />
                            </div>
                          </div>
                        </div>
                      </div> : <div className="flex flex-col items-center justify-center" />}
                      {feature.name == 'At No Cost.' ? 
                      <div className='sm:p-12 p-3'>                      
                      <h1 className="text-3xl font-bold tracking-tight py-6 pt-0 text-white sm:text-4xl">Free<span className='text-brandPink'>.</span></h1>
                      
                      <p className='text-neutral-400'>It's that simple. The coding, design, and deployment of your website are completely free. The only cost involved is for a custom domain name, should you choose to purchase one. We do not require any form of payment, nor do we accept donations.</p>
                      <dl className="space-y-6 mb-0 divide-y divide-white/10">
                        <Faq2 />
                      </dl>
                    </div> : <div className="flex flex-col items-center justify-center" />}
                  

                      
                        


                        
                      </DialogContent>
                    </Dialog>
}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
            </div>
  )
}
