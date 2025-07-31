import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LATEST_BLOGS = [
  {
    featureImage: {
      url: "/blog-feature-1.png",
      width: 3996,
      height: 2838,
      alt: "blog feature image",
    },
    publishAt: "Oct 24, 2023",
    title: " Ramadan: A Month of Reflection and Renewal",
    shortDescription: "Ramadan, the ninth month of the Islamic",
    action: {
      url: "/blogs/1",
      label: "Read More",
    },
  },
  {
    featureImage: {
      url: "/blog-feature-2.png",
      width: 3996,
      height: 2838,
      alt: "blog feature image",
    },
    publishAt: "Nov 10, 2023",
    title: "Sha‘ban: A Month of Preparation and Spiritual",
    shortDescription: "Sha‘ban, the eighth month of the Islamic",
    action: {
      url: "/blogs/2",
      label: "Read More",
    },
  },
  {
    featureImage: {
      url: "/blog-feature-3.png",
      width: 3996,
      height: 2838,
      alt: "blog feature image",
    },
    publishAt: "Jan 16, 2024",
    title: "Rajab: A Month of Divine Mercy and Awakening",
    shortDescription: "Rajab, the seventh month of the Islamic",
    action: {
      url: "/blogs/3",
      label: "Read More",
    },
  },
  {
    featureImage: {
      url: "/blog-feature-4.png",
      width: 3996,
      height: 2838,
      alt: "blog feature image",
    },
    publishAt: "Mar 16, 2023",
    title: "Shawwal: A Month of Gratitude and Continuity",
    shortDescription: "Shawwal, the tenth month of the Islamic",
    action: {
      url: "/blogs/4",
      label: "Read More",
    },
  },
];

const HomeArticles = () => {
  return (
    <React.Fragment>
      <section aria-describedby="home-articles-section" className="pt-20 pb-10 sm:pb-24">
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="top-content"
              className="flex flex-col gap-y-6 items-center justify-center mx-auto max-w-4xl mb-14"
            >
              <h6 className="px-5 text-base font-medium text-neutral-800 text-center py-2.5 bg-[#CFE9FA] flex items-center justify-center rounded-full w-max border border-[#C1DDEF]">
                ARTICLES AND BLOGS
              </h6>

              <h3 className="text-3xl sm:text-5xl font-bold text-neutral-900 text-center leading-snug">
                GREAT RESOURCES FOR LEARNING ABOUT NEW ISLAMIC TOPIC
              </h3>
            </div>

            <div
              aria-describedby="blog-card-wrapper"
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
              {LATEST_BLOGS.map((blog, index) => (
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

                    <div
                      aria-describedby="action"
                      className="flex items-center"
                    >
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
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomeArticles;
