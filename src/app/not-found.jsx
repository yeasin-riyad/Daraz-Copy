// pages/404.js
"use client";
import Link from 'next/link';
import { RiArrowGoBackLine } from 'react-icons/ri';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <h1 className="text-9xl font-extrabold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-center text-lg md:text-xl mb-8">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <button className="flex items-center space-x-2 px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300">
          <RiArrowGoBackLine className="text-lg" />
          <span>Back to Home</span>
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
