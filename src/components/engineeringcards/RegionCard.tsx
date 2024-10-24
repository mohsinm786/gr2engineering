import React from 'react';

type RegionCardProps = {
    region: string;
    poc: string;
    location: string;
};

const RegionCard: React.FC<RegionCardProps> = ({ region, poc, location }) => {
    return (
        <div className="border-2 border-blue-400 bg-white dark:bg-bg-color-dark rounded-lg p-6 w-full lg:w-1/3 transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-xl font-semibold dark:text-white mb-2">{region}</h3>
            <p className="text-gray-700 dark:text-gray-300">
                <strong>POC: </strong>{poc}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
                <strong>Location: </strong>{location}
            </p>
        </div>
    );
};

export default RegionCard;
