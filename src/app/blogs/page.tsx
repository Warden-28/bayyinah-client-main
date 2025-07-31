import PageHeroSection from "@/components/common/PageHeroSection";
import React from "react";
import AllBlogs from "./AllBlogs";
import { FaqSection, SubscribeNewsletter } from "@/components/homepage";

const BlogsPage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="all-blogs-page">
        <PageHeroSection
          title="Articles and Blog"
          description="Great resources for learning about new Islamic topic"
        />

        <section
          aria-describedby="all-blogs"
          className="py-10 sm:py-20 bg-white"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <AllBlogs />
            </div>
          </div>
        </section>
        <SubscribeNewsletter />
        <FaqSection />
      </div>
    </React.Fragment>
  );
};

export default BlogsPage;
