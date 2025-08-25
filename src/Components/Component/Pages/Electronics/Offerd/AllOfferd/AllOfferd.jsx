import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Offerd from "../Offerd";
import { Link, useOutletContext } from "react-router-dom";

const AllOfferd = () => {

  const { handleAddToCart } = useOutletContext();
  const [offerd, setOfferd] = useState([]);

  useEffect(() => {
    fetch("/Phone.json")
      .then((res) => res.json())
      .then((data) => setOfferd(data));
  }, []);

  const deals = offerd.filter((item) => item.categoryMore === "Deals");
  const offered = offerd.filter((item) => item.categoryMore === "Offered");
  const newArrival = offerd.filter((item) => item.category === "newArrival");

  return (
    <div className="bg-gray-100 lg:py-10 px-2 mt-2  md:px-8 lg:px-16 space-y-20">

      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Offerd />
      </motion.div>

      {/* Deals Section */}
      <section>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-[#FF6900] mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          🔥 Hot Deals
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {deals.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center relative transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {item.discount && (
                <span className="absolute top-2 left-2 bg-yellow-400 text-black font-bold px-3 py-1 text-sm rounded-full">
                  -{item.discount}
                </span>
              )}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 sm:h-48 md:h-40 lg:h-36 object-contain p-4"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="line-through text-gray-500">{item.price} $</p>
                <p className="text-yellow-500 text-xl font-bold">{item.discountPrice} $</p>
                <Link to={`/details/${item.id}`}>   <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 mt-3 rounded-lg font-semibold w-full"
                >
                  MORE
                </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Offered Section */}
      <section className="px-9 sm:px-6 lg:px-10 py-8">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF6900] mb-6 text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎉 Special Offers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offered.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center relative transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {item.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white font-bold px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full">
                  -{item.discount}
                </span>
              )}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-36 sm:h-40 md:h-44 lg:h-40 xl:h-48 object-contain p-3 sm:p-4"
              />
              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-base sm:text-lg">{item.name}</h3>
                <p className="line-through text-gray-500 text-sm sm:text-base">
                  {item.price} $
                </p>
                <p className="text-green-600 text-lg sm:text-xl font-bold">
                  {item.discountPrice} $
                </p>
                <Link to={`/details/${item.id}`}>   <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 py-2 mt-3 rounded-lg font-semibold w-full text-sm sm:text-base"
                >
                  MORE
                </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Left-Right Info Section */}
      <motion.section
        className="bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://picsum.photos/seed/info/500/300"
          alt="info"
          className="w-full rounded-lg"
        />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
            Why Choose Our Products?
          </h2>
          <p className="text-gray-600 mb-4">
            Our gadgets are built with premium quality, advanced technology, and unbeatable pricing. Customers love our 24/7 support and fast shipping.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold"
          >
            Learn More
          </motion.button>
        </div>
      </motion.section>

      {/* Quick Info Cards */}
      <section>
        <motion.h2 className="text-2xl sm:text-3xl font-bold text-[#FF6900]  mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          📌 Quick Info
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "🚚 Free Delivery", text: "Free delivery on all orders above $50 worldwide." },
            { title: "💳 Secure Payment", text: "100% secure payment options via multiple gateways." },
            { title: "⭐ Top Quality", text: "Only the best products with genuine warranty." },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow text-center transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Arrival / Trending Section */}
      <section>
        <motion.h2 className=" text-2xl sm:text-3xl font-bold text-[#FF6900] mb-6" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          🚀 Trending Now
        </motion.h2>
        <div className=" flex flex-row gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
          {newArrival.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] bg-gradient-to-tr from-purple-700 via-pink-600 to-orange-500 rounded-xl shadow-lg p-4 flex-shrink-0 transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain rounded-lg mb-4"
              />
              <h3 className="text-white font-bold text-lg mb-2">{item.name}</h3>
              <p className="text-gray-200 line-through">{item.oldPrice} $</p>
              <p className="text-yellow-300 text-xl font-bold">{item.newPrice} $</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-white text-purple-700 font-semibold px-4 py-2 mt-3 rounded-lg w-full"
              >
                <button onClick={() => {
                  handleAddToCart(item);

                }}>
                  Buy Now
                </button>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-gradient-to-r from-[#1f1c2c] via-[#928dab] to-[#1f1c2c] p-8 rounded-xl shadow-lg">
        <motion.h2 className="text-2xl sm:text-3xl font-bold text-white mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          💬 Customer Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "John Doe", review: "Amazing products! Fast delivery and excellent support." },
            { name: "Jane Smith", review: "Best online store for gadgets. Highly recommend!" },
            { name: "Alice Johnson", review: "Quality products at unbeatable prices." },
          ].map((user, i) => (
            <motion.div key={i} className="bg-white p-6 rounded-xl shadow text-center transform transition-transform hover:scale-105" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
              <h3 className="font-bold text-lg mb-2">{user.name}</h3>
              <p className="text-gray-600">{user.review}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand Logos */}
      <section className="p-8">
        <motion.h2 className="text-2xl sm:text-3xl font-bold text-white mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          🏷️ Our Trusted Brands
        </motion.h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-items-center">
          {["https://picsum.photos/100/50?random=1", "https://picsum.photos/100/50?random=2", "https://picsum.photos/100/50?random=3", "https://picsum.photos/100/50?random=4", "https://picsum.photos/100/50?random=5", "https://picsum.photos/100/50?random=6"].map((logo, i) => (
            <motion.img key={i} src={logo} alt={`brand-${i}`} className="h-12 object-contain" whileHover={{ scale: 1.2 }} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default AllOfferd;
