import React from "react";
import { FaEnvelope, FaPhoneAlt, FaComments } from "react-icons/fa";

const SupportPages = () => {
  return (
    <div className="mt-10 md:mt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Customer Support</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Need help? We're here for you 24/7. Reach out via any method below or
          fill out the support form.
        </p>
      </section>

      {/* Contact Options */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <FaEnvelope className="text-indigo-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Email Us</h3>
          <p className="text-gray-600">support@yourshop.com</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <FaPhoneAlt className="text-indigo-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Call Us</h3>
          <p className="text-gray-600">+880 1234 567890</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <FaComments className="text-indigo-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Live Chat</h3>
          <p className="text-gray-600">Chat with us anytime</p>
        </div>
      </section>

      {/* Support Form */}
      <section className="bg-white max-w-4xl mx-auto p-8 rounded-xl shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Send us a message
        </h2>
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default SupportPages;
