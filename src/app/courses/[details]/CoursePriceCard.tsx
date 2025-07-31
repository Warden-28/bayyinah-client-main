import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import React from "react";
import Link from "next/link";

const CoursePriceCard = () => {
  return (
    <React.Fragment>
      <div
        aria-describedby="price-card"
        className="sm:py-9 py-6 sm:px-6 px-3 rounded-2xl bg-white border border-[#ECECEC]"
      >

        <div
          aria-describedby="course-actions"
          className="flex flex-col items-center w-full gap-y-3 mb-3"
          
        >
         <Button variant="secondary" asChild>
              <Link href="/trial">Join Us</Link>
                  </Button>
        </div>

     
      </div>
    </React.Fragment>
  );
};

export default CoursePriceCard;
