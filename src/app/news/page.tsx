import PastEvents from "@/components/AboutOurExperience/PastEvent";
import Breadcrumb from "@/components/Common/Breadcrumb";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News - GR2 Engineering"
  // description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="NEWS"
        description="We’ve had the opportunity to attend various conferences in the past"
      />
      <PastEvents/>
    </>
  );  
};

export default AboutPage;
