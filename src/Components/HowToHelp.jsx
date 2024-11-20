import React from "react";

const HowToHelp = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          How You Can Help
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Together, we can make a difference. Here's how you can contribute and make an impact.
        </p>

        {/* Cards to display how to help */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Help Option */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl text-blue-500 mb-4">
              <i className="fas fa-donate"></i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Donate</h2>
            <p className="text-gray-600 mb-4">
              Your generous donations can help provide essential resources to those in need. Every little bit counts.
            </p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
              Donate Now
            </button>
          </div>

          {/* Second Help Option */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl text-green-500 mb-4">
              <i className="fas fa-handshake"></i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Volunteer</h2>
            <p className="text-gray-600 mb-4">
              Join our community of volunteers and help in various activities like organizing events, spreading awareness, and more.
            </p>
            <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300">
              Become a Volunteer
            </button>
          </div>

          {/* Third Help Option */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl text-yellow-500 mb-4">
              <i className="fas fa-share-alt"></i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Spread the Word</h2>
            <p className="text-gray-600 mb-4">
              Help us reach more people by sharing our cause on your social media and encouraging your friends and family to get involved.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
              Share Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;
