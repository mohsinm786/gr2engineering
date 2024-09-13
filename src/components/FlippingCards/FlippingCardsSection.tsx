import React from 'react';
import './FlippingCardsSection.css'; // Import the CSS file

const FlippingCardsSection = () => {

  // home page card data
  const cardData = [
    {
      id: 1,
      title: "RELATIONSHIP DRIVEN",
      frontContent: "Pushing the boundaries of technology.",
      backContent: "We build positive, long-term relationships with our clients, partners, vendors, and colleagues."
    },
    {
      id: 2,
      title: "DETAIL FOCUSED",
      frontContent: "Honesty and transparency in all we do.",
      backContent: "We stay on top of every detail in our business through tech and data."
    },
    {
      id: 3,
      title: "GLOBAL REACH",
      frontContent: "Working together for success.",
      backContent: "Here, there, everywhere. We have the tools and connections to make projects happen."
    },
    {
      id: 4,
      title: "EFFICIENT DESIGN",
      frontContent: "Environmental responsibility is our priority.",
      backContent: "Efficiency is the name of the game. Our focus on lean processes makes managing projects easier."
    },
    {
      id: 5,
      title: "COST EFFECTIVE",
      frontContent: "Aiming for the highest standards.",
      backContent: "We are passionate about excellence and doing our work right the first time. We listen, learn, and seek out the best ideas."
    },
  ];

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
        <div className="flex flex-wrap grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6  justify-center">
          {cardData.map((card) => (
            /* From Uiverse.io by gharsh11032000 */
            <div key={card.id} className="card">
              <h3>{card.title}</h3>
              <div className="card__content">
                <h3 className="card__title">{card.title}</h3>
                <p className="card__description">{card.backContent}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FlippingCardsSection;
