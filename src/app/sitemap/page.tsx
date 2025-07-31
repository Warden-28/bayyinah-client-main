import PageHeroSection from "@/components/common/PageHeroSection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import PageTree from "./PageTree";
import Link from "next/link";

const SitemapPage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="sitemap-page">
        <PageHeroSection title="Sitemap" />

        <section
          aria-describedby="sitemap-tree-section"
          className="bg-white py-10 sm:py-20 "
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="sitemap-tree-wrapper"
                className="overflow-x-auto"
              >
                <PageTree />
              </div>
            </div>
          </div>
        </section>

        <section
          aria-describedby="book-trial-section"
          className={cn(
            "bg-regal-blue-500 py-10 sm:py-16 relative overflow-hidden",
            // big shape
            "before:absolute before:z-[2] before:w-[450] before:h-[450] before:bg-[#0C4681] before:rounded-full before:top-full before:-right-40 before:-translate-y-20",
            // small shape
            "after:absolute after:z-[2] after:w-[450px] after:h-[450px] after:top-full after:-right-4 after:-translate-y-8 after:bg-[#0D4B89] after:rounded-full"
          )}
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="content-wrapper"
                className="flex items-center justify-center flex-col gap-y-5 mx-auto relative z-[5]"
              >
                <h6 className="py-2.5 px-5 rounded-full bg-[#155699] border border-[#1E63AA] text-center text-base font-medium text-white max-w-max">
                  Lets Learn with us!
                </h6>

                <h3 className="text-3xl sm:text-5xl font-bold text-white text-center leading-snug">
                  The path to success begins with Islamic knowledge, a key to
                  both this life and the Hereafter
                </h3>

                 <div className="mt-5">
                      <Button variant="secondary" asChild>
                         <Link href="/trial">Join Now</Link>
                            </Button>
                                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default SitemapPage;
