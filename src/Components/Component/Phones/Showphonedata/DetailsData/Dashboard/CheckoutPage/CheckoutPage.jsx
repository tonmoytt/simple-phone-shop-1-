import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cartItems = location.state?.items || [];
  const [items, setItems] = useState(cartItems);

  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleQuantityChange = (id, type) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handleProceedToPayment = () => {
    if (!billingInfo.name || !billingInfo.email || !billingInfo.phone || !billingInfo.address) {
      alert("Please fill in all billing details!");
      return;
    }
    navigate("/payment", { state: { billingInfo, totalAmount: total } });
  };

  return (
    <div className="mt-14 md:mt-20 max-w-7xl mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-xl shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Your Items</h2>
        {items.length === 0 ? (
          <p className="text-gray-500">No items selected.</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{item.name}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">${item.price} each</p>
                  </div>
                </div>

                {/* Quantity & Price */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:gap-6 w-full sm:w-auto">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleQuantityChange(item.id, "decrease")}
                      className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, "increase")}
                      className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold text-sm sm:text-base mt-2 sm:mt-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Summary + Billing */}
      <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-lg sm:text-xl font-bold mb-2">Order Summary</h2>
        <div className="flex justify-between text-sm sm:text-base">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm sm:text-base">
          <span>Tax (5%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-base sm:text-lg">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        {/* Billing Info */}
        <h3 className="text-base sm:text-lg font-semibold mt-4">Billing Details</h3>
        <form className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={billingInfo.name}
            onChange={handleBillingChange}
            className="w-full border rounded-lg p-2 text-sm sm:text-base"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={billingInfo.email}
            onChange={handleBillingChange}
            className="w-full border rounded-lg p-2 text-sm sm:text-base"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={billingInfo.phone}
            onChange={handleBillingChange}
            className="w-full border rounded-lg p-2 text-sm sm:text-base"
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={billingInfo.address}
            onChange={handleBillingChange}
            className="w-full border rounded-lg p-2 text-sm sm:text-base"
            rows="3"
            required
          />
        </form>

        <button
          onClick={handleProceedToPayment}
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 text-sm sm:text-base"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
