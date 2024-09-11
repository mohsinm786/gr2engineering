import AboutSectionOne from "@/components/WhatWeDo/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import TwoTitlesWithBulletsAndImages from "@/components/WhatWeDo/TwoTitlesWithBulletsAndImages";
import TwoTitlesWithBulletsAndImagesSideBySide from "@/components/WhatWeDo/TwoTitlesWithBulletsAndImagesSideBySide";
import Contact from "@/components/Contact copy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modular - GR2 Engineering",
  // description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        subpageName="What We Do"
        pageName="MODULAR SERVICES"
        description="Our modular approach revolutionizes project delivery by offering flexible, pre-engineered solutions that streamline construction processes and accelerate project timelines. With a focus on quality, scalability, and cost-effectiveness, our modular solutions are designed to meet the unique needs of your project while delivering superior performance and value. Whether you’re looking to optimize space utilization, reduce construction waste, or enhance project flexibility, GR2 Engineering’s modular solutions provide the answer you’ve been searching for."
      />
      <AboutSectionOne />
      <TwoTitlesWithBulletsAndImages />
      <TwoTitlesWithBulletsAndImagesSideBySide />
      <Contact />

    </>
  );
};

export default AboutPage;
