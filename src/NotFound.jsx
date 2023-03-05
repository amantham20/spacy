import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-6xl mb-8 font-bold">404</h1>
      <h2 className="text-white text-3xl mb-4 font-medium">Houston, we have a problem...</h2>
      <p className="text-white text-lg mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="bg-white text-black py-2 px-6 rounded-full font-medium hover:bg-gray-200">Go back to home</Link>
    </div>
  );
};

export default NotFound;