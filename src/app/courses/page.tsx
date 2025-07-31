import React from "react";
import PageHeroSection from "@/components/common/PageHeroSection";
import CourseCard from "./CourseCard";
import { CourseCardTypes } from "@/types";
import { Button } from "@/components/ui/button";
import ActionSection from "./ActionSection";
import { FaqSection } from "@/components/homepage";

const COURSES_DATA: CourseCardTypes[] = [
  {
    image: {
      url: "/course-image-1.jpg",
      alt: "course featured image",
      height: 3046,
      width: 4096,
    },
    subTitle: "Quran Tajweed",
    title: "Mastery in Quran Reading",
    shortDescription:
      "This Tajweed-focused course guides students from beginner to advanced Quran reading with clear pronunciation, fluency, and confidence.",
    action: {
      label: "Enroll Today",
      url: "courses/1",
    },
  },
  {
    image: {
      url: "/course-image-1.jpg",
      alt: "course featured image",
      height: 3046,
      width: 4096,
    },
    subTitle: "Quran Hifz",
    title: "Quran Hifz (Memorization)",
    shortDescription:
      "This course helps you memorize the entire Quran or selected portions through structured techniques, Tajweed, and revision.",
    action: {
      label: "Enroll Today",
      url: "courses/2",
    },
  },
  {
    image: {
      url: "/course-image-1.jpg",
      alt: "course featured image",
      height: 3046,
      width: 4096,
    },
    subTitle: "Arabic Language",
    title: "Arabic Language Read, Write, Talk, and Understand",
    shortDescription:
      "Arabic language course for intermediate learners to improve reading, writing, speaking, and comprehension in formal and daily use.",
    action: {
      label: "Enroll Today",
      url: "courses/3",
    },
  },
  {
    image: {
      url: "/course-image-1.jpg",
      alt: "course featured image",
      height: 3046,
      width: 4096,
    },
    subTitle: "Islamic Studies",
    title: "Islamic Studies Islamic Etiquettes and Manners",
    shortDescription:
      "Islamic etiquette (Adab) course covers personal, social, and spiritual manners to build strong character and deepen faith.",
    action: {
      label: "Enroll Today",
      url: "courses/4",
    },
  },
  {
    image: {
      url: "/course-image-1.jpg",
      alt: "course featured image",
      height: 3046,
      width: 4096,
    },
    subTitle: "Academic Arabic",
    title: "Arabic Language for School Students",
    shortDescription:
      "Academic Arabic course for Gulf schools strengthens reading, writing, speaking, and listening skills while integrating Arab culture and MSA.",

      action: {
      label: "Enroll Today",
      url: "courses/5",
    },
  },
];

const CoursesPage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="courses-page">
        <PageHeroSection
          title="Courses"
          description="Master Qurani reading and Arabic fluency with step-by-step lessons that build confidence and deepen your spiritual connection."
        />

        <section
          aria-describedby="courses-list"
          className="py-10 sm:py-18 bg-neutral-100"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="course-card-wrapper"
                className="w-full flex flex-col items-start gap-y-8 mb-16"
              >
                {COURSES_DATA.map((course, index) => (
                  <CourseCard key={index} cardData={course} />
                ))}
              </div>

       
            </div> 
          </div>
        </section>

        <ActionSection />
        <FaqSection />
      </div>
    </React.Fragment>
  );
};

export default CoursesPage;

