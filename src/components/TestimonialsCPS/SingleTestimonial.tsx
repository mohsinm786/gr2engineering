import React from 'react';
import { Testimonial } from "@/types/testimonial";

type SingleTestimonialProps = {
  testimonial: Testimonial;
};

const SingleTestimonial: React.FC<SingleTestimonialProps> = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-bg-color-dark shadow-md rounded-lg p-6 w-full lg:w-1/3 transform transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
      <h2 className="text-xl font-semibold dark:text-white mb-4"> {/* Inline styling for the title */}
        {testimonial.name}
      </h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {testimonial.points?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleTestimonial;
