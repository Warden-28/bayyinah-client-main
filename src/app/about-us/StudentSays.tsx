'use client';

import React from "react";
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const StudentSays = () => {
     const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )


  return (
    <React.Fragment>
      <section
        aria-describedby="student-says-section"
        className="py-10 sm:py-16 bg-white"
      >
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="top-content"
              className="flex flex-col gap-y-8 items-center justify-center max-w-4xl mx-auto mb-16"
            >
              <h6 className="px-5 py-2.5 bg-[#CFE9FA] rounded-full w-max text-base font-medium text-neutral-800">
                Our Students says
              </h6>
              <h3 className="text-3xl sm:text-5xl font-bold text-neutral-900 text-center uppercase leading-snug">
                Discover Your Perfect Program in Our courses
              </h3>
            </div>

            <div aria-describedby="carousel-main-wrapper" className="flex flex-col justify-center items-center">
              <Carousel className="w-full max-w-4xl" opts={{loop: true}} plugins={[plugin.current]}>
                <CarouselContent>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div
                        aria-describedby="carousel-item"
                        className="bg-[#E1F0F4] p-5 sm:p-10 rounded-xl flex items-center justify-center flex-col"
                      >
                        <h3 className="text-2xl sm:text-3xl text-center font-bold text-neutral-800 mb-6">
                          What our students say
                        </h3>

                        <p
                          aria-describedby="review-text"
                          className="text-lg sm:text-xl font-normal text-neutral-800 text-center"
                        >
                          Finally, I understand Salah prayers deeply, not just
                          recite them.
                        </p>

                        <div
                          aria-describedby="author-detail"
                          className="flex items-center gap-x-4 mt-12"
                        >
                          <div
                            aria-describedby="image-wrapper"
                            className="w-12 sm:w-16 flex"
                          >
                            <Image
                              src={"/muslim-guardian.png"}
                              width={1020}
                              height={1242}
                              alt="Bayyinah guardian photo"
                              className="rounded-full aspect-square object-cover object-top"
                            />
                          </div>

                          <div className="flex items-start flex-col gap-y-1">
                            <h6 className="text-base sm:text-xl font-medium text-neutral-800">
                              Tom Nguyen
                            </h6>
                            <p className="text-sm sm:text-lg font-normal text-neutral-700">
                              Australia
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bottom-0 -left-3 lg:-left-12"/>
                <CarouselDots />
                <CarouselNext className="bottom-0 -right-3 lg:-right-12"/>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default StudentSays;
