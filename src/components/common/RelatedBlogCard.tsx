import { BlogCardTypes } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RelatedBlogCardProps {
  data: BlogCardTypes[];
}

const RelatedBlogCard: React.FC<RelatedBlogCardProps> = ({ data }) => {
  return (
    <React.Fragment>
      {data.map((card, index) => (
        <div
          key={index}
          aria-describedby="related-blog-card"
          className="border border-[#E6E6E6] flex flex-col rounded-3xl transition-colors ease-in-out duration-300 hover:border-regal-blue-500 hover:bg-regal-blue-100/5"
        >
          <div
            aria-describedby="card-header"
            className="flex items-center w-full"
          >
            <Image
              src={card.featureImage.url}
              width={card.featureImage.width}
              height={card.featureImage.height}
              alt={card.featureImage.alt}
              className="aspect-square object-cover rounded-t-3xl"
            />
          </div>

          <div aria-describedby="card-body" className="p-6 w-full">
            <p
              aria-describedby="created-at"
              className="text-base font-normal text-neutral-600"
            >
              {card.publishAt}
            </p>

            <div className="mb-4 flex flex-col items-start gap-y-1">
              <h4
                aria-describedby="blog-title"
                className="text-xl font-medium text-neutral-800 line-clamp-2"
              >
                {card.title}
              </h4>
              <p
                aria-describedby="short-description"
                className="text-sm font-normal text-neutral-700 line-clamp-1"
              >
                {card.shortDescription}
              </p>
            </div>

            <div aria-describedby="action" className="flex items-center">
              <Link
                href={card.action.url}
                className="flex items-center gap-x-2 text-lg font-medium text-yellow-500 transition-all ease-in-out duration-300 hover:text-yellow-600 group/read"
              >
                {card.action.label}
                <ArrowRight className="-translate-x-1 transition-transform ease-in-out duration-300 group-hover/read:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default RelatedBlogCard;
