import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISO Certificate - GR2 Engineering",
};

const IsoCertificate = () => {
  return (
    <>
      <Breadcrumb
        pageName="ISO Certifications"
        subpageName="About Us"
        description="Below you can find our ISO certification documents."
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          {/* GR2 Inc ISO Certificate */}
          <div className="mb-10 w-10/12 mx-auto">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
              GR2 Inc ISO Certificate
            </h2>
            <div className="w-full h-[600px] border border-gray-300 dark:border-gray-700 shadow-lg">
              <iframe
                src="/certificates/gr2-inc.pdf"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="GR2 Inc ISO Certificate"
              />
            </div>
          </div>

          {/* GR2 India ISO Certificate */}
          <div className="w-10/12 mx-auto">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
              GR2 India ISO Certificate
            </h2>
            <div className="w-full h-[600px] border border-gray-300 dark:border-gray-700 shadow-lg">
              <iframe
                src="/certificates/gr2-india.pdf"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="GR2 India ISO Certificate"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IsoCertificate;
