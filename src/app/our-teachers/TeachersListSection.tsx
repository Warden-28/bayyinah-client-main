"use client";
import Image from "next/image";
import React from "react";

// 1. Define the teachers' data
const teachers = [
  {
    name: "Raidah F. Gauri",
    title: "Quran Teacher",
    image: "/muslim-guardian.png",
  },
  {
    name: "Teacher Name",
    title: "Tajweed Specialist",
    image: "/muslim-guardian.png",
  },
  {
    name: "Teacher Name",
    title: "Arabic Instructor",
    image: "/muslim-guardian.png",
  },
  {
    name: "Teacher Name",
    title: "Quran Teacher",
    image: "/muslim-guardian.png",
  },
  {
    name: "Teacher Name",
    title: "Quran Teacher",
    image: "/muslim-guardian.png",
  },
  {
    name: "Teacher Name",
    title: "Islamic Studies Mentor",
    image: "/muslim-guardian.png",
  },
];

const TeachersListSection = () => {
  return (
    <section
      aria-describedby="teachers-lists-section"
      className="sm:py-20 py-10 bg-neutral-100"
    >
      <div className="container">
        <div aria-describedby="main-wrapper">
          {/* Header Section */}
          <div
            aria-describedby="top-content"
            className="flex flex-col items-center justify-center gap-y-10 mb-8 sm:mb-16"
          >
            <h6 className="py-2.5 px-5 rounded-full bg-[#CFE9FA] border border-[#C1DDEF] text-center text-base font-medium text-neutral-800 max-w-max">
              Teachers
            </h6>
            <h3 className="text-4xl uppercase text-center sm:text-5xl font-bold text-neutral-800 leading-snug sm:leading-snug">
              Meet Our Teachers
            </h3>
          </div>

          {/* Teacher Cards */}
          <div
            aria-describedby="teachers-card-wrapper"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teachers.map((teacher, index) => (
              <div
                key={index}
                aria-describedby="teacher-card"
                className="bg-white p-10 rounded-2xl flex flex-col gap-y-6 items-center justify-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-32 h-32 relative">
                  <Image
                    src={teacher.image}
                    width={128}
                    height={128}
                    alt={`${teacher.name} photo`}
                    className="rounded-full object-cover object-top"
                  />
                </div>

                <h4 className="text-2xl text-center sm:text-3xl font-bold text-neutral-900">
                  {teacher.name}
                </h4>
                <p className="text-xl font-normal text-neutral-700">
                  {teacher.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersListSection;
