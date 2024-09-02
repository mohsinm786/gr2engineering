import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {/* You can update or remove the check icon here if needed */}
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
              paragraph="" // Leave paragraph empty for this instance
              mb="20px" // Adjust margin-bottom as needed
            />

            <SectionTitle
              title="GR2 ENGINEERING TEAM FOOTPRINT"
              paragraph={`The team that makes up our organization has a cumulative 150 years of experience across the world, leading and managing large-scale projects with industry giants. Each team member has a unique set of skills that help us deliver a 360-degree project management service.\n\nOur team has worked across 12 countries, designing more than 50 different projects with large industry leaders. Below is a breakdown of our team’s experience with various types of projects over the years.`}
              mb="44px"
            />
          </div>


              {/* <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >

                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">

                    <List text="Environmental Initiatives" />
                    <List text="Community Engagement" />
                    <List text="Sustainable Practices" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Employee Well-being" />
                    <List text="Ethical Governance" />
                    <List text="Continuous Improvement" />
                  </div>
                </div>
              </div> */}
            </div>

            {/* Remove or update this section based on your needs */}
            <div className="w-full px-4 lg:w-1/3">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/addedImg/word-map.png"  // Update the image path to a relevant CSR image
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
                {/* Optionally include a dark mode image if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
