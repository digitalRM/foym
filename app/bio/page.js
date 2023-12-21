import React from 'react'

const links = [

    {
        title: 'Instagram',
        url: '#',
        icon: 'instagram',
    },
    {
        title: 'LinkedIn',
        url: '#',
        icon: 'linkedin',
    },
]

export default function linkInBio() {
  return (
    <main className='p-8 w-screen h-screen justify-center bg-[url("./hero_join.webp")] bg-cover'>
        <div className='flex flex-col items-center justify-center gap-3'>

            <h1 className='text-4xl font-semibold text-center text-white'>FOYM</h1>

            {links.map((link) => (
                <a
                    key={link.title}
                    href={link.url}
                    className='w-full gap-2 px-4 py-3 pb-4 bg-neutral-950 shadow-[5px_5px_0px_px_#fff] text-white border border-neutral-800 -translate-x-0.5 -translate-y-0.5 hover:translate-x-0.5 hover:translate-y-0.5 text-center rounded-xl  hover:bg-neutral-900'
                >
                    <span className='text-2xl'>
                        <i className={`fab fa-${link.icon}`}></i>
                    </span>
                    <span>{link.title}</span>
                </a>
            ))
                
            
            }
           

        </div>

    </main>
  )
}
