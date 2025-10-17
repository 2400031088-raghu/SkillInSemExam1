import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`border border-gray-200 rounded-2xl shadow-sm p-5 bg-white hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
