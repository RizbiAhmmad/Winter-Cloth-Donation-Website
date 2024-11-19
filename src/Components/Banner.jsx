import React from "react";
import bannerImg1 from "../assets/Banner 1.jpg";
import bannerImg2 from "../assets/Banner 4.jpg";
import bannerImg3 from "../assets/Banner 7.jpg";
import bannerImg4 from "../assets/Banner 5.jpg";

import featuredImg1 from "../assets/Donation 2.jpeg"
import featuredImg2 from "../assets/Donation 4.jpg"

const Banner = () => {
  return (
    <>
      {/* Carousel Section */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={bannerImg1}
            className="w-full h-96 md:h-[100vh] object-cover bg-gray-200"
            alt="Banner 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={bannerImg2}
            className="w-full h-96 md:h-[100vh] object-cover bg-gray-200"
            alt="Banner 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={bannerImg3}
            className="w-full h-96 md:h-[100vh] object-cover bg-gray-200"
            alt="Banner 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={bannerImg4}
            className="w-full h-96 md:h-[100vh] object-cover bg-gray-200"
            alt="Banner 4"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-base-200 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Winter Donation</h2>
          <p className="text-lg">
            Winter Donation is dedicated to helping those in need during the harsh winter season.
            We connect donors with volunteers to provide warm clothing to vulnerable communities across Bangladesh.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl p-5">
              <h3 className="text-xl font-semibold">Step 1: Choose a Campaign</h3>
              <p>Select a donation campaign from our list to support a specific division.</p>
            </div>
            <div className="card bg-base-100 shadow-xl p-5">
              <h3 className="text-xl font-semibold">Step 2: Donate Clothes</h3>
              <p>Provide details about the items you wish to donate and submit the form.</p>
            </div>
            <div className="card bg-base-100 shadow-xl p-5">
              <h3 className="text-xl font-semibold">Step 3: Delivery & Pickup</h3>
              <p>Our volunteers will coordinate the pickup and ensure the items reach those in need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section 1: Featured Campaigns */}
      <section className="bg-base-200 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Campaigns</h2>
          <div className="flex justify-center space-x-4">
            <div className="card w-64 bg-base-100 shadow-xl">
              <img src={featuredImg1} alt="Featured Campaign 1" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Dhaka Winter Drive</h3>
                <p>Help bring warmth to families in Dhaka city.</p>
              </div>
            </div>
            <div className="card w-64 bg-base-100 shadow-xl">
              <img src={featuredImg2} alt="Featured Campaign 2" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Chittagong Relief</h3>
                <p>Support those affected by the cold wave in Chittagong.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Extra Section 2: Stories of Impact */}
<section className="py-10">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Stories of Impact</h2>
    <p className="mb-8 text-lg">
      Discover how your donations have touched lives and brought warmth to those in need during the winter season.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="card bg-base-100 shadow-xl p-5">
        <h3 className="text-xl font-semibold">A Family's Warm Winter</h3>
        <p>
          "Thanks to the donations, our family received blankets and warm clothing just in time. We are truly grateful for the support."
        </p>
        <p className="mt-4 text-gray-600 text-sm">— Rahima, Dhaka</p>
      </div>
      <div className="card bg-base-100 shadow-xl p-5">
        <h3 className="text-xl font-semibold">Hope Restored</h3>
        <p>
          "When I had almost given up hope, volunteers arrived with warm clothes for my children. It was a blessing."
        </p>
        <p className="mt-4 text-gray-600 text-sm">— Alam, Sylhet</p>
      </div>
      <div className="card bg-base-100 shadow-xl p-5">
        <h3 className="text-xl font-semibold">Empowered to Help Others</h3>
        <p>
          "Receiving help during a tough time inspired me to become a donor this year. The cycle of kindness continues!"
        </p>
        <p className="mt-4 text-gray-600 text-sm">— Shila, Chittagong</p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Banner;
