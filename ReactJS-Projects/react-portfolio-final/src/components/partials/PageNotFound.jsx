import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-medium text-gray-600 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6">
        The page you are looking for does not exist.
      </p>
      <a
        href="/home"
        className="px-4 py-2 bg-accent text-white rounded hover:bg-[#f3f4f6] hover:text-black hover:border-2 hover:border-line border-2 border-transparent transition duration-300"
      >
        Go Home
      </a>
    </div>
  );
};

export default PageNotFound;
