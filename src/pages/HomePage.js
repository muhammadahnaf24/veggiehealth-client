import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4  ">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://i.pcmag.com/imagery/articles/05hXk1J5R4iHWkM13wqrr9M-7.fit_lim.size_1050x.jpg"
            alt="Header"
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold tracking-wide">
            Welcome to MyApp
          </h1>
        </div>
        <div className="p-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Organize Your Life with Ease
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            MyApp is a personal task manager designed to help you stay organized
            and achieve your goals with ease. It allows you to create and track
            your tasks, mark them as complete, and provides an overview of what
            needs to be done. With a clean, user-friendly interface, MyApp is
            perfect for anyone looking to streamline their daily activities and
            manage their workload effectively.
          </p>
          <button
            variant="primary"
            className="px-6 py-3 rounded-full bg-yellow-600 text-white text-lg font-semibold hover:bg-yellow-800 transition duration-300"
          >
            Create Your First Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
