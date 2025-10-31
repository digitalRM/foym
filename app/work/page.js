import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ButtonWithIconWork } from "@/components/ui/button-work-link";

import Image from "next/image";
import NewHead from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "foym. - our work.",
  description:
    "focus on your mission, not your website. Our mission is to empower non-profit organizations & small businesses by providing them with websites, for completely free.",
};

// Work items data for cleaner organization
const workItems = [
  {
    title: "Washington Youth Alliance",
    date: "May 2024 - Sep 2025",
    description:
      "The Washington Youth Alliance is a student-led advocacy organization that empowers young people to engage in the political process while also advocating for their rights as young citizens of their state. Their organization is also dedicated to empowering youth across Washington State by fostering essential life skills, promoting digital literacy, and preparing young people for their educational and career futures.",
    image: "/wa.jpeg",
    links: [
      { url: "https://wa-youth.foym.org", type: "past-client" },
      {
        url: "https://github.com/digitalRM/FOYM-Washington-Youth-Alliance",
        type: "code",
      },
    ],
    alt: "An image of the Washington Youth Alliance website designed by Ruslan Mukhamedvaleev.",
  },
  {
    title: "Harmony Association For Youth",
    date: "Ongoing Partnership",
    description:
      "The Harmony Association For Youth is a non-profit organization that encourages young people to better their communities by using their skills through youth-focused events, tutoring sessions, and challenges. This project focused on upgrading their website to a more modern and user-friendly design that better reflects their mission, values, and their community impact!",
    image: "/HAY.jpeg",
    links: [
      { url: "https://hay-youth-foym.vercel.app/", type: "work-in-progress" },
      { url: "https://hayyouth.org", type: "current" },
    ],
    alt: "An image of the Harmony Association For Youth website designed by Ruslan Mukhamedvaleev.",
  },
  {
    title: "Cake in the Park",
    date: "July 2025",
    description:
      "A community event website designed for the sweetest community event of the summer in Mukilteo. They held the event at Mukilteo Lighthouse Park, a delightful gathering where neighbors came together to spread love throughout the community through cake. This project focused on showcasing event promotion and community engagement through a simple, clean, and modern website. ",
    image: "/CakeInThePark.jpeg",
    links: [{ url: "https://cakeinthepark.com/", type: "live" }],
    alt: "An image of the Cake in the Park community event website designed by Ruslan Mukhamedvaleev.",
  },
  {
    title: "The Portfolio - An FOYM",
    date: "New Version Available Below!",
    description:
      "This is the first template we have created for our clients - the first of many to come. It is a simple, clean, modern website modeled after a resume, perfect for showcasing your work. It is fully responsive and works on all devices. It is also fully customizable and easy to use. You can use it to create a portfolio that showcases your work to potential clients and employers.",
    image: "/portfolio.jpeg",
    links: [
      { url: "https://portfolio.foym.org", type: "live" },
      { url: "https://github.com/digitalRM/FOYM-Portfolio", type: "code" },
    ],
    alt: "An image of the Portfolio template website designed by Ruslan Mukhamedvaleev.",
  },
  {
    title: "Green Planet - An FOYM",
    description:
      'This is the second template that we have created for our clients that is fully open source. It\'s modeled after a made-up environmental organization called "Green Planet." It is entirely responsive, works on all devices, and is fully customizable. You can use it to showcase your organization, group, nonprofit, or anything else.',
    image: "/planet.jpeg",
    links: [
      { url: "https://planet.foym.org", type: "live" },
      { url: "https://github.com/digitalRM/FOYM-Green-Planet", type: "code" },
    ],
    alt: "An image of the Green Planet template website designed by Ruslan Mukhamedvaleev.",
  },
  {
    title: "Blue Ocean - An FOYM",
    description:
      'This is the third fully open-source template we have created for our clients. Its design is very similar to "Green Planet," one of the other FOYM templates. This template is modeled on a different but made-up environmental organization called "Blue Ocean."',
    image: "/ocean.jpeg",
    links: [
      { url: "https://ocean.foym.org", type: "live" },
      { url: "https://github.com/digitalRM/FOYM-Blue-Ocean", type: "code" },
    ],
    alt: "An image of the Blue Ocean template website designed by Ruslan Mukhamedvaleev.",
  },
  {
    title: "Volunteer Today - An FOYM",
    description:
      'This is the fourth fully open-source template we have created. This is a template for organizations modeled after a made-up volunteering nonprofit called "Volunteer Today." It features a bento hero section, a double stacked informational section, and a call-to-action card.',
    image: "/volunteer.jpeg",
    links: [
      { url: "https://volunteer.foym.org", type: "live" },
      {
        url: "https://github.com/digitalRM/FOYM-Volunteer-Today",
        type: "code",
      },
    ],
    alt: "An image of the Volunteer Today template website designed by Ruslan Mukhamedvaleev.",
  },
  {
    title: "Learn Link - An FOYM",
    description:
      'This is the fifth fully open-source template we have created. This is a template for organizations modeled after a made-up tutoring nonprofit called "Learn Link." It features an animated hero section via Framer Motion, two informational sections, and a frequently asked questions section.',
    image: "/learn.jpeg",
    links: [
      { url: "https://learn.foym.org", type: "live" },
      { url: "https://github.com/digitalRM/FOYM-Learn-Link", type: "code" },
    ],
    alt: "An image of the Learn Link template website designed by Ruslan Mukhamedvaleev.",
  },
  {
    title: "Grow Together - An FOYM",
    description:
      'This is the sixth fully open-source template we have created. This is a template for organizations modeled after a made-up gardening nonprofit called "Grow Together." It features a left-aligned hero, an information section, a testimonial section, and a frequently asked questions section.',
    image: "/grow.jpeg",
    links: [
      { url: "https://grow.foym.org", type: "live" },
      { url: "https://github.com/digitalRM/FOYM-Grow-Together", type: "code" },
    ],
    alt: "An image of the Grow Together template website designed by Ruslan Mukhamedvaleev.",
  },
  {
    title: "Art Access - An FOYM",
    description:
      'This is the seventh fully open-source template we have created. This is a template for organizations modeled after a made-up art nonprofit called "Art Access." It features a left-aligned hero, a testimonial section, and a frequently asked questions section.',
    image: "/art.jpeg",
    links: [
      { url: "https://art.foym.org", type: "live" },
      { url: "https://github.com/digitalRM/FOYM-Art-Access", type: "code" },
    ],
    alt: "An image of the Art Access template website designed by Ruslan Mukhamedvaleev.",
  },
  {
    title: "Device Drive - An FOYM",
    description:
      'This is the eighth fully open-source template we have created. This is a template for organizations modeled after a made-up device drive nonprofit called "Device Drive." It features a center-aligned hero, an information section, and a frequently asked questions section.',
    image: "/device.jpeg",
    links: [
      { url: "https://device.foym.org", type: "live" },
      { url: "https://github.com/digitalRM/FOYM-Device-Drive", type: "code" },
    ],
    alt: "An image of the Device Drive template website designed by Ruslan Mukhamedvaleev.",
  },
  {
    title: "Portfolio Version 2 - An FOYM",
    description:
      "This is the ninth fully open-source template we have created. This is an updated version of the Portfolio template that we have created. It is a simple, clean, modern website modeled after a resume, perfect for showcasing your work. It is fully responsive and works on all devices. It is also fully customizable and easy to use. You can use it to create a portfolio that showcases your work to potential clients and employers.",
    image: "/porfolioV2.jpeg",
    links: [
      { url: "https://foym-portfolio-v2.vercel.app/", type: "live" },
      {
        url: "https://github.com/digitalRM/FOYM-Portfolio-V2",
        type: "code",
      },
    ],
    alt: "An image of the Portfolio Version 2 template website designed by Ruslan Mukhamedvaleev.",
  },
  {
    title: "Focus on Your Mission - An FOYM",
    description:
      "This is the tenth fully open-source template we have created. It's this very own website. The source code is now available for you to use and customize to your liking.",
    image: "/FOYM.jpeg",
    links: [
      { url: "https://foym.org", type: "live" },
      { url: "https://github.com/digitalRM/FOYM", type: "code" },
    ],
    alt: "An image of the FOYM template website designed by Ruslan Mukhamedvaleev.",
  },
];

