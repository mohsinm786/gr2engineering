import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/addedImg/event.jpeg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/addedImg/event.jpeg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              {/* First Section */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  PAST EVENTS
                </h3>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  OUR GLOBAL PRESENCE
                </h3>

                {/* First Paragraph */}
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We’ve had the opportunity to attend various conferences in the past:
                </p>

                {/* Line Space */}
                <br />

                {/* Bullet Points List */}
                <ul className="list-disc pl-5 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <li>Oil and Gas 2023 – Kuala Lumpur – September 2023</li>
                  <li>Gastech Event – Singapore – September 2023</li>
                  <li>GPA Midstream Convention – San Antonio, TX – September 2022</li>
                  <li>Gastech Exhibition & Conference – Milan, Italy – 5-8 September 2022</li>
                  <li>TradeWinds 2022 – Abu Dhabi, U.A.E. – March 2022</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section - Full Width */}
        <div className="w-full mt-12">
          <div className="container mx-auto">
            <div className="px-4">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  UPCOMING EVENTS
                </h3>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  MEET US AT THESE UPCOMING EVENTS
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Check back later!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Whitepapers Section - Full Width */}
        <div className="w-full mt-12">
          <div className="container mx-auto">
            <div className="px-4">
              <h3 className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                WHITEPAPERS
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Whitepaper Card 1 */}
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                  <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    Whitepaper Title 1
                  </h4>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  GR2 Engineering Modular Solutions for XenergiLTD, Enabling Sustainable Energy Generation from Flare Gas in Nigeria
                  </p>
                </div>

                {/* Whitepaper Card 2 */}
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                  <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    Whitepaper Title 2
                  </h4>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  An Integrated Approach to Advanced Seismic Modelling for Storage Tanks
                  </p>
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
