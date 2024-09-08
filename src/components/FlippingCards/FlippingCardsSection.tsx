import React from 'react';
import './FlippingCardsSection.css'; // Import the CSS file

const FlippingCardsSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl">
            OUR VALUES
          </h2>
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mt-4">
            GR2 ENGINEERING’S UNIQUE APPROACH
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="relative w-64 h-64 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 shadow-lg perspective"
            >
              <div className="flip-card-inner">
                <div className="flip-card-front p-6 text-center">
                  <h4 className="text-lg font-semibold text-black dark:text-white">Card {i}</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Front side content</p>
                </div>
                <div className="flip-card-back p-6 text-center">
                  <h4 className="text-lg font-semibold text-black dark:text-white">Card {i}</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">We build positive, long-term relationships with our clients, partners, vendors, and colleagues.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlippingCardsSection;
