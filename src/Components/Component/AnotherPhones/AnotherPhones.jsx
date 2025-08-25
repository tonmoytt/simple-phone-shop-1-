import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

const AnotherPhones = () => {
  const [phones, setPhones] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage] = useState(4); // এক পেজে 4 ফোন দেখাবে

      const { handleAddToCart } = useOutletContext();    //context 

  useEffect(() => {
    fetch("/Phone.json")
      .then((res) => res.json())
      .then((data) => setPhones(data))
      .catch((err) => console.error(err));
  }, []);

  // Special category phones
  const specialPhones = phones.filter((phone) => phone.category === "special");

  // Pagination logic
  const indexOfLastPhone = currentPage * phonesPerPage;
  const indexOfFirstPhone = indexOfLastPhone - phonesPerPage;
  const currentPhones = phones
    .filter((phone) => phone.category !== "special")
    .slice(indexOfFirstPhone, indexOfLastPhone);

  const totalPages = Math.ceil(
    phones.filter((phone) => phone.category !== "special").length /
    phonesPerPage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 space-y-12">
      {/* Special Section */}
      {specialPhones.length > 0 && (
        <div>
          <h2 className="text-3xl font-extrabold mb-6 text-purple-600">
            🌟 Special For You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {specialPhones.map((phone) => (
              <div
                key={phone.id}
                className="bg-gradient-to-b from-purple-50 to-white rounded-2xl shadow-xl p-5 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={phone.image}
                  alt={phone.name}
                  className="w-52 md:w-36 h-36 object-contain mb-4"
                />
                <h3 className="font-bold text-lg text-gray-800">{phone.name}</h3>
                <p className="text-purple-500 font-bold text-xl mt-2">
                  ${phone.price}
                </p>
                <Link to={`/details/${phone.id}`}> <button className="mt-4 px-6 py-2 cursor-pointer bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition">
                  Buy Now
                </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Phones Pagination Section */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 ">
          📱 Make Purchase
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {currentPhones.map((phone) => (
            <div
              key={phone.id}
              className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={phone.image}
                alt={phone.name}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="font-semibold text-gray-700">{phone.name}</h3>
              <p className="text-purple-500 font-bold text-lg mt-2">
                ${phone.price}
              </p>
              <button  onClick={() => {
                                handleAddToCart(phone);
                                
                            }} className="mt-3 px-5 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:from-pink-500 hover:to-purple-400 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-8 gap-3">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-5 py-2 rounded-lg font-medium ${currentPage === i + 1
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnotherPhones;
