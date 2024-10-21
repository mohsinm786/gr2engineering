import AboutSectionOne from "@/components/WhatWeDo/AboutSectionOne";
import AboutSectionTwo from "@/components/WhatWeDo/AboutSectionTwo";
import TestimonialsCPS from "@/components/TestimonialsCPS";
import Breadcrumb from "@/components/Common/Breadcrumb";
import TitleWithImage from "@/components/WhatWeDo/TitleWithImage";

import { Metadata } from "next";
import Image from "next/image"; // Import Image from next/image

export const metadata: Metadata = {
  title: "Capital Project Services - GR2 Engineering",
  // description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* Background Banner Section */}
      <div className="relative w-full h-[400px] bg-gray-200 flex items-center justify-start">
        <Image
          src="/images/breadcrumb_images/Capital-project-services.jpg" // Change this to the correct image path
          alt="Capital Project Services Background"
          layout="fill" // Ensures the image covers the container completely
          objectFit="cover" // Ensures the image fits the container without distortion
          priority // Preloads the image for better performance
          className="absolute inset-0 w-full h-full"
        />
        {/* Optional Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Breadcrumb Section */}
        <div className="absolute top-0 left-0 w-full z-10">
          <div className="container mx-auto pt-10 px-10">
            <Breadcrumb
              subpageName="What We Do"
              pageName="CAPITAL PROJECT SERVICES"
              description=""
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      {/* Uncomment if you want to include AboutSectionOne */}
      {/* <AboutSectionOne /> */}
      
      <TestimonialsCPS />
      <TitleWithImage />
      <AboutSectionTwo />
      {/* <FeaturesCopy /> */}
    </>
  );
};

export default AboutPage;
