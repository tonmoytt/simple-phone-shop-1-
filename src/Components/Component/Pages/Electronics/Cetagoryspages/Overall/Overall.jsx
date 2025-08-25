import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Overall = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    fetch("/Phone.json")
      .then((res) => res.json())
      .then((data) => {
        const specialProducts = data.filter((item) => item.categoryMore === "Offered");
        setNewProducts(specialProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen mt-20 bg-gray-50">
     

      {/* Hero Banner */}
      <section className="bg-blue-600 text-white py-12 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Discover Special Phones</h2>
        <p className="text-base sm:text-lg mb-6">Top quality smartphones at the best prices. Explore now!</p>
        <a
          href="#top-picks"
          className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg hover:bg-gray-100"
        >
          Shop Now
        </a>
      </section>

      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Top Picks */}
        <section id="top-picks" className="my-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Our offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newProducts.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all"
              >
             <Link title="Click to Details" to={`/details/${item.id}`}>    <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.model}</p>
                <p className="text-blue-600 font-bold">${item.price}</p>
                 </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Arrivals */}
        <section id="latest-arrivals" className="my-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Latest Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newProducts.slice(4).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.model}</p>
                <p className="text-blue-600 font-bold">${item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Best Offer Highlight */}
        {newProducts.length > 0 && (
          <section
            id="best-offer"
            className="bg-blue-50 p-6 rounded-xl text-center my-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Best Offer!</h2>
            <p className="text-gray-700 mb-4">
              Grab <strong>{newProducts[0].name}</strong> now at an exclusive price of{" "}
              <span className="text-blue-600 font-bold">${newProducts[0].price}</span>
            </p>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700">
              Buy Now
            </button>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-10">
        <div className="max-w-7xl mx-auto p-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600">&copy; 2025 GadgetStore. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-600">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Terms</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Overall;