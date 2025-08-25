import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { billingInfo, totalAmount } = location.state || { billingInfo: {}, totalAmount: 0 };

  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      Swal.fire("Error", "Please select a payment method.", "error");
      return;
    }

    if (paymentMethod === "card") {
      if (!cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv) {
        Swal.fire("Error", "Please fill in all card details.", "error");
        return;
      }
      Swal.fire({
        icon: "success",
        title: "Payment Successful",
        text: `Paid $${totalAmount.toFixed(2)} with Card`,
        confirmButtonText: "Go to Dashboard",
      }).then(() => {
        navigate("/dashboard");
      });
    } else if (["bkash", "nagad", "rocket"].includes(paymentMethod)) {
      // Open payment provider in a new tab (simulate real flow)
      let url = "";
      switch (paymentMethod) {
        case "bkash":
          url = "https://www.bkash.com/";
          break;
        case "nagad":
          url = "https://www.nagad.com.bd/";
          break;
        case "rocket":
          url = "https://www.rocket.com.bd/";
          break;
        default:
          break;
      }
      // Open provider
      const win = window.open(url, "_blank");

      // Simulate payment completion after 3s (you can replace this with actual callback from backend)
      setTimeout(() => {
        if (win) win.close(); // close the simulated payment tab
        Swal.fire({
          icon: "success",
          title: `${paymentMethod.toUpperCase()} Payment Successful`,
          text: `Paid $${totalAmount.toFixed(2)} via ${paymentMethod}`,
          confirmButtonText: "Go to Dashboard",
        }).then(() => navigate("/dashboard"));
      }, 100000);
    } else if (paymentMethod === "paypal") {
      // Simulate PayPal payment
      Swal.fire({
        icon: "success",
        title: "PayPal Payment Successful",
        text: `Paid $${totalAmount.toFixed(2)} via PayPal`,
        confirmButtonText: "Go to Dashboard",
      }).then(() => navigate("/dashboard"));
    }
  };

  return (
    <div className="mt-14 md:mt-20 max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Payment Info</h2>

      {/* Billing Summary */}
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 space-y-2">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Billing Information</h3>
        <p><strong>Name:</strong> {billingInfo.name || "Not provided"}</p>
        <p><strong>Email:</strong> {billingInfo.email || "Not provided"}</p>
        <p><strong>Phone:</strong> {billingInfo.phone || "Not provided"}</p>
        <p><strong>Address:</strong> {billingInfo.address || "Not provided"}</p>
        <div className="mt-2 font-bold text-lg">
          Total Amount: <span className="text-blue-600">${totalAmount?.toFixed(2) || "0.00"}</span>
        </div>
      </div>

      {/* Payment Options */}
      <div className="bg-gray-50 rounded-xl shadow-md p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-4">Select Payment Method</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* bKash */}
          <button
            onClick={() => setPaymentMethod("bkash")}
            className={`flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-pink-50 ${
              paymentMethod === "bkash" ? "border-pink-500" : "border-gray-300"
            }`}
          >
            <img src="https://i.ibb.co.com/sv3KBw0H/bkash2.png" alt="bKash" className="w-8 h-8" />
            <span className="mt-2">bKash</span>
          </button>

          {/* Nagad */}
          <button
            onClick={() => setPaymentMethod("nagad")}
            className={`flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-orange-50 ${
              paymentMethod === "nagad" ? "border-orange-500" : "border-gray-300"
            }`}
          >
            <img src="https://i.ibb.co.com/sv3KBw0H/bkash2.png" alt="Nagad" className="w-8 h-8" />
            <span className="mt-2">Nagad</span>
          </button>

          {/* Rocket */}
          <button
            onClick={() => setPaymentMethod("rocket")}
            className={`flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-purple-50 ${
              paymentMethod === "rocket" ? "border-purple-500" : "border-gray-300"
            }`}
          >
            <img src="https://i.ibb.co.com/t1qT7Dz/Rocket-mobile-banking-logo-svg.png" alt="Rocket" className="w-8 h-8" />
            <span className="mt-2">Rocket</span>
          </button>

          {/* PayPal */}
          <button
            onClick={() => setPaymentMethod("paypal")}
            className={`flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-blue-50 ${
              paymentMethod === "paypal" ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <FaPaypal className="text-3xl text-blue-600" />
            <span className="mt-2">PayPal</span>
          </button>

          {/* Card */}
          <button
            onClick={() => setPaymentMethod("card")}
            className={`flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-green-50 ${
              paymentMethod === "card" ? "border-green-500" : "border-gray-300"
            }`}
          >
            <FaCcVisa className="text-3xl text-green-600" />
            <FaCcMastercard className="text-3xl text-red-600" />
            <span className="mt-2">Card</span>
          </button>
        </div>
      </div>

      {/* Card Payment Form */}
      {paymentMethod === "card" && (
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
          <h3 className="text-lg font-semibold mb-4">Enter Card Details</h3>
          <div className="space-y-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={handleCardInputChange}
              className="w-full border rounded-lg p-2"
              required
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={handleCardInputChange}
                className="w-1/2 border rounded-lg p-2"
                required
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={handleCardInputChange}
                className="w-1/2 border rounded-lg p-2"
                required
              />
            </div>
          </div>
        </div>
      )}

      <button
        onClick={handlePayment}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 text-sm sm:text-base"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
