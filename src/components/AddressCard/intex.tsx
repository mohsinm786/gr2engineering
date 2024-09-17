import React from "react";
import addressData from "./addressData";

const CardComponent = ({ id }) => {
  const addressInfo = addressData.find((data) => data.id === id); // Find the corresponding address by ID

  if (!addressInfo) return null; // If no data found, return null (optional)

  return (
    <div className="card w-full max-w-md mx-auto my-4 p-4 bg-white/80 rounded-lg shadow-lg transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:border-2 hover:border-LightBlue">
      <div className="overlay w-full h-full absolute inset-0 bg-blue/20 rounded-lg transition-all clip-circle hover:clip-expanded"></div>
      <div className="relative z-10 card-body flex flex-col items-start p-3 space-y-4">
        {/* Address Section */}
        <div className="flex items-center">
          <img src="/images/addedImg/address.png" alt="Address Icon" className="w-5 h-5 mr-2" />
          <p className="text-body-color font-medium text-base">{addressInfo.address}</p>
        </div>

        {/* Email Section */}
        <div className="flex items-center">
          <img src="/images/addedImg/email.png" alt="Email Icon" className="w-5 h-5 mr-2" />
          <p className="text-body-color font-medium text-base">{addressInfo.email}</p>
        </div>

        {/* Phone Number Section */}
        <div className="flex items-center">
          <img src="/images/addedImg/phone.png" alt="Phone Icon" className="w-5 h-5 mr-2" />
          <p className="text-body-color font-medium text-base">{addressInfo.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
