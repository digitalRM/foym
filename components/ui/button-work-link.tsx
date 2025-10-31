import { Button } from "@/components/ui/button";

import Layout from "feather-icons-react/build/IconComponents/Layout";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ButtonWithIconWork({ link, color }) {
  if (color === "code") {
    return (
      <>
        <a
          target="_blank"
          href={link}
          className="group rounded-3xl smMax:mt-2  smMax:w-full w-full font-sans"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="group rounded-3xl smMax:mt-2  smMax:w-full w-full font-sans"
            asChild
          >
            <div>
              View Code
              <ArrowUpRight
                className=" transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-0.5"
                height="16"
                width="16"
              />
            </div>
          </Button>
        </a>
      </>
    );
  } else if (color === "past-client") {
    return (
      <>
        <a
          target="_blank"
          href={link}
          className="group rounded-3xl smMax:mt-2  smMax:w-full w-full font-sans"
          rel="noopener noreferrer"
        >
          <Button
            className="group rounded-3xl smMax:mt-2  smMax:w-full w-full font-sans"
            asChild
          >
            <div>
              Visit Our Design
              <ArrowUpRight
                className=" transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-0.5"
                height="16"
                width="16"
              />
            </div>
          </Button>
        </a>
      </>
    );
  } else if (color === "current") {
    return (
      <>
        <a
          target="_blank"
          href={link}
          className="group rounded-3xl smMax:mt-2  smMax:w-full w-full font-sans"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="group rounded-3xl smMax:mt-2  smMax:w-full w-full font-sans"
            asChild
          >
            <div>
              Visit Current Website
              <ArrowUpRight
                className=" transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-0.5"
                height="16"
                width="16"
              />
            </div>
          </Button>
        </a>
      </>
    );
  } else if (color === "work-in-progress") {
    return (
      <>
        <a
          target="_blank"
          href={link}
          className="group rounded-3xl smMax:mt-2  smMax:w-full w-full font-sans"
          rel="noopener noreferrer"
        >
          <Button
            className="group rounded-3xl smMax:mt-2  smMax:w-full w-full font-sans"
            asChild
          >
            <div>
              Visit Work In Progress Website
              <ArrowUpRight
                className=" transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-0.5"
                height="16"
                width="16"
              />
            </div>
          </Button>
        </a>
      </>
    );
  } else {
    return (
      <>
        <a
          target="_blank"
          href={link}
          className="group rounded-3xl smMax:mt-2  smMax:w-full w-full font-sans"
          rel="noopener noreferrer"
        >
          <Button
            className="group rounded-3xl smMax:mt-2  smMax:w-full w-full font-sans"
            asChild
          >
            <div>
              Visit Website
              <ArrowUpRight
                className=" transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-0.5"
                height="16"
                width="16"
              />
            </div>
          </Button>
        </a>
      </>
    );
  }
}
