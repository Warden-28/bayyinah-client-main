import { OfferCardTypes } from "@/types";
import Image from "next/image";
import React from "react";

const OFFERS: OfferCardTypes[] = [
  {
    key: "1",
    label: "Quran Course",
    image: {
      url: "/quran-ayat.jpg",
      width: 1014,
      height: 720,
      alt: "Quran Course",
    },
  },
  {
    key: "2",
    label: "Arabic Course",
    image: {
      url: "/arabic-grammar.jpg",
      width: 1014,
      height: 720,
      alt: "Arabic Course",
    },
  },{
    key: "3",
    label: "Islamic Studies",
    image: {
      url: "/islamic-studies.jpg",
      width: 1014,
      height: 720,
      alt: "Islamic studies",
    },
  },
];

const WhatWeOffer = () => {
  return (
    <React.Fragment>
      <section
        aria-describedby="what-we-offer-section"
        className="bg-neutral-100 py-10 sm:py-20"
      >
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="top-content-wrapper"
              className="flex items-center justify-center flex-col gap-y-6 mx-auto max-w-max mb-10 sm:mb-16"
            >
              <h6 className="bg-sky-blue-300 py-2.5 text-center uppercase px-5 rounded-full flex items-center justify-center max-w-max border border-sky-blue-400 text-neutral-900 text-sm sm:text-base font-medium">
                DISCOVER YOUR PERFECT PROGRAME FROM OUR COURSES
              </h6>
              <h3 className="text-3xl sm:text-5xl text-neutral-800 font-bold text-center">
                WHAT WE OFFER
              </h3>
            </div>

            <div
              aria-describedby="offer-card-wrapper"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"
            >
              {OFFERS.map((offer) => (
                <div
                  key={offer.key}
                  aria-describedby="offer-card"
                  className="bg-white rounded-lg"
                >
                  <div
                    aria-describedby="image-wrapper"
                    className="p-4 pb-5 flex flex-col items-center justify-center"
                  >
                    <Image
                      src={offer.image.url}
                      height={offer.image.height}
                      width={offer.image.width}
                      alt={offer.image.alt}
                      className="w-full aspect-video object-cover rounded-md"
                    />
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-medium text-neutral-900 text-center px-4 pb-6">
                    {offer.label}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WhatWeOffer;
