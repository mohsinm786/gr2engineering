import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  // Define a List component for bullet points
  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {/* Check icon or bullet point */}
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
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-2/3">
              <div>
                <SectionTitle
                  title="OUR EXPERIENCE"
                  paragraph=""
                  mb="20px"
                />

                <SectionTitle
                  title="GR2 ENGINEERING TEAM FOOTPRINT"
                  paragraph={`The team that makes up our organization has a cumulative 150 years of experience across the world, leading and managing large-scale projects with industry giants. Each team member has a unique set of skills that help us deliver a 360-degree project management service.\n\nOur team has worked across 12 countries, designing more than 50 different projects with large industry leaders. Below is a breakdown of our team’s experience with various types of projects over the years.`}
                  mb="44px"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/3">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/addedImg/word-map.png" // Update the image path to a relevant CSR image
                  alt="csr-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/addedImg/word-map.png"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
          
          {/* New Section Title and Bullet Points Below Image */}
          <div className="pt-16 lg:pt-20">
            <SectionTitle
              title="OUR INDIA OPERATIONS - GR2 ENGINEERING INDIA PVT. LTD."
              paragraph=""
              mb="20px"
            />
            <div>
              <List text="GR2 office in India was formally established in the year 2021 under patronage of GR2 Engineering Inc. USA" />
              <List text="GR2 Engineering India operations was pioneered with a vision to have a `high value' Engineering and Design center to provide world class engineering service to our global client base" />
              <List text="Our India office is strategically located to cater to business needs of our clients especially from ME and Asia regions by leveraging and tapping into a vast pool of skilled engineering resources based out of Mumbai" />
              <List text="India operations is headed by a competent team of Oil and Gas industry veterans and over the years have successfully executed Conceptual, FEED and Detailed Design projects across multiple geographies including USA, UAE and Iraq." />
              <List text="India teams comprises of energetic and result oriented professionals including Project Managers, Multi-discipline Engineers, Designers, 3D Modelers and Drafters. Additionally, we have collaboration with reliable and experienced Subject Matter Experts (SME) for critical and specialized engineering services"/>
              <List text="GR2 Engineering is ISO 9001:2015 certified company with focus on quality control and on-time delivery to meet and exceed client expectations"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
