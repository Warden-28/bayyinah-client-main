import PageHeroSection from "@/components/common/PageHeroSection";
import RelatedBlogCard from "@/components/common/RelatedBlogCard";
import { SubscribeNewsletter } from "@/components/homepage";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CONTENT_BLOCKS = [
  {
    title:
      "The Spiritual Significance of Ramadan: A Month of Reflection and Renewal",
    description:
      " Ramadan, the ninth month of the Islamic lunar calendar, is a sacred time when Muslims worldwide engage in fasting, prayer, and self-reflection. This holy month commemorates the revelation of the Quran to Prophet Muhammad (2) and serves as a spiritual journey to purify the soul, strengthen faith, and foster empathy.",
  },
  {
    title: "Fasting: A Pillar of Taqwa",
    description: `Allah (SWT) emphasizes the importance of fasting in the Quran:
"O you who believe! Fasting is prescribed for you as it was prescribed for those before you, that you may attain Taqwa (piety)." (Quran 2:183) Fasting cultivates self-discipline, gratitude, and compassion for the less fortunate, aligning believers with divine consciousness.`,
  },
  {
    title: "A Month of Spiritual Revival",
    description: `The Prophet (s) highlighted Ramadan's transformative power: are closed, and the devils are chained." (Sahih Bukhari 1899)
"When Ramadan begins, the gates of Paradise are opened, the gates of Hellfire
forgiveness, increase good deeds, and reconnect with Allah. This Hadith underscores the unique opportunity for believers to seek`,
  },
  {
    title: "A Month of Spiritual Revival",
    description: `The Prophet (s) highlighted Ramadan's transformative power: are closed, and the devils are chained." (Sahih Bukhari 1899)
"When Ramadan begins, the gates of Paradise are opened, the gates of Hellfire
forgiveness, increase good deeds, and reconnect with Allah. This Hadith underscores the unique opportunity for believers to seek`,
  },
  {
    title: "The Night of Power",
    description: `Laylat al-Qadr (Night of Decree), described in the Quran, holds immense
blessings: Worship during this night surpasses decades of devotion, making Ramadan a
"The Night of Decree is better than a thousand months." (Quran 97:3)`,
  },
  {
    title: "Community and Charity",
    description: `Ramadan fosters unity through shared iftars and Zakat. The Prophet (2) said:
diminishing their reward." (Sunan Ibn Majah 1746)
"Whoever feeds a fasting person will have a reward like theirs, without.`,
  },
  {
    title: "Conclusion",
    description: `Ramadan is a divine gift—a time to reset spiritually, seek forgiveness, and embody Quranic values. Through fasting, prayer, and charity, Muslims renew their covenant with Allah, emerging with hearts purified and faith strengthened. May this Ramadan illuminate our souls and deepen our connection to the Divine.`,
  },
];

const RELATED_BLOGS = [
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
      url: "#",
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
      url: "#",
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
      url: "#",
      label: "Read More",
    },
  },
];

const BlogDetailPage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="blog-detail-page">
        <PageHeroSection title="A Month of Reflection and Renewal" />

        <section
          aria-describedby="blog-detail-section"
          className="py-10 sm:py-20 bg-white"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div aria-describedby="content-wrapper">
                <div
                  aria-describedby="top-content"
                  className="flex flex-col items-center justify-center mb-11"
                >
                  <h6 className="text-lg sm:text-xl font-medium text-neutral-900 text-center mb-5">
                    The Spiritual Significance of Ramadan
                  </h6>
                  <h2 className="text-4xl sm:text-5xl font-medium text-neutral-800 text-center mb-7">
                    A Month of Reflection and Renewal
                  </h2>

                  <div
                    aria-describedby="author"
                    className="bg-[#CFE9FA] border border-[#C1DDEF] rounded-full py-2.5 px-5 flex items-center justify-center max-w-max"
                  >
                    <p className="text-sm font-medium text-neutral-800 text-center">
                      Umm Raidah : February, 25, 2025
                    </p>
                  </div>
                </div>

                <div aria-describedby="blog-content">
                  <div
                    aria-describedby="featured-image"
                    className="flex items-center mb-9 sm:mb-15"
                  >
                    <Image
                      src={"/blog-feature-1.png"}
                      width={3996}
                      height={2838}
                      alt="Bayyinah blog featured image"
                      className="aspect-video w-full rounded-2xl"
                    />
                  </div>

                  <div
                    aria-describedby="content-block-wrapper"
                    className="space-y-9 sm:space-y-12"
                  >
                    {CONTENT_BLOCKS.map((block, index) => (
                      <div
                        key={index}
                        aria-describedby="content-block"
                        className="flex flex-col gap-y-5 sm:gap-y-7.5 items-start justify-normal"
                      >
                        <h4 className="text-2xl sm:text-3xl font-medium text-neutral-900">
                          {block.title}
                        </h4>
                        <p className="text-base sm:text-xl font-normal text-neutral-700">
                          {block.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-describedby="related-post-section"
          className="py-10 sm:py-17 bg-white"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="title"
                className="flex items-center justify-center mb-12"
              >
                <h3 className="text-4xl sm:text-5xl font-bold text-neutral-800 text-center">
                  Related Post
                </h3>
              </div>

              <div
                aria-describedby="related-blog-card-wrapper"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <RelatedBlogCard data={RELATED_BLOGS} />
              </div>
            </div>
          </div>
        </section>

        <SubscribeNewsletter />
      </div>
    </React.Fragment>
  );
};

export default BlogDetailPage;
