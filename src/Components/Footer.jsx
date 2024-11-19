import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 py-8">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
         
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-primary">WinterDonation</h2>
            <p className="text-gray-600">Bringing warmth to those in need.</p>
          </div>

          
          <div className="flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-primary">Home</a>
            <a href="/campaigns" className="text-gray-700 hover:text-primary">Donation Campaigns</a>
            <a href="/how-to-help" className="text-gray-700 hover:text-primary">How to Help</a>
            <a href="/dashboard" className="text-gray-700 hover:text-primary">Dashboard</a>
          </div>

          
          <div className="flex space-x-4">
           
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <i className="fa-brands fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400"
            >
              <i className="fa-brands fa-twitter fa-lg"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500"
            >
              <i className="fa-brands fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700"
            >
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>

        
        <div className="text-center mb-4">
          <p className="text-gray-700">Contact us: info@winterdonation.com</p>
          <p className="text-gray-700">Phone: +880-123-456789</p>
        </div>

        
        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Winter Clothing Donation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
