import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Tranding = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch('/Phone.json')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(item => item.category === 'popular');
                setPhones(filtered);
            });
    }, []);

    return (
        <div className=" mt-10 bg-gray-50 min-h-screen py-10">
            <section
                className="relative w-full h-[320px] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1603791452906-e4c1a5416bd7')",
                }}
            >
                <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Trending & Popular Phones
                    </h1>
                    <p className="text-lg md:text-xl">
                        Discover the hottest devices everyone is talking about!
                    </p>
                </div>
            </section>
            {/* Header Section */}
            <div className="mt-10 text-center mb-10">
                <motion.h2
                    className="text-4xl font-bold text-gray-800 mb-2"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    🔥 Trending Products
                </motion.h2>
                <p className="text-gray-500 text-lg">
                    Discover our most popular and trending mobile phones
                </p>
            </div>

            {/* Grid Section */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 md:px-16"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                }}
            >
                {phones.map((phone, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-5 flex flex-col justify-between"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex justify-center">
                            <img
                                src={phone.image}
                                alt={phone.name}
                                className="w-32 h-32 object-contain mb-4"
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">{phone.name}</h3>
                        <p className="text-gray-500 text-sm mb-2">{phone.about}</p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-xl font-bold text-indigo-600">${phone.price}</span>
                            <div className="flex items-center text-yellow-500">
                                <FaStar className="mr-1" /> {phone.rating}
                            </div>
                        </div>
                        <Link title="Click to Details" to={`/details/${phone.id}`}> <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
                            <FaShoppingCart /> Details
                        </button>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Call to Action Section */}
            <div className="text-center mt-16">
                <Link to='/fashion'>   <motion.button
                    className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-full shadow-lg"
                    whileHover={{ scale: 1.1 }}
                >
                    View All Products
                </motion.button>
                </Link>
            </div>
        </div>
    );
};

export default Tranding;
