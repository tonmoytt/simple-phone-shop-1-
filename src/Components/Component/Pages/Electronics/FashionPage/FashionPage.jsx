import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import banner from '../../../../../assets/Logo/laptop-headphones-red-background_253401-4823.avif'
import { motion } from "framer-motion";
import { Link, useOutletContext } from "react-router-dom";

const FashionPage = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("/Phone.json")
            .then((res) => res.json())
            .then((resData) => setData(resData))
            .catch((err) => console.error("Error loading data:", err));
    }, []);

    const { handleAddToCart } = useOutletContext();

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const blogs = Array.from({ length: 3 }).map((_, i) => ({
        id: i,
        title: `Blog Title ${i + 1}`,
        desc: "Some informative content about our product and offers.",
        image: `https://picsum.photos/seed/blog${i}/500/300`,
    }));

    // Section wise filter
    const dealsData = data.filter((item) => item.categoryMore === "Deals");
    const homeData = data.filter((item) => item.categoryMore === "Home");
    const consumerData = data.filter((item) => item.categoryMore === "Consumer");
    const offeredData = data.filter((item) => item.categoryMore === "Offered");

    // 4 categories
    const popular = data.filter((item) => item.category === "popular");
    const newArrival = data.filter((item) => item.category === "newArrival");
    const special = data.filter((item) => item.category === "special");
    const topSell = data.filter((item) => item.category === "topSell");

    return (
        <div>
            <div className="pt-20 px-4 lg:px-10 bg-gray-50">

                {/* ========== HERO SECTION ========== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

                    {/* Left Category List */}
                    <div className="hidden md:block lg:col-span-2 bg-white rounded-lg shadow p-3">
                        <ul className="space-y-1">
                            {[
                                "Automobiles",
                                "Clothes and wear",
                                "Home interiors",
                                "Computer and tech",
                                "Tools, equipments",
                                "Sports and outdoor",
                                "Animal and pets",
                                "Machinery tools",
                                "More category",
                            ].map((cat, i) => (
                                <li
                                    key={i}
                                    className="cursor-pointer text-base font-medium text-gray-700 px-2 py-2 rounded-md 
                                    hover:bg-blue-50 hover:text-blue-600 hover:pl-4 transition-all duration-200"
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Banner */}
                    <div className="lg:col-span-7 relative rounded-lg shadow overflow-hidden h-56 sm:h-72 lg:h-auto">
                        <div className="absolute inset-0">
                            <img
                                src={banner}
                                alt="Banner"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute  bg-gradient-to-r from-black/60 to-black/20" />
                        </div>

                        <div className="relative z-10 flex items-center h-full">
                            <div className="shadow-lg  p-6 sm:p-10">
                                <h2 className="text-base sm:text-lg font-semibold text-white text-start pl-8">Latest trending</h2>
                                <h1 className="text-xl sm:text-3xl font-bold text-white mt-2 pl-8">Electronic items</h1>
                                <button className="mt-4 px-5 py-2 bg-white text-gray-800 font-medium rounded-lg shadow-md 
                                    hover:bg-gray-100 hover:shadow-lg transition-all duration-200 text-start">
                                    Find More Products
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* User Info + Offers */}
                    <div className="lg:col-span-3 flex flex-col gap-3">
                        <div className="hidden md:block bg-white rounded-lg shadow p-4 text-center">
                            <p className="text-base py-2">Hi, let’s get started</p>
                            <button className="w-full mt-2 bg-blue-500 text-white py-1 rounded">
                                Join now
                            </button>
                            <button className="w-full mt-2 border border-gray-300 py-1 rounded">
                                Log in
                            </button>
                        </div>
                        <div className="bg-orange-400 text-white rounded-lg shadow p-4 text-center">
                            <p>Get US $10 <br />off with a new <br /> supplier</p>
                        </div>
                        <div className="bg-blue-300 text-white rounded-lg shadow p-4 text-center">
                            <p>Send quotes <br /> with supplier <br /> preferences</p>
                        </div>
                    </div>
                </div>

                {/* Deals & Offers */}
                <DealsSection items={dealsData} />

                {/* Other Sections */}
                <Section title="Latest Item" items={homeData} bg="bg-green-100" handleAddToCart={handleAddToCart} />
                <Section title="Consumer electronics and gadgets" items={consumerData} bg="bg-blue-100" handleAddToCart={handleAddToCart} />
                <Section title="Offered Products" items={offeredData} bg="bg-pink-100" handleAddToCart={handleAddToCart} />
                <Section title="Popular" items={popular} bg="bg-yellow-100" handleAddToCart={handleAddToCart} />
                <Section title="New Arrivals" items={newArrival} bg="bg-purple-100" handleAddToCart={handleAddToCart} />
                <Section title="Special Offers" items={special} bg="bg-red-100" handleAddToCart={handleAddToCart} />
                <Section title="Top Selling" items={topSell} bg="bg-teal-100" handleAddToCart={handleAddToCart} />

            </div>

            {/* Blog Section */}
            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-16 px-4 sm:px-6 lg:px-10 bg-gray-50"
            >
                <h2 className="text-3xl font-bold text-center mb-10">Latest Articles</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-r from-white via-orange-50 to-orange-100 p-6 rounded-lg shadow-md overflow-hidden"
                        >
                            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md" />
                            <div className="p-4">
                                <h3 className="font-semibold mb-2">{blog.title}</h3>
                                <p className="text-gray-600 mb-3">{blog.desc}</p>
                                <button className="text-pink-600 hover:underline">Read More</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Why Choose Us */}
            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-16 px-4 sm:px-6 lg:px-10 bg-gradient-to-r from-white via-orange-50 to-orange-100 rounded-lg shadow-md"
            >
                <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {[
                        { title: "Fast Delivery", desc: "Get your product quickly." },
                        { title: "Premium Quality", desc: "Only the best products." },
                        { title: "Secure Payment", desc: "We value your privacy." },
                        { title: "24/7 Support", desc: "Always here to help." },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 bg-gray-50 rounded-2xl shadow-md"
                        >
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Newsletter */}
            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-16 px-4 sm:px-6 lg:px-10 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center"
            >
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="mb-6">Get updates about our latest products and offers.</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none w-64 text-black"
                    />
                    <button className="px-6 py-2 bg-pink-600 rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:scale-105 transition-transform">
                        Subscribe
                    </button>
                </div>
            </motion.section>
        </div>
    );
};

