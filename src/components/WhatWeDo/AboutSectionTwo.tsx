import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {/* Custom bullet point (circle icon) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="10" cy="10" r="3" />
        </svg>
      </span>
      {text}
    </p>
  );
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
                  title="INTEGRATED PROJECT MANAGEMENT SYSTEM"
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
                  <List text="Intelligent intuitive project management software platform" />
                  <List text="Project Integration among client, PMC, contractors, subcontractors, and vendors" />
                  <List text="No changes required to contractor and vendor systems, tools, and procedures" />
                  <List text="AWP based" />
                  <List text="Cloud based" />
                  <List text="Scalable" />
                  <List text="Mobile App" />
                  <List text="Cost effective" />
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
