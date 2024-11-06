// components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-500"></div>
    </div>
  );
};

export default Loader;
