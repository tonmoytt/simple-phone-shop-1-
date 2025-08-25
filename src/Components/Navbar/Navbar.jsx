import React, { useContext, useState } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaTshirt,
  FaMobileAlt,
  FaTags,
  FaStar,
  FaHome,
  FaList,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/Images/modern-gradient-gadget-store-logo-tech-brand_8169-752 (1).avif";
import { Authmainprovider } from "../Authincation/AuthProvider/Authincation";
import Swal from "sweetalert2";
import auth from "../Authincation/AuthProvider/Firebase/Firebase.init";

const Navbar = ({ cartCount = 0, Wishlist = 0 }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const { user, SingOutLog } = useContext(Authmainprovider)
  const navigate = useNavigate()

  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const handleLogout = (onSuccess) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        SingOutLog(auth)
          .then(() => {
            Swal.fire("Success!", "Successfully logged out!", "success");

            // Safe call onSuccess only if it's a function
            if (typeof onSuccess === "function") {
              onSuccess();
            }

            navigate("/");
          })
          .catch((error) => {
            console.error(error);
            Swal.fire("Error!", "Failed to log out!", "error");
          });
      }
    });
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-colors duration-500 ${isHome
        ? "bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-500 text-white"
        : "bg-white text-gray-900"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-1 md:space-x-3 font-bold text-2xl">
          <img
            src={logo}
            alt="logo"
            className="w-8 md:w-12 h-8 md:h-12 rounded-full shadow-lg"
          />
          <span
            className={`tracking-wide text-base md:text-lg font-extrabold ${isHome ? "text-white" : "text-indigo-700"
              }`}
          >
            GadgetHeaven
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4 font-semibold items-center text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative px-2 py-1 transition-all duration-300 text-[17px] ${isActive
                ? "text-indigo-600 font-bold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-indigo-600"
                : "hover:text-black"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/electronics"
            className="flex items-center gap-1 text-[17px] hover:text-black transition-all"
          >
            <FaMobileAlt className="md:w-3 lg:w-4 md:h-3 lg:h-4" /> Electronics
          </NavLink>

          <NavLink
            to="/fashion"
            className="flex items-center gap-1 text-[16px] hover:text-black transition-all"
          >
            <FaTshirt className="md:w-3 lg:w-4 md:h-3 lg:h-4" /> Fashion
          </NavLink>

          <NavLink
            to="/offers"
            className="flex items-center gap-1 text-[16px] hover:text-black transition-all"
          >
            <FaTags className="md:w-3 lg:w-4 md:h-3 lg:h-4" /> Offers
          </NavLink>

          <NavLink
            to="/deals"
            className="flex items-center gap-1 text-[16px] hover:text-black transition-all"
          >
            <FaStar className="md:w-3 lg:w-4 md:h-3 lg:h-4" /> Deals
          </NavLink>

          {/* Desktop Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center gap-1 text-[16px] hover:text-black transition-all"
            >
              Categories <FaChevronDown className="ml-1 text-sm" />
            </button>
            <AnimatePresence>
              {openDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-7 w-60  text-white bg-gray-800 shadow-2xl shadow-cyan-300 rounded-xl overflow-hidden z-50 space-y-3"
                >
                  <Link
                    to="/newproducts"
                    className="flex items-center gap-2 text-base px-4 py-2 hover:bg-indigo-100"
                  >
                    <FaTshirt /> New Products
                  </Link>
                  <Link
                    to="/overall"
                    className="flex items-center gap-2 px-4 py-2 text-base hover:bg-indigo-100"
                  >
                    <FaStar /> Overall
                  </Link>
                  <Link
                    to="/faq"
                    className="flex items-center gap-2 px-4 py-2 text-base hover:bg-indigo-100"
                  >
                    <FaInfoCircle /> FAQ
                  </Link>
                  <Link
                    to="/map"
                    className="flex items-center gap-2 px-4 py-2 text-base hover:bg-indigo-100"
                  >
                    <FaMapMarkerAlt /> Shop Map
                  </Link>
                  <Link
                    to="/support"
                    className="flex items-center gap-2 px-4 py-2 text-base hover:bg-indigo-100"
                  >
                    <FaPhone /> Support
                  </Link>
                  <Link
                    to="/trending"
                    className="flex items-center gap-2 px-4 py-2 text-base hover:bg-indigo-100"
                  >
                    <FaStar /> Trending
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-4 py-2 text-base hover:bg-indigo-100"
                  >
                    <FaPhone /> Contact
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Icons + Mobile Hamburger */}
        <div className="flex items-center space-x- md:space-x-6">
          {/* Cart */}
          <Link to='/dashboard'> <div className="relative">
            <div className="bg-white w-6 md:w-8 h-6 md:h-8 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
              <FaShoppingCart className="text-indigo-600 text-base md:text-xl" />
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
          </Link>

          {/* Wishlist */}
          <Link to='/dashboard'>
            <div className="relative hidden md:flex">
              <div className="bg-white w-6 md:w-8 h-6 md:h-8 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                <FaHeart className="text-pink-500 text-xl" />
              </div>
              {Wishlist > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {Wishlist}
                </span>
              )}
            </div>
          </Link>
          {/* Registration Button */}

          <div className="relative hidden md:flex">
            <div
              className="
        group relative flex items-center justify-center
        px-5 md:px-6 py-2 md:py-3
        rounded-full
        bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
        text-white font-semibold text-sm md:text-base
        shadow-lg
        cursor-pointer
        overflow-hidden
        transition-all duration-300
        hover:scale-105 hover:shadow-2xl
      "
            >
              {/* Animated Border */}
              <span
                className="
          absolute inset-0 rounded-full border-2 border-white border-opacity-20
          transition-all duration-500 group-hover:border-opacity-100
        "
              ></span>

              {/* Hover Glow */}
              <span
                className="
          absolute inset-0 rounded-full bg-white/10 opacity-0
          group-hover:opacity-30 transition-all duration-300
        "
              ></span>

              {/* Button Text */}

              {
                user ? <button onClick={handleLogout}><span className="relative z-10 cursor-pointer">Signout</span> </button>
                  :
                  <Link to='/signup'> <span className="relative z-10">Register</span> </Link>
              }



            </div>
          </div>




          {/* Hamburger */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-xl"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-4/5 h-full bg-white text-gray-900 shadow-2xl z-50 flex flex-col"
          >
            {/* Top Section with Cart + Wishlist + Close */}
            <div className="flex items-center justify-between px-5  py-4 border-b">
              <h2 className="text-xl font-bold text-indigo-600">Menu</h2>
              <div className="flex items-center gap-4">
                {/* Cart */}
                <Link to='/dashboard'  onClick={() => setMobileMenu(false)}> <div className="relative cursor-pointer">
                  <FaShoppingCart className="text-indigo-600 text-xl" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                      {cartCount}
                    </span>
                  )}
                </div>
                </Link>

                <Link to='/dashboard'   onClick={() => setMobileMenu(false)}>      {/* Wishlist */}
                  <div className="relative cursor-pointer">
                    <FaHeart className="text-pink-500 text-xl" />
                    {Wishlist > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                        {Wishlist}
                      </span>
                    )}
                  </div>
                </Link>
                {/* Close Button */}
                <button
                  onClick={() => setMobileMenu(false)}
                  className="text-3xl text-gray-700 hover:text-red-500 transition"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col px-3 py-4 space-y-5 text-md font-medium">
              <NavLink
                to="/"
                onClick={() => setMobileMenu(false)}
                className="flex items-center  gap-2 py-2 px-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-600 transition"
              >
                <FaHome className="text-indigo-500" /> Home
              </NavLink>

              <NavLink
                to="/electronics"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-2 py-2 px-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-600 transition"
              >
                <FaMobileAlt className="text-purple-500" /> Electronics
              </NavLink>

              <NavLink
                to="/fashion"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-2 py-2 px-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-600 transition"
              >
                <FaTshirt className="text-pink-500" /> Fashion
              </NavLink>

              <NavLink
                to="/offers"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-2 py-2 px-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-600 transition"
              >
                <FaTags className="text-green-500" /> Offers
              </NavLink>

              <NavLink
                to="/deals"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-2 py-2 px-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-600 transition"
              >
                <FaStar className="text-yellow-500" /> Deals
              </NavLink>





              {/* Mobile Dropdown */}
              <div className="mt-2">
                <button
                  onClick={() => setMobileDropdown(!mobileDropdown)}
                  className="flex items-center gap-4 w-full py-2 px-3 rounded-lg hover:bg-indigo-100 hover:text-indigo-600 transition"
                >
                  <FaList className="text-indigo-500" /> Categories{" "}
                  <FaChevronDown className="ml-auto" />
                </button>
                {mobileDropdown && (
                  <div className="ml-6 mt-3 flex flex-col space-y-4">
                    <Link
                      to="/newproducts"
                      onClick={() => setMobileMenu(false)}
                      className="flex font-normal items-center gap-2 text-sm hover:text-indigo-600"
                    >
                      <FaTshirt className="w-3 h-3 text-gray-600" /> New Products
                    </Link>
                    <Link
                      to="/overall"
                      onClick={() => setMobileMenu(false)}
                      className="flex font-normal items-center gap-2 text-sm  hover:text-indigo-600"
                    >
                      <FaStar className="w-3 h-3 text-gray-600" /> Overall
                    </Link>
                    <Link
                      to="/faq"
                      onClick={() => setMobileMenu(false)}
                      className="flex font-normal items-center gap-2 text-sm  hover:text-indigo-600"
                    >
                      <FaInfoCircle className="w-3 h-3 text-gray-600" /> FAQ
                    </Link>
                    <Link
                      to="/map"
                      onClick={() => setMobileMenu(false)}
                      className="flex font-normal items-center gap-2 text-sm  hover:text-indigo-600"
                    >
                      <FaMapMarkerAlt className="w-3 h-3 text-gray-600" /> Shop Map
                    </Link>
                    <Link
                      to="/support"
                      onClick={() => setMobileMenu(false)}
                      className="flex font-normal items-center gap-2 text-sm  hover:text-indigo-600"
                    >
                      <FaPhone className="w-[11px] h-3 text-gray-600" /> Support
                    </Link>
                    <Link
                      to="/trending"
                      onClick={() => setMobileMenu(false)}
                      className="flex font-normal items-center gap-2 text-sm  hover:text-indigo-600"
                    >
                      <FaStar className="w-3 h-3 text-gray-600" /> Trending
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setMobileMenu(false)}
                      className="flex font-normal items-center gap-2 text-sm  hover:text-indigo-600"
                    >
                      <FaPhone className="w-[11px] h-3 text-gray-600" /> Contact
                    </Link>
                  </div>
                )}
              </div>
              {/* signup */}
              <NavLink

                onClick={() => setMobileMenu(false)}
                className="flex justify-center w-full"
              >
                <div
                  className="
      group relative flex items-center justify-center
      w-full px-5 py-2 rounded-full
      bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
      text-white font-semibold text-sm
      shadow-md
      cursor-pointer
      overflow-hidden
      transition-all duration-300
      hover:scale-105 hover:shadow-xl
    "
                >
                  {/* Animated Border */}
                  <span
                    className="
        absolute inset-0 rounded-full border-2 border-white border-opacity-20
        transition-all duration-500 group-hover:border-opacity-100
      "
                  ></span>

                  {/* Hover Glow */}
                  <span
                    className="
        absolute inset-0 rounded-full bg-white/10 opacity-0
        group-hover:opacity-30 transition-all duration-300
      "
                  ></span>

                  {/* Button Text */}
                  {/* Button Text */}

                  {
                    user ? <button onClick={handleLogout}><span className="relative z-10 cursor-pointer">Signout</span> </button>
                      :
                      <Link to='/signup'> <span className="relative z-10">Register</span> </Link>
                  }

                </div>
              </NavLink>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
};

export default Navbar;