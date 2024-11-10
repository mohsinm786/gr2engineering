import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import Whitepapers from "@/components/AboutOurExperience/Whitepapers";
import Image from "next/image";

export const metadata: Metadata = {
  title: "What We Do - GR2 Engineering",
};

const AboutPage = () => {
  return (
    <>
      {/* Background Banner Section */}
      <div className="relative w-full h-[400px] bg-gray-200 flex items-center justify-start">
        <Image
          src="/images/banner/what-we-do.jpg" // Change this to the correct image path
          alt="Capital Project Services Background"
          layout="fill" // Ensures the image covers the container completely
          objectFit="cover" // Ensures the image fits the container without distortion
          priority // Preloads the image for better performance
          className="absolute inset-0 w-full h-full"
        />
        {/* Optional Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Breadcrumb Section */}
        <div className="absolute top-0 left-0 w-full z-10">
          <div className="container mx-auto pt-10 px-10">
            <Breadcrumb
              subpageName="HOME"
              pageName="WHAT WE DO"
              description=""
            />
          </div>
        </div>
      </div>
      
      <section>
        <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    ENGINEERING
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Customers-focused engineering, design and consultancy services throughout the entire lifecycle 
                    </p>
                </div>
                <div>
                    <Link href="/engineering">
                        <button className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2 rounded-lg">
                        Learn More
                        </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>  
        <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    MODULAR
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    With a focus on quality, scalability, and cost-effectiveness, our modular solutions are designed to meet the unique needs of your project while delivering superior performance and value. 
                    </p>
                </div>
                <div>
                    <Link href="/modular">
                        <button className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2 rounded-lg">
                        Learn More
                        </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>  
          <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    CAPITAL PROJECT SERVICES
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    From initial concept development to final commissioning and beyond, we offer a wide range of services tailored to meet your specific needs and objectives. 
                    </p>
                </div>
                <div>
                    <Link href="/capital-project-services">
                        <button className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2 rounded-lg">
                        Learn More
                        </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    WATER
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    From designing state-of-the-art treatment facilities to implementing smart water management systems, GR2 Engineering is committed to engineering solutions that ensure access to clean, safe water for generations to come.
                    </p>
                </div>
                <div>
                    <Link href="/water">
                        <button className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2 rounded-lg">
                        Learn More
                        </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        <Whitepapers/>
        </div>
      </section>
     
    </>
  );
};

export default AboutPage;
