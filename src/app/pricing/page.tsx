import PageHeroSection from "@/components/common/PageHeroSection";
import { FaqSection, FeedbackFromStudents } from "@/components/homepage";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PRICING_PLANS = [
  {
    key: "basic",
    title: "Basic",
    discountPercentage: "Regular Plan",
    price: "$8.00",
    priceType: "/hour",
    installmentType: "Entry Level Package",
    features: [
      { label: "Proficient Arabic (Native) Teacher", available: true},
      { label: " E-Certificate", available: true},
      { label: "E-Syllabus Access", available: true },
      { label: "Direct Chat with Teacher and Coach"},
      { label: "Lesson Reschedules" },
      { label: "Coaching and Planning Sessions" },
      { label: "Progress Report" },
      { label: "Lesson Cancellation" },
      { label: "Family Discount" },
      { label: "Top 5% Rated Teacher" },
      { label: "Video Recordings" },
    ],
    action: {
      url: "/trial",
      label: "Subscribe Now",
    },
  },
  {
    key: "exclusive",
    title: "Essentials",
    discountPercentage: "Smart Pack",
    price: "$9.00",
    priceType: "/hour",
    installmentType: "Core Feature Set",
    features: [
      { label: "Proficient Arabic (Native) Teacher", available: true},
      { label: " E-Certificate", available: true},
      { label: "E-Syllabus Access", available: true },
      { label: "Direct chat with Teacher and Coach", available: true },
      { label: "Upto 2 Lesson Reschedules per Month", available: true },
      { label: "Coaching and Planning Sessions" },
      { label: "Progress Report" },
      { label: "Lesson Cancellation" },
      { label: "Family Discounts" },
      { label: "Top 5% Rated Teacher" },
      { label: "Video Recordings" },
      
    ],
    action: {
      url: "/trial",
      label: "Subscribe Now",
    },
  },
  {
    key: "necessary",
    
    title: "Premium",
    discountPercentage: "Great Deal",
    price: "$11.00",
    priceType: "/hour",
    installmentType: "Advanced Benifits",
    features: [
      { label: "Proficient Arabic (Native) Teacher", available: true},
      { label: " E-Certificate", available: true},
      { label: "E-Syllabus Access", available: true },
      { label: "Direct chat with Teacher and Coach", available: true },
      { label: "Upto 4 Lesson Reschedules per Month", available: true },
      { label: "Coaching and Planning Sessions Twice a Year", available: true },
      { label: "Progress Report Twice a Year", available: true },
      { label: "Upto 1 Lesson Cancellation per Month", available: true },
      { label: "5% Family Discounts", available: true },
      { label: "Top 5% Rated Teacher" },
      { label: "Video Recordings" },
    ],
    action: {
      url: "/trial",
      label: "Subscribe Now",
    },
  },
  {
    key: "premium",
    title: "Platinum",
    discountPercentage: "Top Choice",
    price: "$14.00",
    priceType: "/hour",
    installmentType: "Geat Deal",
    features: [
      { label: "Proficient Arabic (Native) Teacher", available: true},
      { label: " E-Certificate", available: true},
      { label: "E-Syllabus Access", available: true },
      { label: "Direct chat with Teacher and Coach", available: true },
      { label: "Unlimited Reschedules per Month", available: true },
      { label: "Coaching and Planning Sessions Every Quarter", available: true },
      { label: "Progress Report Every Quarter", available: true },
      { label: "Upto 3 Lesson Cancellation per Month", available: true },
      { label: "10% Family Discounts", available: true },
      { label: "Top 5% Rated Teacher", available: true },
      { label: "Video Recordings", available: true },
    ],
    action: {
      url: "/trial",
      label: "Subscribe Now",
    },
  },
];

