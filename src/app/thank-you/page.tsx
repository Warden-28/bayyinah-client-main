import PageHeroSection from "@/components/common/PageHeroSection";
import Image from "next/image";
import React from "react";
import WhatStudentsSays from "./WhatStudentsSays";
import { FaqSection } from "@/components/homepage";

const WHAT_NEXT_CARDS = [
  {
    image: {
      url: "/contact-vector.png",
      width: 826,
      height: 661,
      alt: "contact vector",
    },
    label: (
      <>
        We will <span className="text-yellow-500 font-medium">contact</span>{" "}
        you!
      </>
    ),
  },
  {
    image: {
      url: "/trial-session-vector.png",
      width: 513,
      height: 514,
      alt: "trial session vector",
    },
    label: (
      <>
        Join <span className="text-sky-blue-500 font-medium">Trial</span>{" "}
        Session
      </>
    ),
  },
  {
    image: {
      url: "/schedule-vector.png",
      width: 669,
      height: 420,
      alt: "schedule vector",
    },
    label: (
      <>
        Get your Class{" "}
        <span className="text-regal-blue-500 font-medium">Schedule</span>
      </>
    ),
  },
];

const ThankYouPage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="thank-you-page">
        <PageHeroSection
          title="START EXPLORING NOW!"
          description="May Allah brings lots of Barakah in your Qur’an Learning Journey. Ameen!!!"
        />

        <section
          aria-describedby="what-next-section"
          className="py-10 bg-neutral-100 sm:py-20"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="top-content"
                className="flex items-center justify-center flex-col mb-8 sm:mb-16"
              >
                <h3 className="text-4xl sm:text-5xl font-bold text-neutral-800 text-center">
                  What Next...
                </h3>
              </div>

              <div
                aria-describedby="card-wrapper"
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3"
              >
                {WHAT_NEXT_CARDS.map((card, index) => (
                  <div
                    key={index}
                    aria-describedby="card"
                    className="px-6 py-8 rounded-2xl bg-white flex items-center justify-between flex-col"
                  >
                    <div aria-describedby="image-wrapper" className="max-w-36 mb-6">
                      <Image
                        src={card.image.url}
                        width={card.image.width}
                        height={card.image.height}
                        alt={card.image.alt}
                        priority
                        className="aspect-square"
                      />
                    </div>

                    <h5 className="text-2xl font-normal text-neutral-800 text-center">
                      {card.label}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WhatStudentsSays />
        <FaqSection />
      </div>
    </React.Fragment>
  );
};

export default ThankYouPage;
