import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link, useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const { cartItems, Showdashboard, Handledeleted, Handledeleteditems } = useOutletContext();

  const [quantities, setQuantities] = useState({});
  const [wishlistQuantities, setWishlistQuantities] = useState({});
  const [purchasedItems, setPurchasedItems] = useState({});

  useEffect(() => {
    const initialCart = {};
    const initialWishlist = {};
    cartItems.forEach((item) => (initialCart[item.id] = 1));
    Showdashboard.forEach((item) => (initialWishlist[item.id] = 1));
    setQuantities(initialCart);
    setWishlistQuantities(initialWishlist);
  }, [cartItems, Showdashboard]);

  // Cart Quantity Controls
  const handleIncrease = (id) => setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  const handleDecrease = (id) =>
    setQuantities((prev) => ({ ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 1 }));

  // Wishlist Quantity Controls
  const handleWishlistIncrease = (id) => setWishlistQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  const handleWishlistDecrease = (id) =>
    setWishlistQuantities((prev) => ({ ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 1 }));

  // Buy toggle
  const handleBuyToggle = (id, type) => {
    setPurchasedItems((prev) => {
      const newState = { ...prev };
      if (newState[id]) delete newState[id];
      else newState[id] = { type };
      return newState;
    });
  };

  const grandTotal = Object.keys(purchasedItems).reduce((acc, id) => {
    const purchase = purchasedItems[id];
    if (purchase.type === "cart") {
      const item = cartItems.find((i) => i.id === parseInt(id));
      if (item) acc += item.price * (quantities[id] || 1);
    } else if (purchase.type === "wishlist") {
      const item = Showdashboard.find((i) => i.id === parseInt(id));
      if (item) acc += item.price * (wishlistQuantities[id] || 1);
    }
    return acc;
  }, 0);

  const selectedItems = Object.keys(purchasedItems).map((id) => {
    const type = purchasedItems[id].type;
    let item;
    let qty;
    if (type === "cart") {
      item = cartItems.find((i) => i.id === parseInt(id));
      qty = quantities[id];
    } else {
      item = Showdashboard.find((i) => i.id === parseInt(id));
      qty = wishlistQuantities[id];
    }
    return { ...item, quantity: qty };
  });

  return (
    <div className="mt-5 md:mt-20 p-4 sm:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Cart Section */}
        <div>
          <h1 className="text-3xl font-bold mb-6 mt-10 text-gray-800">🛒 Your Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">No items in your cart yet.</p>
          ) : (
            <ul className="space-y-6">
              {cartItems.map((item) => {
                const qty = quantities[item.id] || 1;
                const totalPrice = (item.price * qty).toFixed(2);
                const isBought = purchasedItems[item.id]?.type === "cart";
                return (
                  <li key={item.id} className="border rounded-xl p-5 shadow-md hover:shadow-lg bg-white flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <img src={item.image} alt={item.name} className="w-full sm:w-28 h-28 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-gray-500">Price: ${item.price}</p>
                      <p className="text-lg font-bold mt-1 text-green-600">Total: ${totalPrice}</p>

                      <div className="flex items-center justify-center gap-3 mt-4  ">
                        <button className="btn btn-outline btn-sm" onClick={() => handleDecrease(item.id)}>
                          <FaMinus />
                        </button>
                        <span className="text-lg font-bold">{qty}</span>
                        <button className="btn btn-outline btn-sm" onClick={() => handleIncrease(item.id)}>
                          <FaPlus />
                        </button>
                      </div>

                      <button
                        className={`mt-4 btn ${isBought ? "btn-success" : "btn-accent"} px-6`}
                        onClick={() => handleBuyToggle(item.id, "cart")}
                      >
                        {isBought ? "Remove" : "Buy Confirm"}
                      </button>
                    </div>

                    <div onClick={() => Handledeleteditems(item.id)} className="tooltip tooltip-left cursor-pointer ml-auto sm:ml-4" data-tip="Delete Item">
                      <MdClose className="text-red-600 text-2xl hover:scale-110" />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Wishlist Section */}
        <div>
          <h1 className="text-3xl font-bold mb-6 mt-10 text-gray-800">❤️ Wishlist</h1>
          {Showdashboard.length === 0 ? (
            <p className="text-gray-600">No items in your Wishlist yet.</p>
          ) : (
            <ul className="space-y-6">
              {Showdashboard.map((item) => {
                const qty = wishlistQuantities[item.id] || 1;
                const totalPrice = (item.price * qty).toFixed(2);
                const isBought = purchasedItems[item.id]?.type === "wishlist";
                return (
                  <li key={item.id} className="border rounded-xl p-5 shadow-md hover:shadow-lg bg-white flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <img src={item.image} alt={item.name} className="w-full sm:w-28 h-28 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-gray-500">Price: ${item.price}</p>
                      <p className="text-lg font-bold mt-1 text-green-600">Total: ${totalPrice}</p>

                      <div className="flex items-center justify-center gap-3 mt-4 ">
                        <button className="btn btn-outline btn-sm" onClick={() => handleWishlistDecrease(item.id)}>
                          <FaMinus />
                        </button>
                        <span className="text-lg font-bold">{qty}</span>
                        <button className="btn btn-outline btn-sm" onClick={() => handleWishlistIncrease(item.id)}>
                          <FaPlus />
                        </button>
                      </div>

                      <button
                        className={`mt-4 btn ${isBought ? "btn-success" : "btn-accent"} px-6`}
                        onClick={() => handleBuyToggle(item.id, "wishlist")}
                      >
                        {isBought ? "Remove" : "Buy Confirm"}
                      </button>
                    </div>

                    <div onClick={() => Handledeleted(item.id)} className="tooltip tooltip-left cursor-pointer ml-auto sm:ml-4" data-tip="Remove from Wishlist">
                      <MdClose className="text-red-600 text-2xl hover:scale-110" />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

      </div>

      {/* Grand Total */}
      <div className="mt-8 text-center border-t pt-4">
        <h2 className="text-2xl font-bold text-gray-800">Grand Total: ${grandTotal.toFixed(2)}</h2>
        <Link to="/CheckoutPage" state={{ items: selectedItems }}>
          <button className="btn btn-accent mt-4 px-8 py-2 text-lg" disabled={selectedItems.length === 0}>
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
