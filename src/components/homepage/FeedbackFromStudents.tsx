'use client';

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { IconQuote } from "./svgIcons";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Javed Maqsood",
    designation: "Parent of Arabic & Quran",
    image: "/muslim-man.png",
    review: "My son has been studying with Bayyinah and his love for Arabic and the Qur’an has grown so much, Alhamdulillah!!!",
  },
  {
    name: "Aejaz Sayed",
    designation: "Parent of Student",
    image: "/muslim-man.png",
    review: "This academy has been a blessing, my daughter looks forward to every class and is learning so much",
  },
  {
    name: "Ibrahim Sheikh",
    designation: "Parent of Student",
    image: "/muslim-man.png",
    review: "Both of my kids are enrolled at Bayyinah and we’re amazed by the progress they’ve made, Alhamdulillah",
  },
  {
    name: "Farhat Jahan",
    designation: "Parent of Quran Student",
    image: "/muslim-man.png",
    review: "My daughter’s confidence in reading the Qur’an has improved greatly.",
  },
  {
    name: "Abeda Begum",
    designation: "Parent of Student",
    image: "/muslim-man.png",
    review: "Bayyinah Academy has made Islamic learning easy and enjoyable for my son—highly recommended!",
  },
];

const FeedbackFromStudents = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section
      aria-describedby="feedback-from-students-section"
      className="sm:pt-16 pt-10 pb-12 md:pb-20 lg:pb-12 bg-white"
    >
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-y-8 max-w-4xl mx-auto mb-14 sm:mb-24">
          <h6 className="px-5 text-base font-medium text-neutral-800 text-center py-2.5 bg-[#CFE9FA] flex items-center justify-center rounded-full w-max border border-[#C1DDEF]">
            FEEDBACK FROM OUR STUDENTS
          </h6>
          <h3 className="text-3xl sm:text-5xl font-bold text-neutral-800 text-center leading-snug sm:leading-tight">
            DISCOVER WHY STUDENTS LOVE LEARNING WITH US
          </h3>
        </div>

        <div className="relative flex items-start flex-col lg:flex-row">
          <div className="flex items-center h-[414px] gap-x-3 overflow-hidden">
            <Image
              src="/placeholder-muslim-boy.png"
              width={540}
              height={1242}
              alt="muslim boy placeholder"
              className="w-44 h-full flex"
            />
            <Image
              src="/muslim-man.png"
              width={540}
              height={1242}
              alt="muslim man placeholder"
              className="w-44 h-full flex"
            />
            <Image
              src="/muslim-guardian.png"
              width={1020}
              height={1242}
              alt="muslim guardian placeholder"
              className="w-[340px] h-full flex"
            />
          </div>

          <div className="w-full -mt-28 lg:w-auto lg:-ml-11 lg:-mt-9">
            <Carousel
              className="w-full lg:w-[480px] shadow-lg rounded-2xl"
              plugins={[plugin.current]}
              opts={{ align: "center", dragFree: true, loop: true }}
            >
              <CarouselContent>
                {testimonials.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-white p-4 sm:p-9 rounded-2xl border border-[#EDEDED] flex flex-col items-start justify-center gap-y-9">
                      <div className="flex items-center justify-between gap-x-6 w-full">
                        <div className="flex items-center gap-x-4">
                          <div className="w-16 flex items-center">
                            <Image
                              src={item.image}
                              width={100}
                              height={100}
                              alt={item.name}
                              className="aspect-square rounded-full object-cover object-top"
                            />
                          </div>
                          <div className="flex flex-col gap-y-0.5">
                            <h5 className="text-lg sm:text-xl font-semibold text-neutral-800">
                              {item.name}
                            </h5>
                            <p className="text-base sm:text-lg text-neutral-700">
                              {item.designation}
                            </p>
                          </div>
                        </div>
                        <div className="text-4xl text-[#DDDBE2]">
                          <IconQuote />
                        </div>
                      </div>
                      <div>
                        <p className="text-xl sm:text-2xl text-neutral-900">
                          {item.review}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="absolute top-full w-2xs translate-y-4 md:translate-y-10 xl:translate-y-16 left-1/2 -translate-x-1/2 z-40 flex items-center gap-x-3">
                <CarouselPrevious className="static translate-0 shadow-lg" />
                <CarouselDots className="flex-1 mt-0" />
                <CarouselNext className="static translate-0 shadow-lg" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackFromStudents;
