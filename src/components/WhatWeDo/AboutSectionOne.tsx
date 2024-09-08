import React from "react";
import SectionTitle from "../Common/SectionTitle";

const FullWidthSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="flex flex-col items-start">
            <SectionTitle
              title="OUR SERVICES"
              paragraph=""
              mb="20px"
              titleClassName="text-2xl font-bold text-left"
            />

            <SectionTitle
              title="GR2 ENGINEERING FLARE AND GAS MONETIZATION SOLUTIONS"
              paragraph=""
              mb="20px"
              titleClassName="text-2xl font-bold text-left"
            />

            <p className="text-base font-medium leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8">
              GR2 Engineering’s pre-engineered modular process units are readily available, a proven combination of best-in-class technical and economical solutions for Flare Abatement And Gas Monetization in Nigeria. GR2 Engineering Modular Solutions are designed and fabricated in the U.S., well-known U.S. Technology, Equipment and Fabrication Suppliers, NUPRC, and our local O&M partners.
            </p>
            <p className="text-base font-medium leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8">
              GR2 Engineering Modular Solutions are flexible in capacity, highly reliable operations, and easy to maintain with off-the-shelf spare parts. Our dedicated and experienced O&M partners are available full-time for onshore and offshore installations, start-up, maintenance, and operations support.
            </p>
            <p className="text-base font-medium leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8">
              Please contact us at modular@gr2engineering.com to learn more about how we can support you with your Flare and Gas Monetization Solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthSection;
