import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogCard from "@/components/common/BlogCard";
import { Button } from "@/components/ui/button";

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

const TAB_LISTS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Arabic",
    value: "arabic",
  },
  {
    label: "Quran",
    value: "quran",
  },
  {
    label: "Islamic",
    value: "islamic",
  },
  {
    label: "General",
    value: "general",
  },
];

const AllBlogs = () => {
  return (
    <React.Fragment>
      <Tabs defaultValue={TAB_LISTS[0].value} className="w-full">
        <TabsList>
          {TAB_LISTS.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {TAB_LISTS.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div
              aria-describedby="blog-card-wrapper"
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
              <BlogCard BlogCardData={LATEST_BLOGS} />
            </div>

            <div aria-describedby="view-all-btn" className="mt-18 flex items-center justify-center">
                <Button>View All Article</Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </React.Fragment>
  );
};

export default AllBlogs;
