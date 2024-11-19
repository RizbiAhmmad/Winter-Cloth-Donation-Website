import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const singleData = useLoaderData();
  const { id, title, image, description, status, contactInfo, division } = singleData;

 
  const [form, setForm] = useState({
    quantity: "",
    itemType: "",
    pickupLocation: "",
    notes: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We will reach your destination soon.");
    setForm({ quantity: "", itemType: "", pickupLocation: "", notes: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Campaign Details</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Campaign Details */}
        <div className="md:w-1/2">
          <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-2">{description}</p>
          <p className="text-gray-800 mb-2">
            <strong>Status:</strong> {status}
          </p>
          <p className="text-gray-800 mb-2">
            <strong>Contact Info:</strong> {contactInfo}
          </p>
          <p className="text-gray-800 mb-4">
            <strong>Division:</strong> {division}
          </p>
        </div>

        {/* Donation Form */}
        <div className="md:w-1/2 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Donate Items</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                Quantity of Items
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="e.g., 2 jackets, 3 blankets"
              />
            </div>
            <div>
              <label htmlFor="itemType" className="block text-sm font-medium mb-1">
                Item Type
              </label>
              <input
                type="text"
                id="itemType"
                name="itemType"
                value={form.itemType}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="e.g., blanket, jacket, sweater"
              />
            </div>
            <div>
              <label htmlFor="pickupLocation" className="block text-sm font-medium mb-1">
                Pickup Location
              </label>
              <input
                type="text"
                id="pickupLocation"
                name="pickupLocation"
                value={form.pickupLocation}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
              />
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-1">
                Additional Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Write any additional information..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
