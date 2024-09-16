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
        description=""
      />
      <AboutSectionOne />
      <TwoTitlesWithBulletsAndImages />
      <TwoTitlesWithBulletsAndImagesSideBySide />
      <Contact />

    </>
  );
};

export default AboutPage;
