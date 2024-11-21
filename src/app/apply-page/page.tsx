'use client';

import React, { useState } from 'react';
import FancyButton from '@/components/Button/FancyButton';

const ApplyPage = () => {
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    coverLetter: '',
    resume: null,
    jobTitle: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('linkedin', formData.linkedin);
    formDataToSend.append('coverLetter', formData.coverLetter);
    formDataToSend.append('jobTitle', formData.jobTitle);
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }

    try {
      const response = await fetch("http://localhost:5241/Career", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmissionStatus("Application submitted successfully!");
        setStatusType("success");
        setFormData({
          name: '',
          email: '',
          linkedin: '',
          coverLetter: '',
          resume: null,
          jobTitle: '',
        });
      } else {
        setSubmissionStatus("Failed to submit your application. Please try again.");
        setStatusType("error");
      }
    } catch (error) {
      console.error("Error submitting the application:", error);
      setSubmissionStatus("An error occurred. Please try again later.");
      setStatusType("error");
    }
  };

  return (
    <section className="container p-10 w-10/12">
      <h1 className="text-3xl font-bold mb-6 text-SkyBlue dark:text-white mt-20">
        APPLY FOR A JOB
      </h1>

      <p className="text-base leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8">
        GR2 Engineering is an engineering consulting firm with global offices. We are committed to delivering innovative solutions across various industries. As an Electrical & Instrumentation Engineer, you’ll play a crucial role in shaping our projects and ensuring excellence in process design and implementation.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 bg-blue-50 px-8 py-11 shadow-lg dark:bg-gray-dark sm:p-[55px] lg:px-8 xl:p-[55px] rounded-lg"
      >
        {/* Full Name */}
        <div className="mb-8">
          <label
            htmlFor="name"
            className="mb-3 block text-sm font-medium text-dark dark:text-white"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            placeholder="Enter your name"
            className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            required
          />
        </div>

        {/* Email Address */}
        <div className="mb-8">
          <label
            htmlFor="email"
            className="mb-3 block text-sm font-medium text-dark dark:text-white"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter your email"
            className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            required
          />
        </div>

        {/* LinkedIn Profile */}
        <div className="mb-8">
          <label
            htmlFor="linkedin"
            className="mb-3 block text-sm font-medium text-dark dark:text-white"
          >
            LinkedIn Profile
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={(e) =>
              setFormData({ ...formData, linkedin: e.target.value })
            }
            placeholder="Enter your LinkedIn profile URL"
            className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
        </div>

        {/* Cover Letter */}
        <div className="mb-8">
          <label
            htmlFor="coverLetter"
            className="mb-3 block text-sm font-medium text-dark dark:text-white"
          >
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={(e) =>
              setFormData({ ...formData, coverLetter: e.target.value })
            }
            placeholder="Enter your cover letter"
            rows={5}
            className="border-stroke w-full resize-none rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            required
          ></textarea>
        </div>

        {/* Upload Resume */}
        <div className="mb-8">
          <label
            htmlFor="resume"
            className="mb-3 block text-sm font-medium text-dark dark:text-white"
          >
            Upload Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={(e) =>
              setFormData({
                ...formData,
                resume: e.target.files ? e.target.files[0] : null,
              })
            }
            className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            required
          />
        </div>

        {/* Job Title Dropdown */}
        <div className="mb-8">
          <label
            htmlFor="jobTitle"
            className="mb-3 block text-sm font-medium text-dark dark:text-white"
          >
            Job Title
          </label>
          <select
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={(e) =>
              setFormData({ ...formData, jobTitle: e.target.value })
            }
            className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            required
          >
            <option value="">Select Job Title</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Project Management">Project Management</option>
            <option value="Civil Engineering">Civil Engineering</option>
          </select>
        </div>

        {/* Submit Button and Status Message */}
        <div className="flex items-center space-x-4">
          <FancyButton text="Send Application" path="#" type="submit" />
          {submissionStatus && (
            <span
              className={`text-sm font-medium ${
                statusType === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {submissionStatus}
            </span>
          )}
        </div>
      </form>
    </section>
  );
};

export default ApplyPage;
