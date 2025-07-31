import PageHeroSection from "@/components/common/PageHeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import FoundationCommitment from "../our-teachers/FoundationCommitment";
import { FaqSection } from "@/components/homepage";

const AllTeachersPage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="all-teachers-page">
        <PageHeroSection
          title="Meet our Teachers"
          description="Certified, passionate teachers guiding you to Qurani understanding and spiritual growth with care."
        />

        <section
          aria-describedby="teachers-sections"
          className="py-16 bg-neutral-100"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="content"
                className="bg-white py-8 sm:py-16 px-5 sm:px-10 rounded-2xl"
              >
                <div className="mb-10 sm:mb-12">
                  <h3 className="text-4xl sm:text-5xl font-bold leading-snug sm:leading-snug text-neutral-900 text-center">
                    Teachers
                  </h3>
                </div>

                <div
                  aria-describedby="teachers-card-wrapper"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                >
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      aria-describedby="teacher-card"
                      className="bg-neutral-100 p-10 rounded-2xl flex flex-col gap-y-6 items-center justify-center"
                    >
                      <div
                        aria-describedby="image-wrapper"
                        className="w-32 flex"
                      >
                        <Image
                          src={"/muslim-guardian.png"}
                          width={1020}
                          height={1242}
                          alt="guardian photo"
                          priority
                          className="aspect-square rounded-full object-cover object-top"
                        />
                      </div>

                      <h4 className="text-2xl text-center sm:text-3xl font-bold text-neutral-900">
                        Raidah F. Gauri
                      </h4>
                      <p className="text-xl font-normal text-neutral-700">
                        Quran Teacher
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  aria-describedby="view-all"
                  className="w-full flex flex-col items-center justify-center"
                >
                  <Button>View All Teachers</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FoundationCommitment />
        <FaqSection />
      </div>
    </React.Fragment>
  );
};

export default AllTeachersPage;
