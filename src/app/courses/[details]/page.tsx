"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  BookAudio,
  CalendarClock,
  CalendarFold,
  ChartNoAxesCombined,
  CircleCheck,
  CirclePlay,
  Clock,
  FileText,
  Languages,
} from "lucide-react";
import { IoIosPeople } from "react-icons/io";
import { FaLaptop } from "react-icons/fa";

import {
  CourseContentDataTypes,
  CourseDescriptionTypes,
  CourseFeaturesTypes,
  CourseHighlighDataTypes,
} from "@/types";

import CourseFeatureBox from "./CourseFeatureBox";
import CourseDescription from "./CourseDescription";
import CourseContentBox from "./CourseContentBox";
import CoursePriceCard from "./CoursePriceCard";
import CourseIncludesBox from "./CourseIncludesBox";
import CourseHighlightBox from "./CourseHighlightBox";
import CourseDetailsHero from "./CourseDetailsHero";
import GetTrialClass from "./GetTrialClass";
import { FaqSection } from "@/components/homepage";

// ---------------------------------------------
// Course Static Data
// ---------------------------------------------

const COURSE_FEATURES: CourseFeaturesTypes[] = [
  {
    key: "what-you-learn",
    title: "What You'll Learn",
    features: [
      { icon: BadgeCheck, label: "The correct pronunciation of Arabic letters (Makharij)." },
      { icon: BadgeCheck, label: "Rules of Tajweed (proper recitation of the Quran)." },
      { icon: BadgeCheck, label: "How to read the Quran fluently with proper rhythm and tone." },
      { icon: BadgeCheck, label: "Understanding the basics of Arabic phonetics." },
      { icon: BadgeCheck, label: "Transition from basic reading to advanced Quranic recitation." },
      { icon: BadgeCheck, label: "Memorization of selected Quranic verses (optional)." },
      { icon: BadgeCheck, label: "Developing confidence in reading the Quran independently." },
    ],
  },
  {
    key: "requirements",
    title: "Requirements",
    features: [
      { icon: BadgeCheck, label: "No prior knowledge of Arabic or Quranic reading is required." },
      { icon: BadgeCheck, label: "A copy of the Quran (Mushaf) for practice." },
      { icon: BadgeCheck, label: "A device with internet access (for online classes)." },
      { icon: BadgeCheck, label: "Commitment to regular practice and attendance." },
      { icon: BadgeCheck, label: "A willingness to learn and improve recitation skills." },
    ],
  },
  {
    key: "who-this-for",
    title: "Who This Course is For",
    features: [
      { icon: BadgeCheck, label: "Beginners with little or no experience in reading the Quran." },
      { icon: BadgeCheck, label: "Individuals who want to improve their Quranic recitation skills." },
      { icon: BadgeCheck, label: "Parents who want to teach their children proper Quran reading." },
      { icon: BadgeCheck, label: "New Muslims unfamiliar with Quranic Arabic." },
      { icon: BadgeCheck, label: "Anyone interested in mastering Tajweed and Quranic fluency." },
    ],
  },
];

const COURSE_DESCRIPTION_DATA: CourseDescriptionTypes = {
  title: "Description",
  content:
    "This course takes students from beginner to advanced levels in Quranic reading. It focuses on mastering fundamentals of Quranic Arabic, including pronunciation, Tajweed rules, and fluent recitation. By the end, you'll be confident in reading the Quran accurately and beautifully.",
};

const COURSE_CONTENT_DATA: CourseContentDataTypes = {
  title: "Course Content",
  key: "curriculum",
  lectures: [
    {
      key: "intro",
      title: "Introduction to Quranic Arabic",
      items: [
        {
          label: "Introduction", type: "video",
          duration: ""
        },
        {
          label: "Hierarchy Design", type: "video",
          duration: ""
        },
        {
          label: "Basic Visual Design", type: "video",
          duration: ""
        },
      ],
      meta: {
        totalDuration: "40 min",
        totalLectures: "3 Lectures",
      },
    },
    {
      key: "basic-quran",
      title: "Basic Quran Reading",
      items: [
        {
          label: "Introduction", type: "video",
          duration: ""
        },
        {
          label: "Makharij Practice", type: "video",
          duration: ""
        },
        {
          label: "Tajweed Basics", type: "video",
          duration: ""
        },
        {
          label: "Ayatul Kursi Recitation", type: "video",
          duration: ""
        },
      ],
      meta: {
        totalDuration: "60 min",
        totalLectures: "4 Lectures",
      },
    },
    {
      key: "intermediate",
      title: "Intermediate Quran Reading",
      items: [
        {
          label: "Advanced Tajweed", type: "video",
          duration: ""
        },
        {
          label: "Surah Al-Ikhlas Practice", type: "video",
          duration: ""
        },
        {
          label: "Common Mistakes in Recitation", type: "video",
          duration: ""
        },
        {
          label: "Long Verses Practice", type: "video",
          duration: ""
        },
        {
          label: "Fluency Drills", type: "video",
          duration: ""
        },
      ],
      meta: {
        totalDuration: "120 min",
        totalLectures: "5 Lectures",
      },
    },
  ],
};

const COURSE_INCLUDES = [
  {
    key: "this-course-includes",
    title: "Our Popular Couses",
    features: [
     
    ],
  },
];

const COURSE_HIGHLIGHT_DATA: CourseHighlighDataTypes[] = [
  { key: "level", label: "Level", icon: ChartNoAxesCombined, value: "Beginner" },
  { key: "lecture-total-duration", label: "Class Duration", icon: Clock, value: "30-60 min" },
  { key: "course-duration", label: "Course Duration", icon: CalendarClock, value: "4-6 Months" },
  { key: "mode", label: "Mode", icon: FaLaptop, value: "Online" },
  { key: "age-group", label: "Age Group", icon: IoIosPeople, value: "Kids and Adults" },
];

// ---------------------------------------------
// Component
// ---------------------------------------------

const CourseDetails = () => {
  return (
    <React.Fragment>
      <div aria-describedby="course-details-page">
        <section className="py-12 sm:py-20 bg-regal-blue-500">
          <div className="container">
            <CourseDetailsHero />
          </div>
        </section>

        <section className="py-20 bg-neutral-100">
          <div className="container">
            <div className="max-w-max flex items-center flex-wrap gap-3 -mt-26 mb-16">
              <CourseHighlightBox data={COURSE_HIGHLIGHT_DATA} />
            </div>

            <div className="flex flex-col-reverse lg:flex-row gap-8 w-full">
              {/* Left Column */}
              <div className="flex-1 w-full space-y-8">
                <CourseDescription data={COURSE_DESCRIPTION_DATA} />
                <CourseFeatureBox data={COURSE_FEATURES} />
                <CourseContentBox data={COURSE_CONTENT_DATA} />
              </div>

              {/* Right Column */}
              <div className="shrink-0 sm:w-105 w-full lg:sticky top-3 max-h-screen overflow-y-auto">
                <div className="space-y-8">
                  <CoursePriceCard />
                  <CourseIncludesBox data={COURSE_INCLUDES} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <GetTrialClass />
        <FaqSection />
      </div>
    </React.Fragment>
  );
};

export default CourseDetails;
