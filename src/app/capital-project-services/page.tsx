import AboutSectionOne from "@/components/WhatWeDo/AboutSectionOne";
import TestimonialsCPS from "@/components/TestimonialsCPS";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FeaturesCopy from "@/components/FeaturesCopy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="CAPITAL PROJECT SERVICES"
        description="At GR2 Engineering, our Capital Project Services division is dedicated to providing comprehensive solutions for all stages of your project lifecycle. From initial concept development to final commissioning and beyond, we offer a wide range of services tailored to meet your specific needs and objectives. With a focus on innovation, efficiency, and cost-effectiveness, our team of experts is committed to delivering superior results that maximize value and minimize risk. Whether you’re embarking on a new capital project or seeking support for an existing initiative, trust GR2 Engineering to be your partner every step of the way."
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <FeaturesCopy />
      <TestimonialsCPS/>
    </>
  );  
};

export default AboutPage;
