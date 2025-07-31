// CourseCard.tsx (Refactored to render one card)
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CourseCardTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CourseCardProps {
  cardData: CourseCardTypes;
}

const CourseCard: React.FC<CourseCardProps> = ({ cardData }) => {
  return (
    <div
      aria-describedby="course-card"
      className="w-full sm:px-12 md:py-10 py-8 lg:px-14 xl:px-20 px-5 flex-col bg-white rounded-2xl flex items-center gap-x-14 gap-y-8 lg:flex-row"
    >
      <div
        aria-describedby="card-column-left"
        className={cn(
          "shrink-0 grow-0 basis-auto",
          cardData.title.length % 2 === 0 ? "lg:order-2" : "lg:order-1" // just for variation
        )}
      >
        <div
          aria-describedby="course-image"
          className="lg:max-w-97 w-full flex"
        >
          <Image
            src={cardData.image.url}
            width={cardData.image.width}
            height={cardData.image.height}
            alt={cardData.image.alt}
            className="rounded-xl aspect-video lg:aspect-auto"
          />
        </div>
      </div>

      <div
        aria-describedby="card-column-right"
        className={cn(
          "flex-1",
          cardData.title.length % 2 === 0 ? "lg:order-1" : "lg:order-2"
        )}
      >
        <span
          aria-describedby="sub-title"
          className="bg-sky-blue-200 max-w-max text-base font-medium text-neutral-800 border border-sky-blue-300 py-2.5 px-5 rounded-full flex items-center justify-center mb-6"
        >
          {cardData.subTitle}
        </span>

        <h3 className="text-3xl sm:text-4xl font-medium text-neutral-800 mb-5">
          {cardData.title}
        </h3>

        <p className="text-lg sm:text-2xl text-neutral-700 font-normal mb-8">
            {cardData.shortDescription}
        </p>


        <Button asChild>
          <Link href={cardData.action.url}>{cardData.action.label}</Link>
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
