import React, { useState, useEffect } from "react";
import SectionTitle from './../../../Phones/SectionTitle/SectionTitle'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FashionPage = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);

  const [brands, setBrands] = useState([]);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sortBy, setSortBy] = useState("default");

  const [topParticles, setTopParticles] = useState([]);
  const [bottomParticles, setBottomParticles] = useState([]);

  // Fetch items
  useEffect(() => {
    fetch("/Phone.json")
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setFilteredItems(data);
      });
  }, []);

  // Filter & Sort
  useEffect(() => {
    let filtered = [...items];
    if (brands.length > 0) filtered = filtered.filter(d => brands.includes(d.brand));
    filtered = filtered.filter(d => d.price <= maxPrice);

    if (sortBy === "low-high") filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === "high-low") filtered.sort((a, b) => b.price - a.price);
    else if (sortBy === "newest") filtered.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

    setFilteredItems(filtered);
  }, [brands, maxPrice, sortBy, items]);

  const handleBrandChange = (brand) => {
    setBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  };

  const handleShowAll = () => setVisibleCount(filteredItems.length);

  // Initialize particles
  useEffect(() => {
    const colors = ["#F87171", "#60A5FA", "#34D399", "#FBBF24", "#A78BFA"];
    const createParticles = () => [...Array(25)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: 0.5 + Math.random() * 1.5,
      phase: Math.random() * 2 * Math.PI
    }));
    setTopParticles(createParticles());
    setBottomParticles(createParticles());
  }, []);

  // Particle animation
  useEffect(() => {
    let animationFrame;
    const animateParticles = () => {
      setTopParticles(prev => prev.map(p => ({
        ...p,
        top: (p.top + Math.sin(p.phase + Date.now() * 0.002) * 0.1) % 100,
        left: (p.left + Math.cos(p.phase + Date.now() * 0.002) * 0.1) % 100
      })));
      setBottomParticles(prev => prev.map(p => ({
        ...p,
        top: (p.top + Math.sin(p.phase + Date.now() * 0.002) * 0.07) % 100,
        left: (p.left + Math.cos(p.phase + Date.now() * 0.002) * 0.07) % 100
      })));
      animationFrame = requestAnimationFrame(animateParticles);
    };
    animateParticles();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const topSections = [
    { title: "Latest Gadgets", desc: "Explore the newest electronics released this year.", img: "https://i.ibb.co.com/DHFbKZwf/ppppppppppppppp.png", gradient: "bg-gradient-to-br from-indigo-400 via-indigo-200 to-indigo-100" },
    { title: "Top Brands", desc: "From Apple to Samsung, choose the best for your needs.", img: "https://i.ibb.co.com/zWZ46w03/tttttttttttt.png", gradient: "bg-gradient-to-br from-purple-400 via-purple-200 to-purple-100" },
    { title: "Best Deals", desc: "Grab limited-time offers and discounts on popular items.", img: "https://i.ibb.co.com/Y5FRxzt/ttttttttttttttttttttttttt.png", gradient: "bg-gradient-to-br from-pink-400 via-pink-200 to-pink-100" },
    { title: "Customer Support", desc: "Reliable service and warranty assistance at your fingertips.", img: "https://i.ibb.co.com/vxqj1GR7/support.png", gradient: "bg-gradient-to-br from-green-400 via-green-200 to-green-100" },
  ];

  const bottomSections = [
    { title: "Quality Assurance", desc: "All electronics are verified and tested before shipping.", img: "https://i.ibb.co.com/yn2f3y8p/Quality-Assurance-Transparent-Images.png", gradient: "bg-gradient-to-br from-indigo-400 via-indigo-200 to-indigo-100" },
    { title: "Free Shipping", desc: "Enjoy free shipping on orders over $100.", img: "https://i.ibb.co.com/0pbFhcqV/fre.png", gradient: "bg-gradient-to-br from-purple-400 via-purple-200 to-purple-100" },
    { title: "Easy Returns", desc: "Hassle-free returns within 30 days of purchase.", img: "https://i.ibb.co.com/Dx1j2RR/return.png", gradient: "bg-gradient-to-br from-pink-400 via-pink-200 to-pink-100" },
    { title: "Exclusive Offers", desc: "Sign up to receive members-only deals and promotions.", img: "https://i.ibb.co.com/4nW8WqWC/exlutive.png", gradient: "bg-gradient-to-br from-green-400 via-green-200 to-green-100" },
  ];

  return (
    <div className="pt-24 px-4 sm:px-6 md:px-8 lg:px-16 relative">

      {/* Top Particles */}
      {topParticles.map((p, idx) => (
        <div key={idx} style={{ top: `${p.top}%`, left: `${p.left}%`, width: p.size, height: p.size, backgroundColor: p.color }}
          className="absolute rounded-full opacity-60" />
      ))}

      {/* Top Sections */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-14 relative z-10 px-4">
  {topSections.map((section, idx) => (
    <div
      key={idx}
      className="group relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 p-8 flex flex-col items-center text-center"
    >
      {/* Icon Wrapper */}
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md mb-6 transform transition-all duration-500 group-hover:scale-110">
        <img
          src={section.img}
          alt={section.title}
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
        {section.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed">
        {section.desc}
      </p>

      {/* Glow Animation on Hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-purple-400/20 blur-2xl"></div>
    </div>
  ))}
</div>



      <SectionTitle text="Top Electronics for You" />

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 bg-white p-4 rounded-2xl shadow-lg">
        <div className="flex flex-wrap items-center gap-4">
          {["Apple", "Samsung", "Xiaomi", "Sony"].map(brand => (
            <label key={brand} className="flex items-center gap-1 cursor-pointer bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
              <input type="checkbox" checked={brands.includes(brand)} onChange={() => handleBrandChange(brand)} />
              {brand}
            </label>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <span className="mr-2 font-semibold">Max Price: ${maxPrice}</span>
            <input type="range" min="100" max="2000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="inline-block w-48" />
          </div>
          <div>
            <select className="border rounded-lg p-2" onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.slice(0, visibleCount).map(item => (
          <div key={item.id} className="relative bg-white rounded-3xl shadow-xl overflow-hidden group transform transition-all hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            {item.discount && <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-xl font-bold z-10">-{item.discount}</span>}
            <img src={item.image} alt={item.name} className="w-full h-64 sm:h-72 md:h-64 lg:h-60 object-cover transition-transform group-hover:scale-105" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-gray-400 line-through">{item.price} $</p>
              <p className="text-yellow-500 font-bold text-xl">{item.discountPrice} $</p>
            </div>
            <div className="absolute inset-0 bg-opacity-20 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity space-y-4">
              <Link to={`/details/${item.id}`}>  <button className="bg-orange-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-orange-600">Buy Now</button>
              </Link>
              <Link to={`/details/${item.id}`}>   <button className="bg-white px-3 py-1 rounded-lg text-gray-800 hover:bg-gray-200">Quick View</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filteredItems.length && (
        <div className="text-center my-6">
          <button onClick={handleShowAll} className="btn btn-outline btn-primary">Show All</button>
        </div>
      )}

      {/* Bottom Particles */}
      {bottomParticles.map((p, idx) => (
        <div key={idx} style={{ top: `${p.top}%`, left: `${p.left}%`, width: p.size, height: p.size, backgroundColor: p.color }}
          className="absolute rounded-full opacity-50" />
      ))}

      {/* Bottom Sections */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 px-4">
      {bottomSections.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
          whileHover={{ scale: 1.05 }}
          className="relative bg-white dark:bg-gray-900 rounded-[30px] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden group transition-all duration-500"
        >
          {/* Decorative Shape */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-bl-[50%] opacity-80 group-hover:scale-110 transition-transform duration-500"></div>

          {/* Content */}
          <div className="relative p-8 flex flex-col items-center text-center z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center mb-6 shadow-md">
              <img
                src={section.img}
                alt={section.title}
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {section.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {section.desc}
            </p>
          </div>

          {/* Animated Glow Border */}
          <div className="absolute inset-0 rounded-[30px] border-2 border-transparent group-hover:border-transparent">
            <div className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-borderGlow"></div>
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default FashionPage;
