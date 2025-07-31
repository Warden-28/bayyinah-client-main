import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const JoiningGuide = () => {
  return (
    <React.Fragment>
      <section
        aria-describedby="joining-guide-section"
        className="py-16 bg-white"
      >
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="content-wrapper"
              className={cn('bg-[#E1F0F4] border relative border-[#E0E6E8] rounded-2xl p-4 flex items-center flex-col gap-x-10 gap-y-12 z-[1] overflow-hidden',
                // md
                'md:flex-row md:px-14 md:py-11',
                // bottom right shape
                'before:absolute before:-z-[1] before:w-52 before:h-52 before:bg-[#9FD8FA] before:top-full before:right-0 before:-translate-y-20 before:rounded-full before:blur-[100px]',
                // top left shape
                'after:absolute after:-z-[1] after:w-52 after:h-52 after:bg-[rgba(249,213,147,0.60)] after:top-0 after:left-0 after:-translate-y-20 after:rounded-full after:blur-[50px]',
              )}
            >
              <div
                aria-describedby="left-column"
                className="shrink-0 grow-0 basis-auto"
              >
                <div
                  aria-describedby="image-wrapper"
                  className="w-full md:w-2xs flex items-center"
                >
                  <Image
                    src={"/hijab-little-girl.png"}
                    width={1344}
                    height={768}
                    alt="hijab little girl"
                    className="aspect-video md:aspect-square object-cover rounded-2xl"
                  />
                </div>
              </div>

              <div aria-describedby="right-column" className="flex-1">
                <div aria-describedby="content" className="flex items-start flex-col">
                  <h3 className="text-3xl leading-snug font-bold text-neutral-800 mb-4">
                    NOT SURE WHERE TO START?
                  </h3>
                  <p className="text-base sm:text-xl font-normal text-neutral-700 mb-8">
                    Want to know Special Offers & Updates of new courses?
                  </p>

                  <Button asChild className="text-base sm:text-xl">
                    <Link href={'/trial'}>Join Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default JoiningGuide;
