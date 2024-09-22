import React from "react";
import addressData from "./addressData";

const CardComponent = ({ id }) => {
  const addressInfo = addressData.find((data) => data.id === id);

  if (!addressInfo) return null;

  return (
    <div className="card w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg transition-all transform hover:-translate-y-2 hover:shadow-xl overflow-hidden">
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={addressInfo.image} // Make sure `image` exists in your data
          alt={addressInfo.city}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Location Details */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-blue-900">
            {addressInfo.city}, {addressInfo.country}
          </h3>
          <p className="text-sm text-gray-600">{addressInfo.address}</p>
        </div>

        {/* See on maps link */}
        <div className="mb-4">
          <a
            href={addressInfo.mapLink}
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
          >
            See on maps →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
