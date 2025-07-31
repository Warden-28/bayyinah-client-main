import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const WhatStudentsSays = () => {
  return (
    <React.Fragment>
      <div
        aria-describedby="what-students-says-section"
        className="py-10 bg-white sm:py-20"
      >
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="top-content"
              className="flex items-center justify-center flex-col mb-8 sm:mb-12"
            >
              <h6 className="px-5 py-2.5 mb-8 rounded-full border border-[#C1DDEF] bg-[#CFE9FA] flex items-center justify-center text-center">
                Our Students says
              </h6>

              <h3 className="text-4xl sm:text-5xl font-bold text-neutral-800 text-center mb-6">
                What Students Talk About us
              </h3>
              <p className="text-2xl font-normal text-neutral-700 text-center">
                See feedback from our students around the world
              </p>
            </div>

            <div aria-describedby="carousel-wrapper">
              <Carousel className="max-w-[920px] mx-auto">
                <CarouselContent>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div
                        aria-describedby="item-content-wrapper"
                        className="bg-[#E1F0F4] rounded-2xl py-12 px-14 flex items-center justify-center flex-col gap-y-10"
                      >
                        <p className="text-base sm:text-xl font-normal text-neutral-800 text-center">
                          I love my sheikh shabeer voice he shows how to become
                          an imam may allah reward him i feel soo happy in the
                          class that in the future i will be and imam because of
                          him jazakhala sheikh shabeer may allah allah reward
                          you
                        </p>

                        <div
                          aria-describedby="author"
                          className="flex items-center gap-3"
                        >
                          <div aria-describedby="image" className="w-16 flex">
                            <Image
                              src={"/muslim-guardian.png"}
                              width={1020}
                              height={1242}
                              alt="Muslim guardian"
                              priority
                              className="aspect-square rounded-full object-cover object-top"
                            />
                          </div>

                          <div className="flex items-start flex-col gap-y-0.5">
                            <h6 className="text-xl font-medium text-neutral-800">
                              Tom Nguyen
                            </h6>
                            <p className="text-lg font-normal text-neutral-600">
                              Australia
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="-left-2 lg:-left-12" />
                <CarouselNext className="-right-2 lg:-right-12"/>
                <CarouselDots />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhatStudentsSays;
