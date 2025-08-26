import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Post from './../Electronics/Post/Post';
import { Link } from "react-router-dom";

const metrics = [
  { label: "Free Shipping", desc: "Free shipping on order", icon: "🚚" },
  { label: "Support 24/7", desc: "Contact us 24 hours a day", icon: "🕑" },
  { label: "Payment Secure", desc: "Safe & secure payment", icon: "🔒" },
];

const popularProducts = [
  { id: 1, name: "Wireless Headphone", price: 39.99, rating: 4.5, image: "https://picsum.photos/seed/headphone/400/300" },
  { id: 2, name: "Table as a Laptop", price: 129.0, rating: 4.2, image: "https://picsum.photos/seed/laptoptable/400/300" },
  { id: 3, name: "Smartphone Mini", price: 249.0, rating: 4.7, image: "https://picsum.photos/seed/phone/400/300" },
  { id: 4, name: "Smart Speaker", price: 59.0, rating: 4.3, image: "https://picsum.photos/seed/speaker/400/300" },
  { id: 5, name: "VR Headset", price: 299.0, rating: 4.6, image: "https://picsum.photos/seed/vr/400/300" },
  { id: 6, name: "Gaming Mouse", price: 29.0, rating: 4.4, image: "https://picsum.photos/seed/mouse/400/300" },
  { id: 7, name: "Portable SSD", price: 89.0, rating: 4.8, image: "https://picsum.photos/seed/ssd/400/300" },
];

const bestProductGallery = [
  "https://i.ibb.co.com/zWbk7cNX/download.jpg",
  "https://i.ibb.co/C3ppN4tP/1p.jpg",
  "https://i.ibb.co/FqwYZJTv/1l.jpg ",
];

const SaleCard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white via-orange-50 to-orange-100 shadow-md  p-6 md:p-10"
  >
    <div className="absolute -left-20 -top-20 w-52 md:w-72 h-52 md:h-72 bg-orange-400/20 rounded-full blur-3xl" />
    <div className="absolute -right-10 top-24 w-32 md:w-40 h-32 md:h-40 bg-amber-300/30 rounded-full blur-2xl" />
    <div className="grid md:grid-cols-2 gap-6 items-center relative z-10">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Shop up to <span className="text-orange-500">30% OFF</span>
        </h3>
        <p className="text-gray-600 mb-6">Compact Camera • Limited time offer</p>
        <Link to='/offers'>
          <button className="px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition w-full md:w-auto">
            Shop Now
          </button>
        </Link>
      </div>
      <motion.img
        whileHover={{ scale: 1.05 }}
        src="https://picsum.photos/seed/camera-sale/640/420"
        alt="camera"
        className="w-full rounded-xl mt-4 md:mt-0"
      />
    </div>
  </motion.div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function GshopStyleLanding() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("/Phone.json")
      .then((res) => res.json())
      .then((data) => {
        const specialCards = data.filter((item) => item.category === "special");
        setCard(specialCards);
      })
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="pt-10 min-h-screen bg-gradient-to-r from-white via-orange-50 to-orange-100">
      <div className="max-w-8xl mx-auto px-2">

        {/* Banner Section */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-10 md:py-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white via-orange-50 to-orange-100 shadow-sm p-6 md:p-10">
            <div className="absolute -right-24 -top-24 w-52 md:w-80 h-52 md:h-80 bg-orange-400/20 rounded-full blur-3xl" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center relative z-10">
              <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                  Our Best <br /> Collections <span className="text-gray-800">For You</span>
                </h1>
                <p className="text-gray-600 mb-8">
                  The stylish smartwatches available to consumers are endless and perfect for workouts.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition w-full sm:w-auto">
                    Add to cart
                  </button>
                  <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-white via-orange-50 to-orange-100 shadow font-semibold hover:bg-gray-50 transition w-full sm:w-auto">
                    More Info
                  </button>
                </div>
              </motion.div>
              <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="relative">
                <img src="https://picsum.photos/seed/hero-watch/700/520" alt="hero watch" className="w-full h-auto rounded-xl" />
              </motion.div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {metrics.map((m) => (
              <motion.div key={m.label} whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-white via-orange-50 to-orange-100 p-5 rounded-2xl shadow-sm border flex items-start gap-4">
                <div className="text-2xl">{m.icon}</div>
                <div>
                  <p className="font-semibold">{m.label}</p>
                  <p className="text-gray-600 text-sm">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ✅ Top Features (Dynamic from Phone.json) */}
        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Top features of the watch
          </h2>

          {card.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2800 }}
              className="pb-10"
            >
              {card.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="bg-gradient-to-r from-white via-orange-50 to-orange-100 p-6 rounded-2xl shadow-sm border grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                    {/* Left */}
                    <div className="text-center md:text-left md:ml-20">
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                        <li>RAM: {item.ram}</li>
                        <li>ROM: {item.rom}</li>
                        <li>Model: {item.model}</li>
                      </ul>
                      <p className="text-gray-600 mb-3">{item.about}</p>
                      <div className="flex justify-center md:justify-start gap-3 mb-5">
                        <span className="text-2xl font-extrabold">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] h-auto object-cover rounded-xl"
                      />
                    </div>

                    {/* Right */}
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold mb-2">{item.brand}</h3>
                      <p className="text-gray-600 mb-3">
                        Stylish design with premium features.
                      </p>
                      <Link to={`/details/${item.id}`}>
                        <button
                          className="px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition w-full md:w-auto"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-500">Loading top feature products...</p>
          )}
        </section>

        <Post />

        {/* Popular Products */}
        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Popular products</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {popularProducts.map((p) => (
              <SwiperSlide key={p.id}>
                <div className="bg-gradient-to-r from-white via-orange-50 to-orange-100 p-4 rounded-2xl shadow-sm border hover:shadow-md transition grid gap-3">
                  <Link to={`/details/${p.id}`}>
                    <div className="relative ml-auto cursor-pointer">
                      <div className="tooltip tooltip-bottom tooltip-success" data-tip="Click & Get Details">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-auto rounded-lg object-cover aspect-video"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Gadgets</p>
                        <h3 className="font-semibold">{p.name}</h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold">${p.price.toFixed(2)}</span>
                          <span className="text-sm text-gray-500">★ {p.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Best Product */}
        <section className="hidden md:block py-12">
          <div className="bg-gradient-to-r from-white via-orange-50 to-orange-100 rounded-2xl p-6 md:p-10 shadow-sm border grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={12} slidesPerView={1} navigation pagination={{ clickable: true }} autoplay={{ delay: 2600 }} className="rounded-xl overflow-hidden">
                {bestProductGallery.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <Link to={`/details/${idx}`}>
                      <img src={src} alt={`best product ${idx + 1}`} className="w-full h-[300px] md:h-[400px] rounded-xl" />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The best product for your best time</h2>
              <p className="text-gray-600 mb-6">Premium sport watch featuring GPS, heart-rate monitor, and vivid AMOLED display. Replace the left gallery with your live product images.</p>
              <Link to='/fashion'>
                <button className="px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition">Explore Now</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Sale Card */}
        <section className="py-12">
          <SaleCard />
        </section>

      </div>
    </div>
  );
}
