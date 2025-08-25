import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactusPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We're here to help! Reach out to us through the form below or via social media.
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 py-12 px-6">
        <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition">
          <FaMapMarkerAlt className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Our Location</h3>
          <p className="text-gray-600">123 Main Street, Dhaka, Bangladesh</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition">
          <FaEnvelope className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Email Us</h3>
          <p className="text-gray-600">support@example.com</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition">
          <FaPhoneAlt className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2">Call Us</h3>
          <p className="text-gray-600">+880 1234-567890</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Send Us a Message</h2>
        <form className="grid md:grid-cols-2 gap-6">
          <input type="text" placeholder="Your Name" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500" />
          <input type="email" placeholder="Your Email" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="Subject" className="border border-gray-300 p-3 rounded-lg w-full md:col-span-2 focus:outline-none focus:border-blue-500" />
          <textarea placeholder="Your Message" rows="5" className="border border-gray-300 p-3 rounded-lg w-full md:col-span-2 focus:outline-none focus:border-blue-500"></textarea>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg md:col-span-2 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="max-w-6xl mx-auto mb-12 px-4">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.900279178333!2d90.39127937508741!3d23.7508797886776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd3cf28cc9%3A0x5c011cfdd4eb1b96!2sDhaka!5e0!3m2!1sen!2sbd!4v1690459579192!5m2!1sen!2sbd"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 pb-16">
        <a href="#" className="text-blue-600 text-3xl hover:text-blue-800 transition"><FaFacebookF /></a>
        <a href="#" className="text-pink-500 text-3xl hover:text-pink-700 transition"><FaInstagram /></a>
        <a href="#" className="text-green-500 text-3xl hover:text-green-700 transition"><FaWhatsapp /></a>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </div>
  );
};

export default ContactusPage;
