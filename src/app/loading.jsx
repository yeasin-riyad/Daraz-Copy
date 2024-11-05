import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 w-full h-full rounded-full border-4 border-t-transparent border-blue-600 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
