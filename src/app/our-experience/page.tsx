import AboutSectionOne from "@/components/AboutOurExperience/AboutSectionOne";
import Whitepapers from "@/components/AboutOurExperience/Whitepapers";
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
        subpageName="About Us"
        pageName="OUR EXPERIENCE"
        // description="At GR2 Engineering, our extensive experience sets us apart as a trusted leader in the energy, infrastructure, and chemicals industries. With decades of collective expertise and a proven track record of success, we have the knowledge, skills, and resources to tackle even the most complex challenges and deliver superior results for our clients."
      />
      <AboutSectionOne />
      <Whitepapers />
      {/* <FeaturesCopy /> */}
    </>
  );
};

export default AboutPage;
