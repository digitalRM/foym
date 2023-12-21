"use client"
import { useState } from 'react'
import Link from 'next/link'
import { X, Menu, Layout, Mail } from 'lucide-react'
import { Dialog as Dia } from '@/components/ui/dialog'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Dialog } from '@headlessui/react'
import { Button } from './button'
import { ProfileForm } from './form-test'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Work', href: '/work' },
]

export default function NewHead() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 border-b border-zinc-800 w-screen bg-black/70  backdrop-blur-lg z-10 smMax:backdrop-blur-xl overflow-hidden">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 overflow-x-hidden" aria-label="Global">
        <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5">
            <span className="sr-only">FOYM.</span>
            <Link href='/' className="font-sans font-semibold transition-all text-black dark:text-white text-lg">foym<span className="text-brandPink font-sans text-2xl" >.</span></Link>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6 stroke-white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium leading-6 text-neutral-400 hover:text-neutral-200">
              {item.name}
            </a>
          ))}
          <div className="hidden lg:flex lg:flex-1">
      <Dia>
        <DialogTrigger className="text-sm font-medium leading-6 text-neutral-400 hover:text-neutral-200">
          Contact
        </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-black border-zinc-800 min-w-[43%]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            We'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
          <ProfileForm />
      </DialogContent>
      </Dia>
          </div>
        </div>

      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black/90 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <div className="-m-1.5 p-1.5">
              <span className="sr-only">FOYM.</span>
              <Link href='/' className="font-sans font-semibold transition-all text-black dark:text-white text-lg">foym<span className="text-brandPink font-sans text-2xl" >.</span></Link>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6 stroke-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-neutral-300 hover:bg-neutral-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Dia>
                    <DialogTrigger className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-neutral-300 hover:bg-neutral-900">
                      Contact
                    </DialogTrigger>
                  <DialogContent className="sm:max-w-[525px] bg-black border-zinc-800 min-w-[43%]">
                    <DialogHeader>
                      <DialogTitle>Contact Us</DialogTitle>
                      <DialogDescription>
                        We'll get back to you as soon as possible.
                      </DialogDescription>
                    </DialogHeader>
                      <ProfileForm />
                  </DialogContent>
                </Dia>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}


