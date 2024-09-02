import Team from "@/components/Team";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const LeadershipPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Leadership"
        description=""
      />
      <section className="pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    At GR2 Engineering, we believe that true success is measured not only by financial performance but also by our commitment to social and environmental responsibility. Guided by our core values of integrity, sustainability, and community, we are dedicated to making a positive impact on the world around us.
                  </p>
                </div>
                <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  LEADERSHIP
                </h2>
                <h2 className="mb-8 text-3xl text-primary font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  MANAGEMENT TEAM
                </h2>
                <div>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    GR2 Engineering is established by a team of executives bringing a cumulative 150 years of global experience in project execution, process technologies, engineering, and design developed working for major international companies: KBR, Jacobs, Fluor, CH2M Hill, Parsons, Black & Veatch, Chiyoda for major IOCs, NOCs and Independents, among them ExxonMobil, Qatar Petroleum, ADNOC, Petronas, CNPC (PetroChina), SINOPEC, Shell, Cheniere, Energy Transfer, Kinder Morgan. As well as technology companies such as Honeywell, Emerson, ABB, Yokogawa, and others.
                  </p>
                </div>
                <Team />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadershipPage;