import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  metadataBase: new URL('https://www.foym.org/'),
  title: 'Focus On Your Mission.',
  themeColor: '#000000',
  description: 'Focus on your mission, not your website. Our mission is to empower non-profit organizations & small businesses by providing them with websites, for completely free.',
  openGraph: {
    title: 'Focus On Your Mission.',
    description: 'Focus on your mission, not your website. Our mission is to empower non-profit organizations & small businesses by providing them with websites, for completely free.',
    url: 'https://www.foym.org/',
    siteName: 'Focus On Your Mission.',
    images: [
      {
        url: '/openGraph.png',
        width: 1600,
        height: 900,
        alt: 'An image on the home page of the FOYM website.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' bg-black dark:bg-black dark overflow-x-hidden ' >
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className={inter.className}>
        {children} 
        <Toaster />
      </body>
     
    </html>
  )
}
