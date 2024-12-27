import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.foym.org/"),
  title: "FOYM - Focus On Your Mission | A project by Ruslan Mukhamedvaleev",
  description:
    "FOYM (Focus On Your Mission) is a non-profit tech initiative founded by Ruslan Mukhamedvaleev, providing free professional website development for non-profits and small businesses. Our mission is to empower organizations by eliminating technical barriers.",
  keywords: [
    "free websites",
    "non-profit websites",
    "small business websites",
    "web development",
    "FOYM",
    "Focus On Your Mission",
    "Ruslan Mukhamedvaleev",
    "tech for good",
    "social impact",
    "digital transformation",
  ],
  authors: [{ name: "Ruslan Mukhamedvaleev", url: "https://www.foym.org" }],
  creator: "Ruslan Mukhamedvaleev",
  publisher: "FOYM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "FOYM - Focus On Your Mission | A project by Ruslan Mukhamedvaleev",
    description:
      "FOYM is a non-profit tech initiative founded by Ruslan Mukhamedvaleev, providing free professional website development for non-profits and small businesses.",
    creator: "@foym_org",
    images: ["/openGraph.png"],
  },
  openGraph: {
    title: "FOYM - Focus On Your Mission | A project by Ruslan Mukhamedvaleev",
    description:
      "FOYM is a non-profit tech initiative founded by Ruslan Mukhamedvaleev, providing free professional website development for non-profits and small businesses.",
    url: "https://www.foym.org/",
    siteName: "FOYM - Focus On Your Mission",
    images: [
      {
        url: "/openGraph.png",
        width: 1600,
        height: 900,
        alt: "FOYM - Empowering organizations through technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.foym.org",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black dark:bg-black dark overflow-x-hidden">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <Script id="org-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FOYM",
              "alternateName": "Focus On Your Mission",
              "url": "https://www.foym.org",
              "logo": "https://www.foym.org/openGraph.png",
              "description": "A non-profit tech initiative providing free professional website development for non-profits and small businesses.",
              "founder": {
                "@type": "Person",
                "name": "Ruslan Mukhamedvaleev",
                "jobTitle": "Founder",
                "url": "https://www.foym.org"
              },
              "sameAs": [
                "https://www.linkedin.com/company/foym",
              ],
              "knowsAbout": [
                "Web Development",
                "Non-profit Technology",
                "Digital Transformation",
                "Social Impact"
              ],
              "nonprofitStatus": "Nonprofit Organization",
              "foundingDate": "2023"
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
