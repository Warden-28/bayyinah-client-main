import { BlogCardTypes } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  BlogCardData: BlogCardTypes[];
}

const BlogCard: React.FC<BlogCardProps> = ({ BlogCardData }) => {
  return (
    <React.Fragment>
      {BlogCardData.map((blog, index) => (
        <div
          key={index}
          aria-describedby="blog-card"
          className="flex items-start sm:items-center gap-x-8 gap-y-7 flex-col sm:flex-row "
        >
          <div
            aria-describedby="blog-feature-image"
            className="sm:max-w-3xs flex grow-0 shrink-0 basis-auto"
          >
            <Image
              src={blog.featureImage.url}
              width={blog.featureImage.width}
              height={blog.featureImage.height}
              alt={blog.featureImage.alt}
              className="aspect-video object-cover object-center rounded-xl"
            />
          </div>
          <div
            aria-describedby="blog-meta"
            className="flex items-start flex-col justify-between flex-1"
          >
            <p
              aria-describedby="created-at"
              className="text-base font-normal text-neutral-600"
            >
              {blog.publishAt}
            </p>
            <div className="mb-4 flex flex-col items-start gap-y-1">
              <h4
                aria-describedby="blog-title"
                className="text-xl font-medium text-neutral-800 line-clamp-2"
              >
                {blog.title}
              </h4>
              <p
                aria-describedby="short-description"
                className="text-sm font-normal text-neutral-700 line-clamp-1"
              >
                {blog.shortDescription}
              </p>
            </div>

            <div aria-describedby="action" className="flex items-center">
              <Link
                href={blog.action.url}
                className="flex items-center gap-x-2 text-lg font-medium text-yellow-500 transition-all ease-in-out duration-300 hover:text-yellow-600 group/read"
              >
                {blog.action.label}
                <ArrowRight className="-translate-x-1 transition-transform ease-in-out duration-300 group-hover/read:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default BlogCard;
