import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const EngineeringPage = () => {
  return (
    <>
      <Breadcrumb
        subpageName="What We Do"
        pageName="Engineering"
        description=""
      />
      <section className="pb-[120px] mt-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-xl text-blue-900 font-bold leading-tight text-blue-900 dark:text-white sm:text-3xl sm:leading-tight">
                  CUSTOMERS-FOCUSED ENGINEERING, DESIGN AND CONSULTANCY SERVICES THROUGHOUT THE ENTIRE LIFECYCLE
                </h2>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Engineering for greenfield plants or modification and modernization projects for brownfield plants: We deliver the optimized solution for our customers in terms of efficiency and sustainability for process plants, oil and gas plants, chemical and petrochemical plants, energy transition, power, plant-related construction and infrastructure, as well as for the pharmaceutical and bio-pharmaceutical industries - from feasibility studies to planning, consulting and implementation.                    </p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    With decades of experience around the globe, we are in a position to offer our customers a full range of engineering, design and consultancy services. These include concept, basic, detail and process engineering as well as project management, construction site management and consultancy activities.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EngineeringPage;
