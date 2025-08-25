import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 pt-16 overflow-hidden"
    >
      {/* Glow background animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#9333ea,transparent_70%)] opacity-20 animate-pulse"></div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-4 tracking-wide">
            Gadget<span className="text-purple-400">Heaven</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            🚀 Since 1992, delivering innovative tech solutions, futuristic
            gadgets & accessories you can rely on.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
              { icon: <FaTwitter />, color: "hover:bg-sky-400" },
              { icon: <FaYoutube />, color: "hover:bg-red-600" },
              { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" },
              { icon: <FaInstagram />, color: "hover:bg-pink-500" },
            ].map((s, i) => (
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                key={i}
                href="#"
                className={`p-3 rounded-full bg-white/10 backdrop-blur-md hover:shadow-lg hover:shadow-${s.color} transition-all duration-300 ${s.color}`}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:mt-14">
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>
          <ul className="space-x-2 text-gray-400 text-sm flex ">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Shop", path: "/shop" },
              { name: "Contact", path: "/contact" },
              { name: "Blog", path: "/blog" },
              { name: "FAQ", path: "/faq" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="hover:text-purple-400 hover:underline hover:translate-x-1 inline-block transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Newsletter</h3>
          <p className="text-gray-400 mb-4 text-sm">
            Get latest updates & offers right in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl w-full bg-white/10 text-gray-100 border-1 border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-md placeholder-gray-400 text-sm"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition"
            >
              Subscribe
            </motion.button>
          </form>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Contact Us</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-400" /> 123 Tech Avenue,
              Silicon Valley
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-400" /> +1 234 567 890
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400" /> support@gadgetheaven.com
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm relative z-10">
        <p>© 2025 GadgetHeaven. All rights reserved.</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <img
            src="https://www.svgrepo.com/show/303279/visa-logo.svg"
            alt="Visa"
            className="h-6"
          />
          <img
            src="https://www.svgrepo.com/show/303263/mastercard-logo.svg"
            alt="MasterCard"
            className="h-6"
          />
          <img
            src="https://www.svgrepo.com/show/303275/paypal.svg"
            alt="PayPal"
            className="h-6"
          />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
