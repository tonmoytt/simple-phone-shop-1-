import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewProduct = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    fetch("/Phone.json")
      .then((res) => res.json())
      .then((data) => {
        // Filter only category 'special'
        const specialProducts = data.filter((item) => item.category === "special");
        setNewProducts(specialProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-10 md:mt-20 max-w-7xl mx-auto p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Special Phones Collection
      </h1>

      {/* Featured Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Top Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newProducts.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all"
            >
              <Link title="Click to Details" to={`/details/${item.id}`}>
                <img
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

      {/* Latest Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Latest Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newProducts.slice(4).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all"
            >
             <Link title="Click to Details" to={`/details/${item.id}`}> <img
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

      {/* Highlight Section */}
      {newProducts.length > 0 && (
        <section className="bg-blue-50 p-6 rounded-xl text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Best Offer!</h2>
          <p className="text-gray-700 mb-4">
            Grab <strong>{newProducts[0].name}</strong> now at an exclusive price of{" "}
            <span className="text-blue-600 font-bold">${newProducts[0].price}</span>
          </p>
       <Link title="Click to Details" to={`/details/${newProducts[0].id}`}>
  <button className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700">
    Buy Now
  </button>
</Link>

        </section>
      )}
    </div>
  );
};

export default NewProduct;
