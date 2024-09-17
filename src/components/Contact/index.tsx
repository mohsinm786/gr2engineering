import Address from "./Address";
import MapComponent from "./MapComponent";
import CardComponent from "../AddressCard/intex";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="w-10/12 mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {/* Left: Contact Form */}
            <div className="w-full lg:w-1/2 px-4">
              <div
                className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-blue-900 dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  You can easily reach us by filling out this form — we will get in touch with you shortly.
                </p>
                <form>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Enter your Message"
                          className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-SkyBlue dark:shadow-submit-dark">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Right: Cards Section */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="space-y-8">
                {/* First Card */}
                <CardComponent id={1}/>

                {/* Second Card */}
                <CardComponent id={2}/>

                {/* Third Card */}
                <CardComponent id={3}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
