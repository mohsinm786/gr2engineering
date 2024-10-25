// CapabilityCards.tsx
import React from 'react';

// Define the type for the table data columns
type CapabilityCardProps = {
  columnName: string;
  points: string[];
};

const CapabilityCard: React.FC<CapabilityCardProps> = ({ columnName, points }) => {
  return (
    <div className="border-2 border-blue-400 bg-white dark:bg-bg-color-dark rounded-lg p-6 w-full lg:w-1/3 transform transition-transform duration-300 ease-in-out hover:scale-105">
      <h2 className="text-xl font-semibold dark:text-white mb-4">{columnName}</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {points.map((point, index) => (
          <li style={{textIndent:"-1.4em",paddingLeft:"1.2em"}} key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const RegionCards = () => {
  const tableData6 = {
    columnName: ["Region", "POC", "Location"],
    tableDataCol1: ["Global Projects", "North America", "Asia and Oceania", "Americas", "Europe", "Middle East", "MENA & CIS", "US Gov. & Infra."],
    tableDataCol2: ["Romolo Raciti", "Pamir Alkus", "Kalim Shaikh", "Arturo Portilla", "Luca Gaetani", "Marilena Macrina", "Ted Akharman", "Charlie Peker"],
    tableDataCol3: ["Houston", "Houston", "Mumbai", "Bogota", "Rome", "Abu Dhabi", "Istanbul", "Houston"],
  };

  return (
    <section className="mt-10">
  <div className="w-full"> {/* This div takes the full width of the parent */}
    <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-6 w-full"> {/* Ensuring this also takes full width */}
      {/* Render a CapabilityCard for each column */}
      <CapabilityCard
        columnName={tableData6.columnName[0]}
        points={tableData6.tableDataCol1}
      />
      <CapabilityCard
        columnName={tableData6.columnName[1]}
        points={tableData6.tableDataCol2}
      />
      <CapabilityCard
        columnName={tableData6.columnName[2]}
        points={tableData6.tableDataCol3}
      />
    </div>
  </div>
</section>

  );
};

export default RegionCards;
