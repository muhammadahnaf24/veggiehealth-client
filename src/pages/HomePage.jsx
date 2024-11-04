import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4  ">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11499/3b360279-8b43-40f3-9b11-604749128187.jpg"
            alt="Header"
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold tracking-wide">
            Welcome to VeggieHealth App
          </h1>
        </div>
        <div className="p-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            "Discover, Learn, and Live Healthier with Every Veggie!"
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            VeggieHealth App is an educational and AI-powered vegetable
            recognition app that helps users learn about the nutritional
            benefits of various vegetables and identify them through image
            detection. The app offers a comprehensive catalog, providing details
            on each vegetable’s health benefits, nutritional value, and storage
            tips. Users can search vegetables by name or category, making it a
            practical source of dietary information. With its detection feature,
            VeggieHealth App allows users to upload a photo and instantly
            identify unfamiliar vegetables, making it an ideal tool for
            promoting healthier lifestyles and greater nutritional awareness.
          </p>
          <button
            variant="primary"
            className="px-6 py-3 rounded-full bg-green-900 text-white text-lg font-semibold hover:bg-gray-600 transition duration-300"
          >
            Start Scanning
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
