// CapabilityCards.tsx
import React from 'react';

// Define the type for the card data, with an array of columns and corresponding data
type CapabilityCardProps = {
  columns: { title: string; points: string[] }[]; // Array of columns with title and points array
};

const CapabilityCard: React.FC<CapabilityCardProps> = ({ columns }) => {
  return (
    <div className="border-2 border-LightBlue bg-white dark:bg-bg-color-dark rounded-lg p-6 w-full transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="grid grid-cols-3 gap-4">
        {/* Render each column title and list of points */}
        {columns.map((column, colIndex) => (
          <div key={colIndex}>
            <h3 className="text-xl font-semibold dark:text-white mb-2">{column.title}</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {column.points.map((point, index) => (
                <li key={index} style={{ textIndent: "-1.4em", paddingLeft: "1.2em" }}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const RegionCards = () => {
  const tableData6 = {
    columnNames: ["Region", "POC", "Location"],
    tableDataCol1: ["Global Projects", "North America", "Asia and Oceania", "Americas", "Europe", "Middle East", "MENA & CIS", "US Gov. & Infra."],
    tableDataCol2: ["Romolo Raciti", "Pamir Alkus", "Kalim Shaikh", "Arturo Portilla", "Luca Gaetani", "Marilena Macrina", "Ted Akharman", "Charlie Peker"],
    tableDataCol3: ["Houston", "Houston", "Mumbai", "Bogota", "Rome", "Abu Dhabi", "Istanbul", "Houston"],
  };

  // Create an array of columns with titles and points for each column
  const columnsData = [
    { title: tableData6.columnNames[0], points: tableData6.tableDataCol1 },
    { title: tableData6.columnNames[1], points: tableData6.tableDataCol2 },
    { title: tableData6.columnNames[2], points: tableData6.tableDataCol3 },
  ];

  return (
    <section className="mt-10">
      <div className="w-full flex justify-center">
        {/* Render a single CapabilityCard with three columns in it */}
        <CapabilityCard columns={columnsData} />
      </div>
    </section>
  );
};

export default RegionCards;
