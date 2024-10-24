import React from 'react';

type RegionCardProps = {
    title: string;
    regions: string[];    // Array for Regions
    pocs: string[];       // Array for POCs
    locations: string[];  // Array for Locations
};

const RegionCard: React.FC<RegionCardProps> = ({ title, regions, pocs, locations }) => {
    return (
        <div className="border-2 border-blue-400 bg-white dark:bg-bg-color-dark rounded-lg p-6 w-full transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-xl font-semibold dark:text-white mb-4">{title}</h3>
            <div className="grid grid-cols-3 gap-4">
                {/* Column 1: Regions */}
                <div>
                    <h4 className="font-semibold text-gray-700 dark:text-white">Region</h4>
                    <ul className="list-disc ml-4">
                        {regions.map((region, index) => (
                            <li key={index} className="text-gray-700 dark:text-gray-300 mb-1">{region}</li>
                        ))}
                    </ul>
                </div>
                {/* Column 2: POCs */}
                <div>
                    <h4 className="font-semibold text-gray-700 dark:text-white">POC</h4>
                    <ul className="list-disc ml-4">
                        {pocs.map((poc, index) => (
                            <li key={index} className="text-gray-700 dark:text-gray-300 mb-1">{poc}</li>
                        ))}
                    </ul>
                </div>
                {/* Column 3: Locations */}
                <div>
                    <h4 className="font-semibold text-gray-700 dark:text-white">Location</h4>
                    <ul className="list-disc ml-4">
                        {locations.map((location, index) => (
                            <li key={index} className="text-gray-700 dark:text-gray-300 mb-1">{location}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RegionCard;
