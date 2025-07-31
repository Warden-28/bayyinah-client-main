import React from "react";

interface PageHeroSectionProps {
  title: string;
  description?: string;
}

const PageHeroSection: React.FC<PageHeroSectionProps> = ({
  title,
  description,
}) => {
  return (
    <React.Fragment>
      <section
        aria-describedby="page-hero-section"
        className="py-10 sm:py-24 bg-regal-blue-500 relative z-[1] overflow-hidden
          before:absolute before:-z-[1] before:w-80 before:h-80 before:rounded-full before:bg-regal-blue-400 before:blur-[150px] before:-bottom-1/2 before:-left-24
          after:absolute after:-z-[1] after:w-80 after:h-80 after:rounded-full after:bg-regal-blue-400 after:blur-[150px] after:-top-1/2 after:-right-24
          "
      >
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="content-wrapper"
              className="mx-auto max-w-4xl flex flex-col gap-y-8 items-center justify-center"
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-center text-white">
                {title}
              </h1>

              {description && (
                <p className="text-base sm:text-xl font-normal text-white text-center">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PageHeroSection;
