import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link"; // button


const CourseDetailsHero = () => {
  return (
    <React.Fragment>
      <div aria-describedby="course-details-hero" className="max-w-3xl">
        <div aria-describedby="course-detail" className="mb-6 sm:mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-snug sm:leading-snug">
            Mastery in Quran Reading
          </h1>

          <p className="text-base sm:text-xl font-normal text-white mb-8">
            This course takes students from beginner to advanced Quranic
            reading, focusing on pronunciation, Tajweed, and fluency. By the
            end, you'll read the Quran confidently, accurately, and beautifully.
          </p>

          <Button variant="secondary" asChild>
              <Link href="/trial">Get Started</Link>
                  </Button>
        </div>

        <div
          aria-describedby="course-meta"
          className="flex items-center gap-3 flex-wrap"
        >
        </div>
      </div>
    </React.Fragment>
  );
};

export default CourseDetailsHero;
