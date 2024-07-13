"use client";

import DojoLogo from "@/app/components/icons/dojo-logo.svg";
import ekuboLogo from "@/app/components/icons/ekubo-logo.avif";
import { Button } from "../Button";

export default function Hero() {
  const handleScroll = () => {
    const element = document.getElementById("features");
    if (element) {
      const offset = 200; // Adjust this value as needed
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="z-1 relative  flex h-[100vh] w-screen justify-end sm:right-0 sm:top-0 sm:h-[120vh]">
      <div className="absolute z-10 flex h-[100vh] w-full flex-col justify-center px-8">
        <div className="mx-auto mb-8">
          <img
            src="/images/ekubo-logo.avif"
            alt="Girl in a jacket"
            width="100"
            height="150"
            className="mb-4 w-64 sm:mb-8 sm:w-96"
          />
          {/* <EkuboLogo className="mb-4 w-64 sm:mb-8 sm:w-96" /> */}
          {/* <DojoLogo className="mb-4 w-64 sm:mb-8 sm:w-96" /> */}
        </div>

        <p className="self-center text-center text-xl sm:w-1/2 sm:text-4xl">
          an open-source directory of Ekubo extensions
        </p>

        <div className="mt-8 space-x-2 text-center">
          <Button size={"lg"} onClick={handleScroll} variant={"default"}>
            extensions
          </Button>
          <a href="https://book.dojoengine.org/">
            <Button size={"lg"} withArrow variant={"outline"}>
              blog
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
