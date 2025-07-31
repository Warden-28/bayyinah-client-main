import PageHeroSection from "@/components/common/PageHeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FoundationCommitment from "./FoundationCommitment";
import TeachersListSection from "./TeachersListSection";

const OurTeachersPage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="our-teacher-page">
        <PageHeroSection
          title="Our Teachers"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat possimus ipsam pariatur qui nisi, unde velit, tempore minus doloremque aut veritatis. Tempora nesciunt molestiae error magnam quas nihil voluptates sunt."
        />

        <section
          aria-describedby="what-are-u-looking-section"
          className="sm:py-20 py-10 bg-neutral-100"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div aria-describedby="single-teacher" className="mb-10 sm:mb-16">
                <h3 className="mb-10 sm:mb-12 text-4xl sm:text-5xl font-bold text-neutral-900 text-center">
                  TEACHERS
                </h3>

                <div
                  aria-describedby="head-teacher-card"
                  className="bg-white p-6 sm:p-10 rounded-2xl flex items-center gap-12 flex-col md:flex-row"
                >
                  <div
                    aria-describedby="left-column"
                    className="shrink-0 grow-0 basis-auto"
                  >
                    <div aria-describedby="image-wrapper" className="w-74 flex">
                      <Image
                        src={"/muslim-guardian.png"}
                        width={1020}
                        height={1242}
                        priority
                        alt="Guardian"
                      />
                    </div>
                  </div>

                  <div aria-describedby="right-column" className="flex-1">
                    <div aria-describedby="column-content">
                      <h4 className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-3 sm:mb-4">
                        Raidah F. Gauri
                      </h4>
                      <h6 className="text-lg sm:text-xl font-medium text-neutral-600 mb-5 sm:mb-7">
                        Bsc IT AIML - Arabic Teacher
                      </h6>

                      <p className="text-base sm:text-xl font-normal text-neutral-700">
                        Passionate and dedicated educator with a love for
                        helping students grow and succeed. With a strong focus
                        on creating engaging, supportive, and interactive
                        learning experiences, I strive to make every lesson
                        meaningful and enjoyable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div aria-describedby="teacher-and-students">
                <div
                  aria-describedby="top-content"
                  className="flex flex-col items-center justify-center gap-y-8 mb-8 sm:mb-12"
                >
                  <h6 className="py-2.5 px-5 rounded-full bg-[#CFE9FA] border border-[#C1DDEF] text-center text-base font-medium text-neutral-800 max-w-max">
                    TEACHER & STUDENTS
                  </h6>
                  <h3 className="text-4xl text-center sm:text-5xl font-bold text-neutral-800 leading-snug sm:leading-snug">
                    WHAT ARE YOU LOOKING FOR?
                  </h3>
                </div>

                <div
                  aria-describedby="action-card-wrapper"
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {Array.from({ length: 2 }).map((_, index) => (
                    <div
                      key={index}
                      aria-describedby="action-card"
                      className="bg-white p-5 sm:p-10 rounded-3xl"
                    >
                      <div
                        aria-describedby="image-icon-wrapper"
                        className="w-16 flex mb-6 sm:mb-8"
                      >
                        <Image
                          src={
                            index === 1
                              ? "/school-teaching.png"
                              : "/reading-book.png"
                          }
                          width={180}
                          height={180}
                          alt="school-teaching moment"
                          priority
                          className="aspect-square"
                        />
                      </div>

                      <div
                        aria-describedby="content-wrapper"
                        className="flex w-full flex-col gap-y-5 mb-6 sm:mb-7"
                      >
                        <h4 className="text-2xl sm:text-3xl font-medium text-neutral-800">
                          {index === 1
                            ? "Do you want to teach here?"
                            : "Do you want to learn here?"}
                        </h4>

                        <p className="text-base sm:text-lg font-normal text-neutral-700">
                          {index === 1
                            ? "What we offer is not just employment, but a chance to earn rewards from Allah by fulfilling your duties with sincerity and purpose."
                            : "Encourage the thirst for knowledge and watch minds bloom, as seeking knowledge brings you closer to Allah."}
                        </p>
                      </div>

                      <div aria-describedby="action-btn">
                        {index === 1 ? (
                          <Button asChild className="text-base sm:text-xl">
                            <Link href="/register-teacher">Register as Teacher</Link>
                          </Button>
                        ) : (
                          <Button asChild className="text-base sm:text-xl">
                            <Link href="/trial">Register as Student</Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <FoundationCommitment />
        <TeachersListSection />
      </div>
    </React.Fragment>
  );
};

export default OurTeachersPage;
