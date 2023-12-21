'use client'
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ArrowUpSquare, Banknote, Coins, Paintbrush, Plus, Minus, PlusIcon, MinusIcon} from 'lucide-react'


const faqs = [
  {
    id: 1,
    question: "What is FOYM's mission?",
    answer:
      "Our mission is to assist nonprofits, community groups, and various other types of organizations by offering free, tailor-made websites. We also aim to foster a community of engaged student volunteers dedicated to making a difference through STEM.",
  },
  {
    id: 2,
    question: "What criteria must an organization meet to qualify for a free website?",
    answer:
      "We primarily focus on serving organizations with a clear community-oriented mission that lack the resources or time to create a professional website. Eligibility is determined based on the organization's potential impact and resource needs. If you believe this description fits your organization, please feel free to apply here.",
  },
  {
    id: 3,
    question: "What is the maximum number of pages that can be requested?",
    answer:
      "We primarily focus on smaller websites that are concise and effective in communicating an organization's mission. While there isn't a strict page limit, we lean toward fewer pages. Our goal is to create websites that prioritize quality and impactful content over quantity. If you have specific page requirements, please include them with your request, and we'll do our best to fulfill them.      ",
  },
  {
    id: 4,
    question: "How can I apply for a website?",
    answer:
      "Apply by using the contact button in the header. We'll get back to you as soon as possible.",
  },
  {
    id: 5,
    question: "How long does it take to get a website once I've applied?",
    answer:
      "Each situation is different and the timeframes for different websites can vary, but we work diligently to deliver websites as quickly as possible, considering the complexity of the project and the number of applications in the queue.",
  },
  {
    id: 7,
    question: "How does FOYM sustain itself financially while providing free websites?",
    answer:
      "FOYM is a fully volunteer-run organization based in Mukilteo, Washington. The time taken designing, coding, and polishing websites is generously donated by our amazing team members. Websites created by FOYM are hosted on Vercel's and Cloudflare's respective free plans. Currently, we do not cover the expense of a custom domain, but we can offer a free domain name with the .foym.org extension (for example, example.foym.org). We do not currently accept individual donations, and we do not have plans to do so in the near future.",
  },
]
 
export default function ComponentThree() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 sm:pt-12">
        <div className='w-full flex flex-col lg:justify-center lg:items-center pt-12 pb-5'> 
          {/* <h2 className="text-base font-semibold leading-7 text-purple-500/70">Want to help?</h2> */}
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">Frequently Asked Questions<span className="text-brandPink">.</span></p>
          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-400 lg:text-center">
            Have a different question and can’t find the answer you’re looking for? Reach out by{' '}
            <a href="mailto:ruslanmukhamedvaleev@gmail.com" className="font-semibold text-neutral-300  hover:text-neutral-200">
              sending us email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="">
        <dl className="mt-10 space-y-6 divide-y divide-white/10">
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
                    <Disclosure.Panel as="dd" className="mt-2 pr-12 w-full">
                      <p className="text-base leading-7 text-neutral-400">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}