// Component for individual work items
function WorkItem({ item, index }) {
  // Determine classes based on exact position like original
  let headerClasses =
    "dark:bg-black rounded-[100px] flex flex-wrap flex-row sm:gap-6 gap-3 p-3";
  let buttonClasses =
    "flex w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 mb-2 relative smMax:flex-wrap";

  // First row (index 0, 1) - matches original pt-2 and pb-0
  if (index === 0 || index === 1) {
    headerClasses += " pt-2 sm:p-12 sm:pb-0";
  }
  // Last row items
  else if (index >= workItems.length - 2) {
    headerClasses += " sm:p-12 sm:py-0";
  }
  // Middle items
  else {
    headerClasses += " sm:p-12 sm:py-0";
  }

  // Left column (even indices) vs right column (odd indices)
  if (index % 2 === 0) {
    headerClasses += " lg:pr-0";
  } else {
    headerClasses += " lg:pl-0";
  }

  return (
    <CardHeader className={headerClasses}>
      <Card className="dark:bg-black w-1/3 rounded-[32px] p-1 sm:p-3 z-[6] relative my-2 mb-0 flex-1 min-w-[100%] md:min-w-[50%] flex flex-wrap">
        <CardHeader className="dark:bg-black rounded-3xl">
          <CardTitle className="tracking-tight text-base md:text-2xl">
            {item.title}
            {item.title.includes("FOYM") && (
              <div className="inline-block">
                <span className="text-brandPink lg:text-4xl">.</span>
                <span className="">Template</span>
              </div>
            )}
          </CardTitle>
          {item.date && (
            <CardDescription className="mt-3 rounded-3xl border px-2 w-fit py-1">
              {item.date}
            </CardDescription>
          )}
          <CardDescription className="mt-3">{item.description}</CardDescription>
        </CardHeader>

        <div className={buttonClasses}>
          {item.links.map((link, linkIndex) => (
            <ButtonWithIconWork
              key={linkIndex}
              link={link.url}
              color={
                link.type === "code"
                  ? "code"
                  : link.type === "past-client"
                  ? "past-client"
                  : link.type === "current"
                  ? "current"
                  : link.type === "work-in-progress"
                  ? "work-in-progress"
                  : undefined
              }
            />
          ))}
        </div>

        <div className="group w-full max-w-[100%] items-center sm:space-x-2 z-20 p-2 m-4 mt-0 pt-0 pl-1 mb-2 relative smMax:flex-wrap">
          <Image
            src={item.image}
            priority={index < 4}
            width="586"
            height="360"
            className="rounded-2xl transition-all border border-neutral-800 mt-4"
            alt={item.alt}
          />
        </div>
      </Card>
    </CardHeader>
  );
}

