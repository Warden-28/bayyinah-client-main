import PageHeroSection from "@/components/common/PageHeroSection";
import React from "react";
import SearchForm from "./SearchForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FaqAccordion from "./FaqAccordion";
import QuestionForm from "./QuestionForm";

const FAQ_TAB_LISTS = [
  {
    label: "About the Academy",
    value: "about",
  },
  {
    label: "Courses & Teaching",
    value: "courses",
  },
  {
    label: "Scheduling & Access",
    value: "access",
  },
  {
    label: "Fees & Enrollment",
    value: "enrollment",
  },
];

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

const FaqPage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="faq-page">
        <PageHeroSection
          title="FAQs"
          description="Find quick answers to common questions about enrollment, courses, and support, everything you need to start your Qurani and Arabic journey with ease!"
        />

        <section
          aria-describedby="faq-section"
          className="bg-neutral-100 py-10 sm:py-18"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="top-content"
                className="flex items-center justify-center flex-col gap-y-6 mb-12"
              >
                <h3 className="text-4xl sm:text-5xl font-bold text-neutral-800 text-center">
                  Got Questions?
                </h3>
                <p className="text-lg sm:text-xl font-medium text-neutral-700 text-center">
                  We’ve Got Answers
                </p>

                <div aria-describedby="search-form-wrapper">
                  <SearchForm />
                </div>
              </div>

              <div aria-describedby="faq-tab">
                <Tabs defaultValue={FAQ_TAB_LISTS[0].value}>
                  <TabsList className="mx-auto">
                    {FAQ_TAB_LISTS.map((tab) => (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="bg-white"
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {FAQ_TAB_LISTS.map((tab) => (
                    <TabsContent value={tab.value} key={tab.value}>
                      <FaqAccordion faqData={FAQ_DATA} />
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-describedby="other-question-section"
          className="py-10 sm:py-18 bg-white"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="content-wrapper"
                className="py-9 px-6 bg-regal-blue-500 rounded-2xl flex flex-col items-center justify-center"
              >
                <div aria-describedby="title" className="mb-10 sm:mb-12">
                  <h3 className="text-4xl sm:text-5xl text-white font-bold text-center">
                    Any other Question?
                  </h3>
                </div>

                <div
                  aria-describedby="question-form-wrapper"
                  className="max-w-217 w-full mx-auto flex flex-col justify-center items-center"
                >
                  <QuestionForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default FaqPage;
