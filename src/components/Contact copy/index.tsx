"use client"; // Ensure this file is treated as a client component

import { useState } from "react";
import Image from "next/image";
import CardComponent from "../AddressCard/intex";
import FancyButton from "@/components/Button/FancyButton";

const ModularForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null); // To manage submission status

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      clientName: (e.target as any).clientName.value,
      fieldLocation: (e.target as any).fieldLocation.value,
      contactName: (e.target as any).contactName.value,
      contactEmail: (e.target as any).contactEmail.value,
      contactPhone: (e.target as any).contactPhone.value,
      gasFieldSource: (e.target as any).gasFieldSource.value,
      comments: (e.target as any).comments.value,
      file: (e.target as any).file.value,
    };

    try {
      const response = await fetch("http://localhost:5241/Modular", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("Message sent successfully!"); // Show success message
        (e.target as any).reset(); // Clear the form after submission
      } else {
        setSubmissionStatus("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmissionStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="modular-form" className="overflow-hidden">
      {/* Success or Failure Message */}
      {submissionStatus && (
        <div className="bg-green-500 text-white p-4 text-center">
          {submissionStatus}
        </div>
      )}

      {/* Contact Form Section */}
      <div className="container">
        <div className="w-10/12 mx-auto">
          <div className="-mx-4 flex flex-wrap pt-10">
            {/* Left: Contact Form */}
            <div className="w-full px-4">
              <div className="mb-12 rounded-lg bg-blue-50 px-8 py-11 shadow-lg dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h2 className="mb-3 text-2xl font-bold text-SkyBlue dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  MODULAR FORM
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Please fill out the form below and we will get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 flex flex-wrap">
                    {/* Client Name */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="clientName"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Client Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="clientName"
                          placeholder="Enter Client Name"
                          required
                          className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    {/* Field/Site Location */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="fieldLocation"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Field/Site Location <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fieldLocation"
                          placeholder="Enter Field/Site Location"
                          required
                          className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    {/* Customer Contact Name */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="contactName"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Customer Contact Name
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          placeholder="Enter Customer Contact Name"
                          className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    {/* Customer Contact Email */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="contactEmail"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Customer Contact Email
                        </label>
                        <input
                          type="email"
                          name="contactEmail"
                          placeholder="Enter Customer Contact Email"
                          className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    {/* Customer Contact Phone */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="contactPhone"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Customer Contact Phone
                        </label>
                        <input
                          type="text"
                          name="contactPhone"
                          placeholder="Enter Customer Contact Phone"
                          className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    {/* Gas Field or Source */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="gasFieldSource"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Gas Field or Source
                        </label>
                        <input
                          type="text"
                          name="gasFieldSource"
                          placeholder="Enter Gas Field or Source"
                          className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    {/* Comments */}
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="comments"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Comments <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="comments"
                          rows={5}
                          placeholder="Enter your comments"
                          required
                          className="border-stroke w-full resize-none rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>

                    {/* Choose File */}
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="file"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Choose File
                        </label>
                        <input
                          type="file"
                          name="file"
                          className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="w-full px-4">
                      <FancyButton text="Submit" path="#" type="submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModularForm;
