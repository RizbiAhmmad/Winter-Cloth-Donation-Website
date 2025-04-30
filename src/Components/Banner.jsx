import React from "react";
import { FaHandsHelping, FaRegSmileBeam, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import featuredImg1 from "../assets/Donation 2.jpeg";
import featuredImg2 from "../assets/Donation 4.jpg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Banner = () => {
  return (
    <>
      {/* About Section */}
      <section className="bg-base-200 py-10">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            About Winter Donation
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Winter Donation is dedicated to helping those in need during the harsh winter season.
            We connect donors with volunteers to provide warm clothing to vulnerable communities across Bangladesh.
          </motion.p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[
              {
                title: "Step 1: Choose a Campaign",
                desc: "Select a donation campaign from our list to support a specific division.",
              },
              {
                title: "Step 2: Donate Clothes",
                desc: "Provide details about the items you wish to donate and submit the form.",
              },
              {
                title: "Step 3: Delivery & Pickup",
                desc: "Our volunteers will coordinate the pickup and ensure the items reach those in need.",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="card bg-base-100 shadow-xl p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section className="bg-base-200 py-10">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Featured Campaigns
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6 px-4">
            {[{ img: featuredImg1, title: "Dhaka Winter Drive", desc: "Help bring warmth to families in Dhaka city." },
              { img: featuredImg2, title: "Chittagong Relief", desc: "Support those affected by the cold wave in Chittagong." }]
              .map((campaign, i) => (
                <motion.div
                  key={i}
                  className="card w-72 bg-base-100 shadow-xl overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <img src={campaign.img} alt={campaign.title} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{campaign.title}</h3>
                    <p>{campaign.desc}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Why Donate With Us Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Why Donate With Us?
          </motion.h2>
          <motion.p
            className="text-lg mb-10 max-w-xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            We're not just collecting clothes—we're building hope, trust, and connection across communities.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[
              {
                icon: <FaHandsHelping className="text-4xl text-blue-500 mb-4" />,
                title: "Trusted Process",
                desc: "We ensure transparency from donation to delivery. Track every step of your contribution.",
              },
              {
                icon: <FaRegSmileBeam className="text-4xl text-yellow-500 mb-4" />,
                title: "Direct Impact",
                desc: "Your donations directly reach families in need through our verified volunteer network.",
              },
              {
                icon: <FaShieldAlt className="text-4xl text-green-500 mb-4" />,
                title: "Safe & Secure",
                desc: "We value your trust. All data and transactions are safely handled with privacy in mind.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center text-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories of Impact Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Stories of Impact
          </motion.h2>
          <motion.p
            className="mb-8 text-lg max-w-xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Discover how your donations have touched lives and brought warmth to those in need during the winter season.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[
              {
                title: "A Family's Warm Winter",
                desc: `"Thanks to the donations, our family received blankets and warm clothing just in time. We are truly grateful for the support."`,
                name: "— Rahima, Dhaka",
              },
              {
                title: "Hope Restored",
                desc: `"When I had almost given up hope, volunteers arrived with warm clothes for my children. It was a blessing."`,
                name: "— Alam, Sylhet",
              },
              {
                title: "Empowered to Help Others",
                desc: `"Receiving help during a tough time inspired me to become a donor this year. The cycle of kindness continues!"`,
                name: "— Shila, Chittagong",
              },
            ].map((story, idx) => (
              <motion.div
                key={idx}
                className="card bg-base-100 shadow-xl p-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold">{story.title}</h3>
                <p className="mt-2">{story.desc}</p>
                <p className="mt-4 text-gray-600 text-sm">{story.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