const PricingPage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="pricing-page">
        <PageHeroSection
          title="Price"
          description="Flexible, affordable plans with family discounts, Quality Quranic education that fits your budget and supports your spiritual journey."
        />

        <section
          aria-describedby="pricing-section"
          className="py-10 sm:py-18 bg-neutral-100"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="top-content"
                className="max-w-3xl mx-auto flex flex-col items-center justify-center gap-y-6 mb-12"
              >
                <h3 className="text-4xl sm:text-5xl font-bold text-neutral-800 text-center leading-snug">
                  DISCOVER THE PERFECT PLAN FOR YOU
                </h3>
                <p className="text-xl sm:text-2xl font-normal text-neutral-800 text-center">
                  Transparency You Can Trust - "No Hidden Fees"
                </p>
              </div>

              <div aria-describedby="plan-wrapper">
                <ul
                  aria-describedby="plan-lists"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-7 xl:gap-0"
                >
                  {PRICING_PLANS.map((plan) => (
                    <li
                      key={plan.key}
                      aria-describedby="plan-item"
                      className={cn(
                        "bg-white rounded-md xl:rounded-none xl:first:rounded-l-2xl xl:first:rounded-r-none xl:last:rounded-r-2xl py-8 px-5 border border-neutral-100 shadow-sm flex flex-col",
                        plan.key === "necessary" && "bg-regal-blue-500"
                      )}
                    >
                      <div
                        aria-describedby="plan-title"
                        className="flex items-center gap-4 justify-between mb-6"
                      >
                        <h3
                          className={cn(
                            "text-2xl font-medium text-neutral-900",
                            plan.key === "necessary" && "text-white"
                          )}
                        >
                          {plan.title}
                        </h3>
                        <span
                          aria-describedby="discount"
                          className={cn(
                            "py-1 px-2.5 rounded-full bg-sky-blue-500 text-center flex items-center justify-center text-xs font-medium text-neutral-800",
                            plan.key === "necessary" && "bg-yellow-500"
                          )}
                        >
                          {plan.discountPercentage}
                        </span>
                      </div>

                      <div
                        aria-describedby="price"
                        className="flex items-start flex-col gap-y-1 mb-6 pb-6 border-b border-b-neutral-100"
                      >
                        <h2
                          className={cn(
                            "text-5xl font-medium text-neutral-900",
                            plan.key === "necessary" && "text-white"
                          )}
                        >
                          {plan.price}{" "}
                          <span
                            className={cn(
                              "text-base font-normal text-neutral-600 -ml-2",
                              plan.key === "necessary" && "text-neutral-200"
                            )}
                          >
                            {plan.priceType}
                          </span>
                        </h2>
                        <span
                          aria-describedby="type"
                          className="text-base font-medium text-yellow-500"
                        >
                          {plan.installmentType}
                        </span>
                      </div>

                      <div aria-describedby="features" className="mb-6">
                        <ul
                          aria-describedby="features-lists"
                          className="w-full flex flex-col items-start gap-y-3"
                        >
                          {plan.features.map((feat, index) => (
                            <li
                              key={index}
                              aria-describedby="feature-item"
                              className="flex items-center gap-2.5"
                            >
                             {feat.available ? (
                                     <CircleCheck
                                       className={cn(
                                             "w-5 h-5 text-green-500",
                                                plan.key === "necessary" && "text-white"
                                                         )}
                                                          />
                                                            ) : (
                                 <span className="text-red-500 text-lg font-bold leading-none">✖</span>
                                                                      )}

                              <span
                                className={cn(
                                  "text-base font-normal text-neutral-700",
                                  plan.key === "necessary" && "text-white"
                                )}
                              >
                                {feat.label}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div aria-describedby="action" className="mt-auto">
                        <Button
                          asChild
                          className={cn(
                            "w-full text-base",
                            plan.key === "necessary" &&
                              "bg-white hover:bg-white/90 text-neutral-900"
                          )}
                        >
                          <Link href={plan.action.url}>{plan.action.label}</Link>
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FeedbackFromStudents />

        {/* Trial Class Section with working button */}
        <section
          aria-describedby="trial-class-section"
          className="py-10 sm:py-16 "
        >
          <div className="container">
            <div
              aria-describedby="content-wrapper"
              className="bg-[#2EA7FE] p-8 rounded-4xl flex items-center justify-between gap-x-20 gap-y-10 overflow-hidden flex-col
                     md:flex-row
                    relative z-[1] before:absolute before:w-80 before:h-80 before:-z-[1] before:bg-[#53B7FF] before:-top-1/2 before:-left-16 before:rounded-full
                    before:sm:block before:hidden
                    after:absolute after:w-80 after:h-80 after:-z-[1] after:top-full after:-translate-24 after:-right-36 after:bg-[#53B7FF] after:rounded-full
                    "
            >
              <div
                aria-describedby="left-column"
                className="shrink-0 grow-0 basis-auto"
              >
                <div aria-describedby="image-wrapper" className="w-80 flex">
                  <Image
                    src={"/parent-teaching-child.png"}
                    width={921}
                    height={689}
                    alt="parent teaching their child"
                  />
                </div>
              </div>

              <div aria-describedby="right-column" className="flex-1">
                <div
                  aria-describedby="content-wrapper"
                  className="flex flex-col gap-y-6 justify-center items-center"
                >
                  <h3 className="text-3xl leading-snug font-bold text-white text-center">
                    Enjoy a{" "}
                    <span className="bg-yellow-500 py-1 px-2 rounded-lg">
                      5%
                    </span>{" "}
                    discount when family members enroll together
                  </h3>

                  <Button asChild>
                    <Link href="/trial">Get Trial Class Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection />
      </div>
    </React.Fragment>
  );
};

export default PricingPage;
