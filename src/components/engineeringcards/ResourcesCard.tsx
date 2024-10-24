import React from 'react';

type CapabilityCardProps = {
    title: string;
    points: string[];
};

const ResourcesCard: React.FC<CapabilityCardProps> = ({ title, points }) => {
    return (
        <div className="border-2 border-blue-400 bg-white dark:bg-bg-color-dark rounded-lg p-6 w-full lg:w-1/3 transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-xl font-semibold dark:text-white mb-2">{title}</h3>
            <ul className="list-disc ml-4">
                {points.map((point, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 mb-1">{point}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResourcesCard;
