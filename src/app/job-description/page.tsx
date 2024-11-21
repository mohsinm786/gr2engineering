'use client';

import React from 'react';
import Link from 'next/link';
import FancyButton from '@/components/Button/FancyButton';

const JobDescriptionPage = () => {
  return (
    <section className="container p-8 w-10/12">
      {/* Job Title Section */}
      <h1 className="text-3xl font-bold mb-6 text-LightBlue dark:text-white">Electrical & Instrumentation Engineer - Job Description</h1>

      {/* Job Description Section */}
      <p className="text-base leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8">
        GR2 Engineering is an engineering consulting firm with global offices. We are committed to delivering innovative solutions across various industries. As an Electrical & Instrumentation Engineer, you’ll play a crucial role in shaping our projects and ensuring excellence in process design and implementation.
      </p>

      {/* Responsibilities Section */}
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-SkyBlue dark:text-white">RESPONSIBILITIES</h2>
      <ul className="list-disc pl-6 space-y-3 text-base leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8">
        <li>
          <strong className="text-LightBlue dark:text-white">Electrical and Instrumentation Design:</strong> Develop detailed electrical and instrumentation designs, including wiring diagrams, control systems, and instrumentation layouts, to meet project requirements.
        </li>
        <li>Prepare technical specifications, drawings, and calculations for electrical and instrumentation components and systems.</li>
        <li>Ensure that automation and instrumentation system design, process control, control networks, safety instrumented systems, and security systems are as applicable.</li>
        <li>Undertake planned and unplanned E&I work scopes on ESD and F&G systems, hazardous area equipment, power generation, telecommunications, navigation, and electrical equipment.</li>
        <li>
          <strong className="text-LightBlue dark:text-white">Technical Expertise and Support:</strong> Provide technical guidance during the procurement, construction, and commissioning phases, ensuring adherence to project specifications and standards.
        </li>
        <li>Assist in vendor selection, equipment inspection, and quality assurance related to electrical and instrumentation systems.</li>
        <li>Generate Bill of Materials (BOMs) for Printed Board Assemblies (PBAs).</li>
        <li>
          <strong className="text-LightBlue dark:text-white">Safety and Compliance:</strong> Participate in safety reviews, risk assessments, and compliance checks to ensure adherence to industry standards, codes, and regulatory requirements for electrical and instrumentation systems.
        </li>
        <li>Actively participate in HSE activities, e.g., toolbox talks, risk assessments, safety meetings, etc.</li>
        <li>Responsible for the annual testing of the fire and gas system and emergency shut-down system to the satisfaction of the certifying authority.</li>
        <li>
          Ensure associated E&I engineering changes on the ISP are registered, controlled, and carried out in compliance with the appropriate authorities, procedures, and safe working practices.
        </li>
        <li>
          <strong className="text-LightBlue dark:text-white">Instrumentation Calibration and Testing:</strong> Oversee instrumentation calibration activities, ensuring the accuracy and reliability of measurement instruments.
        </li>
        <li>Perform testing and troubleshooting of electrical and instrumentation systems to identify and resolve issues.</li>
        <li>
          <strong className="text-LightBlue dark:text-white">Project Coordination:</strong> Collaborate with multidisciplinary teams to integrate electrical and instrumentation systems into overall project designs and ensure compatibility with other disciplines.
        </li>
        <li>
          <strong className="text-LightBlue dark:text-white">Documentation and Reporting:</strong> Prepare technical documentation, reports, and presentations to communicate engineering designs, findings, and recommendations to project stakeholders.
        </li>
        <li>
          <strong className="text-LightBlue dark:text-white">Stakeholder Engagement:</strong> Interface and coordinate work with other engineering disciplines to minimize conflicts and errors.
        </li>
        <li>Collaborate with clients, vendors, and regulatory authorities to ensure project deliverables meet industry best practices.</li>
        <li>Mentor junior engineers and guide electrical & instrumentation engineering principles, methodologies, and best practices.</li>
      </ul>

      {/* Qualifications Section */}
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-SkyBlue dark:text-white">QUALIFICATIONS</h2>
      <ul className="list-disc pl-6 space-y-3 text-base leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8">
        <li>
          <strong className="text-LightBlue dark:text-white">Education:</strong> Bachelor’s degree in Electrical Engineering, Instrumentation Engineering, or related field.
        </li>
        <li>Professional Engineer (PE) license or willingness to obtain certification.</li>
        <li>
          <strong className="text-LightBlue dark:text-white">Experience:</strong> Minimum of 5 years of experience in electrical and instrumentation engineering within the EPC industry.
        </li>
        <li>Experience with Mentor Graphix Dx Designer or equivalent circuit design tool set.</li>
        <li>Knowledge of IEC legislation and BS.</li>
        <li>Understanding of safety-related ESD/F&G systems.</li>
        <li>
          <strong className="text-LightBlue dark:text-white">Certificates:</strong> Certification in Electrical and Instrumentation Engineering (e.g., ISA Certified Control Systems Technician, ISA Certified Automation Professional) preferred.
        </li>
        <li>
          <strong className="text-LightBlue dark:text-white">Skills:</strong> Proficiency in electrical design software (e.g., AutoCAD Electrical, ETAP) and instrumentation software (e.g., SPI, Smart Plant Instrumentation).
        </li>
        <li>Strong knowledge of electrical codes and standards (e.g., NEC, IEC) and instrumentation standards (e.g., ISA, IEEE).</li>
        <li>Excellent analytical and problem-solving skills, with the ability to interpret complex data and make informed decisions.</li>
        <li>Effective communication and interpersonal skills, with the ability to collaborate effectively with cross-functional teams and stakeholders.</li>
        <li>
          <strong className="text-LightBlue dark:text-white">Focus Areas:</strong> LNG (Liquefied Natural Gas) and gas processing and treatment, Petrochemical and refining projects, Oil & gas production and processing facilities design.
        </li>
        <li>Experience in CO2 capture and storage is a plus.</li>
      </ul>

      {/* Apply Now Button Section */}
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-SkyBlue dark:text-white">APPLY FOR THIS POSITION</h2>
      <p className="text-base leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8 mb-4">
        If you are interested in applying for this position, please click the button below to submit your application.
      </p>
      <FancyButton text="Apply Now" path="/apply-page" />
    </section>
  );
};

export default JobDescriptionPage;
