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
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
            <div>
            <SectionTitle
              title="CORPORATE SOCIAL RESPONSIBILITY"
              paragraph="" // Leave paragraph empty for this instance
              mb="20px" // Adjust margin-bottom as needed
            />

            <SectionTitle
              title="OUR COMMITMENT"
              paragraph={`GR2 Engineering is committed to ensuring that our projects and clients are guided by the most recent environmental, social, and governance standards so that we all play a role in ensuring a safe and sustainable future for all.\n\nWe strive to improve energy management and environmental sustainability through a holistic approach utilizing our collective wisdom and painstakingly developed technology in order to contribute to the sustainable development of a society as an integrated engineering company.`}
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
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/Group-333.png"  // Update the image path to a relevant CSR image
                  alt="csr-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/Group-333.png"
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
