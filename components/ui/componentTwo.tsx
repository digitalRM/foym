
import React from 'react'
import { ArrowUpSquare, Banknote, Coins, Paintbrush } from 'lucide-react'
import Link from 'next/link'
import { Button } from './button'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ArrowUpSquare,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: Banknote,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: Paintbrush,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32 sm:pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 md:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-purple-500">Want to help?</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Join Our Mission<span className="text-brandPink">.</span></p>
              <p className="mt-6 text-lg leading-8 text-neutral-400">
              We welcome volunteers from all backgrounds around the world to contribute their skills. Whether you specialize in web development, content creation, design, or something entirely different, we would love to have you on our team.              </p>
              <p className="mt-6 text-lg leading-8 text-neutral-400">
              Your expertise can be a game-changer for organizations worldwide. Join us in our mission to make a difference today.
              </p>
              <div className="mt-8 gap-3 flex sm:flex-row flex-col">
              <Button variant="outline" className=" border-zinc-800 text-white hover:text-white hover:bg-purple-700 bg-purple-600 sm:w-24" asChild>              
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfijcsbyMfWcblc6fBknXn5CuP967v603C93MaXbi0-2kpYOQ/viewform?usp=sf_link">Join Us</a>
              </Button>
              {/* <Button variant="outline" className=" border-zinc-800 hover:bg-zinc-900 bg-black " asChild>              
                  <Link href="/work">Learn More</Link>
              </Button> */}
              </div>
            </div>
          </div>
          <div className="mx-0 max-w-none">
                <div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 relative">
                  <div className="flex bg-neutral-800/40 ring-1 ring-white/5 ">
                    <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        HelloThere.jsx
                      </div>
                      <div className="border-r border-neutral-600/10 px-4 py-2">Hidden.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6">
                    <pre className="text-[0.8125rem] leading-6 text-gray-300 overflow-hidden ">
                      <code>
                        {<span className="text-gray-500">// woah you found something hidden!</span>}
                        <br/>{<span className="text-gray-500">// that's pretty awesome. </span>}
                        <br/>{<span className="text-gray-500">// :) </span>}
                        <br/>
                        <br/><span className=" text-purple-500/90">function anEasterEgg</span>() {'{'}
                        <br/>  const [<span className="text-sky-400">enabled</span>, <span className="text-sky-400">setEnabled</span>] = useState(<span className="text-sky-400">true</span>)

                        <br/>  return (
                          <br/>    &lt;<span className="text-purple-500/90">form</span> action="/<span className="text-emerald-400">notification-settings</span>" method="<span className="text-emerald-400">post</span>"&gt;
                          <br/>      &lt;<span className="text-purple-500/90">Switch</span> checked={<span className="text-sky-400">enabled</span>} onChange={<span className="text-sky-400">setEnabled</span>} name="<span className="text-emerald-400">notifications</span>"&gt;
                          <br/>      {<span className="text-gray-500">/* ... */</span>}
                          <br/>      &lt;<span className="text-purple-500/90">button</span>&gt;Submit&lt;/<span className="text-purple-500/90">button</span>&gt;
                          <br/>      &lt;<span className="text-purple-500/90">Switch</span> checked={<span className="text-sky-400">enabled</span>} onChange={<span className="text-sky-400">setEnabled</span>} name="<span className="text-emerald-400">notifications</span>"&gt;
                          <br/>  )
                          <br/>{'}'}</code></pre>

                  </div>
                  <div className="overflow-hidden rounded-xl bg-neutral-900 ring-1 ring-white/10 absolute  top-0 lg:-ml-4 lg:rotate-3 w-full">
                  <div className="flex bg-neutral-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                      <div className="border-r border-neutral-600/10 px-4 py-2">hero.tsx</div>
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        joinUs.js
                      </div>
                      
                      <div className="border-r border-neutral-600/10 px-4 py-2">layout.js</div>
                      
                      <div className="border-r border-neutral-600/10 px-4 py-2">page.js</div>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-6 ">
                    <pre className="text-[0.8125rem] leading-6 text-gray-300">
                      <code>
                        <span className="text-emerald-400">'use client'</span>
                        <br/>
                        <br/>import { <span className=" text-sky-400">useState</span> } from <span className="text-emerald-400">'react'</span>
                        <br/>import { <span className="text-sky-400">Checkbox</span> } from <span className="text-emerald-400">'@/components/ui/checkbox'</span>
                        <br/>
                        <br/><span className=" text-purple-500/90">function <span className=" text-sky-400">JoinUs</span></span>() {'{'}
                        <br/>  const [<span className="text-sky-400">enabled</span>, <span className="text-sky-400">setEnabled</span>] = useState(<span className="text-sky-400">true</span>)

                        <br/>  <span className=" text-purple-500/90">return</span> (
                          <br/>    &lt;<span className="text-purple-500/90">form</span> action="/<span className="text-emerald-400">contact-join</span>" method="<span className="text-emerald-400">post</span>"&gt;
                          <br/>      &lt;<span className="text-purple-500/90">Checkbox</span> checked={<span className="text-sky-400">enabled</span>} onChange={<span className="text-sky-400">setEnabled</span>} name="<span className="text-emerald-400">form</span>"&gt;
                          <br/>        {<span className="text-gray-500">/* Join Our Mission 🚀 */</span>}
                          <br/>      &lt;/<span className="text-purple-500/90">Checkbox</span>&gt;
                          <br/>      &lt;<span className="text-purple-500/90">button</span>&gt;Join Us&lt;/<span className="text-purple-500/90">button</span>&gt;
                          <br/>    &lt;/<span className=" text-purple-500/90">form</span>&gt;
                          <br/>  )
                          <br/>{'}'}</code></pre>

                  </div>
                  </div>
                </div>

              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
           
        </div>
      </div>
    </div>
  )
}
