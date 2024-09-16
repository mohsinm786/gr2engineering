import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="w-10/12 mx-auto">
          <div className="flex flex-wrap items-center">
            {/* Left Side: Titles and Image */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="mb-15">
                <SectionTitle
                  title="OUR TOOLS"
                  paragraph=""
                  mb="16px"
                  titleClassName="text-2xl font-bold text-black dark:text-white"
                />
                <SectionTitle
                  title="Integrated project Management system"
                  paragraph=""
                  mb="32px"
                  titleClassName="text-xl font-semibold text-gray-700 dark:text-gray-300"
                />
              </div>
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] text-center lg:text-left">
                <Image
                  src="/images/addedImg/integrated-project-management.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                {/* <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              /> */}
              </div>
            </div>

            {/* Right Side: Bullet Points with Margin */}
            <div className="w-full lg:w-1/2 px-4 lg:pl-12">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Intelligent intuitive project management software platform</li>
                    <li>Project Integration among client, PMC, contractors, subcontractors, and vendors</li>
                    <li>No changes required to contractor and vendor systems, tools, and procedures</li>
                    <li>AWP based</li>
                    <li>Cloud based</li>
                    <li>Scalable</li>
                    <li>Mobile App</li>
                    <li>Cost effective</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
