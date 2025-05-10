import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const Camp = () => {
  const campaigns = useLoaderData();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign, index) => (
          <motion.div
            key={campaign.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              className="overflow-hidden h-56"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                {campaign.title}
              </h2>
              <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                <span className="font-semibold text-gray-700">Description:</span>{" "}
                {campaign.description}
              </p>
              <p className="text-gray-500 mb-4 text-sm">
                <span className="font-semibold text-gray-700">Division:</span>{" "}
                {campaign.division}
              </p>
              <NavLink to={`/details/${campaign.id}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 rounded-xl mt-2 transition-all"
                >
                  Donate Now
                </motion.button>
              </NavLink>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Camp;
