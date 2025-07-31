import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "../ui/button";

const FAQ_DATA = [
  {
    question: "What age group is this course designed for?",
    answer:
      "This course is typically designed for children aged [insert age range, e.g., 5 to 12 years old], but we recommend reviewing the course details to ensure it matches your child’s learning level.",
  },
  {
    question: "Do children need any prior knowledge to join this course?",
    answer:
      "No prior knowledge is required. Our course is beginner-friendly and introduces topics in a fun and engaging way suitable for children.",
  },
  {
    question: "How are lessons delivered?",
    answer:
      "Lessons are delivered through [videos/live sessions/interactive activities], with a mix of visuals, games, and simple explanations to keep kids engaged and learning effectively.",
  },
  {
    question: "How long is the course?",
    answer:
      "The course runs for 2 weeks, with 12 lessons per week. Each lesson typically lasts around 30–60 minutes.",
  },
  {
    question: "Is parental supervision required?",
    answer:
      "For younger children (under 7), light supervision may be helpful, especially during the first few sessions. Older kids can usually follow along independently.",
  },
  {
    question: "What topics or skills will my child learn?",
    answer:
      "Children will learn Arabic, along with essential skills like problem-solving, creativity, and collaboration.",
  },
];

const FaqSection = () => {
  return (
    <React.Fragment>
      <section aria-describedby="faq-section" className="py-10 sm:py-16 bg-neutral-100">
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="top-content"
              className="flex items-center justify-center flex-col gap-y-8 max-w-4xl mx-auto mb-14 sm:mb-24"
            >
              <h6 className="px-5 text-base font-medium text-neutral-800 text-center py-2.5 bg-[#CFE9FA] flex items-center justify-center rounded-full w-max border border-[#C1DDEF]">
                FAQ
              </h6>
              <h3 className="text-3xl sm:text-5xl font-bold text-neutral-800 text-center leading-snug">
                Got Questions? We've Got Answers
              </h3>
            </div>

            <div aria-describedby="faq-wrapper" className="mb-10 sm:mb-20">
              <Accordion type="single" collapsible className="space-y-4">
                {FAQ_DATA.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${index}`}
                    className="p-4 sm:p-8 bg-gradient-to-r from-0% from-[#F8F8F8] to-100% to-[#F8F8F8] last:border rounded-3xl border border-[#F7F7F6] transition-all ease-in-out duration-300 data-[state=open]:border-regal-blue-500"
                  >
                    <AccordionTrigger className="text-lg sm:text-2xl p-0 font-bold text-neutral-900 hover:no-underline [&>svg]:w-7 [&>svg]:h-7">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base sm:text-lg font-normal text-neutral-700 pb-0 mt-7">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div
              aria-describedby="free-session-btn"
              className="flex items-center justify-center flex-col w-full"
            >
              <Button
                asChild
                className="rounded-full text-base sm:text-xl py-3 h-auto px-6"
              >
                <Link href={"/trial"}>Join Your free Session Now!</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FaqSection;
