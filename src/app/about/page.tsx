import AboutSectionOne from "@/components/AboutCopy/AboutSectionOne";
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
        pageName="CORPORATE SOCIAL RESPONSIBILITY"
        description="At GR2 Engineering, we believe that true success is measured not only by financial performance but also by our commitment to social and environmental responsibility. Guided by our core values of integrity, sustainability, and community, we are dedicated to making a positive impact on the world around us."
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <FeaturesCopy />
    </>
  );  
};

export default AboutPage;