// Deals Section with Countdown Timer
const DealsSection = ({ items }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const target = new Date();
        target.setDate(target.getDate() + 4);

        const interval = setInterval(() => {
            const now = new Date();
            const diff = target - now;

            if (diff <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / 1000 / 60) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white p-4 m-4 rounded-lg shadow">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-3 gap-2">
                <h2 className="font-bold">Deals and offers</h2>
                <div className="flex gap-2 text-sm font-mono">
                    {["days", "hours", "minutes", "seconds"].map((unit, i) => (
                        <span
                            key={i}
                            className="relative inline-flex items-center justify-center px-3 py-1.5 rounded-full 
                            bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500
                            text-white font-mono tabular-nums font-semibold
                            shadow-lg shadow-pink-500/20 border border-white/20 backdrop-blur-md
                            transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/40"
                        >
                            {String(Object.values(timeLeft)[i]).padStart(2, "0")}{unit[0]}
                        </span>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {items.map((item, i) => (
                   <div key={i} className="border rounded-lg p-3 text-center hover:shadow">
                       <Link to={`/details/${item.id}`}> <div className="h-24 bg-gray-100 rounded mb-2 flex items-center justify-center">
                            <img src={item.image} alt={item.name} className="h-20 object-contain" />
                        </div>
                        <h3 className="font-medium">{item.name}</h3>
                        {item.discount && (
                            <span className="text-red-500 font-semibold">-{item.discount}%</span>
                        )}
                         </Link> 
                    </div>
                ))}
            </div>
        </div>
    );
};

// Generic Section
const Section = ({ title, items, bg, handleAddToCart }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
            <div className={`col-span-3 ${bg} rounded-lg shadow flex items-center justify-center py-6`}>
                <h2 className="font-bold text-lg">{title}</h2>
            </div>
            <div className="col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="border rounded-2xl p-4 text-center bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                        {/* Image Container */}
                        <div className="h-28 bg-gray-100 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-20 object-contain transform hover:scale-110 transition duration-300"
                            />
                        </div>

                        {/* Item Name */}
                        <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
                            {item.name}
                        </h3>

                        {/* Price */}
                        {item.price && (
                            <p className="text-gray-600 text-sm font-medium mt-1">${item.price}</p>
                        )}

                        {/* Button */}
                        <button onClick={() => {
                            handleAddToCart(item);

                        }}
                            className="mt-3 w-full py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-indigo-600 hover:to-blue-600 transition-all duration-300">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FashionPage;