export default function Work() {
  return (
    <div className="bg-black relative">
      <NewHead />

      <div className="flex justify-center align-center flex-col mt-52 max-w-[290px] sm:max-w-none mx-auto text-center">
        <h1 className="font-sans text-2xl text-black dark:text-white lg:text-6xl md:text-4xl sm:text-2xl font-semibold flex justify-center align-center tracking-tight">
          Our Work<span className="text-brandPink">.</span>
        </h1>
      </div>

      <div className="w-full mt-24 flex items-center justify-center mx-auto"></div>

      <div className="w-full flex justify-center">
        <div className="w-full m-2 p-[0px] sm:p-[2px] relative h-fit max-w-[1440px] xl:max-w-[1440px]">
          <div className="bg-gradient-to-r from-brandBlue to-brandPink flex lg:h-full w-full items-center justify-center bg-white dark:bg-black md:rounded-[80px] rounded-[50px] relative transition-all p-[1px]">
            <div className="absolute -inset-2 md:rounded-[80px] rounded-[50px] bg-gradient-to-r from-brandBlue to-brandPink opacity-40 blur-xl h-1/3 sm:h-4/5" />

            <Card className="dark:bg-blackmax-w-[1440px] bg-black md:rounded-[80px] rounded-[50px] p-1 w-full z-[6] relative mb-0 flex-1 sm:min-w-[477px]">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                {workItems.map((item, index) => (
                  <WorkItem key={index} item={item} index={index} />
                ))}
              </div>

              <div>
                <div className="bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-[112%] sm:w-[105%] lg:w-[108%] -ml-12 h-4/5 absolute bottom-0"></div>
              </div>

              <div className="z-10 pb-24 relative -mb-1 bg-black -bottom-0.5 overflow-hidden w-full">
                <Footer className="" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
