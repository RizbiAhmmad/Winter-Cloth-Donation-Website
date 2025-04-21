import React from 'react';

const Slider = () => {
  return (
    <div
      className="relative h-[500px] md:h-[700px] w-full bg-cover bg-center rounded-3xl overflow-hidden"
      style={{
        backgroundImage: `url('https://www.shutterstock.com/image-vector/clothes-donation-those-need-flat-600nw-2264436335.jpg')`,
      }}
    >
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Donation Drive
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl">
          Join hands to make a difference — donate your clothes and bring warmth to someone’s life.
        </p>
      </div>
    </div>
  );
};

export default Slider;
