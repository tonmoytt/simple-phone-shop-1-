import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { FaWhatsapp } from 'react-icons/fa';

const Root = () => {
  // ---------------------- Cart State ----------------------
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (item) => {
    const isAlreadyAdded = cartItems.some(cart => cart.id === item.id);

    if (isAlreadyAdded) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Already added to cart!',
      });
      return;
    }

    setCartItems(prev => [...prev, item]);
    setCartCount(prev => prev + 1);
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${item.name} added to cart!`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const Handledeleteditems = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to remove this item from the cart?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = cartItems.filter(item => item.id !== id);
        setCartItems(updated);
        setCartCount(prev => prev - 1);
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Item removed from cart!',
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  // ---------------------- Wishlist State ----------------------
  const [Showdashboard, setshowdashboard] = useState([]);
  const [Wishlist, setwithlist] = useState(0);

  const Handlewishcount = (item) => {
    const isWishlisted = Showdashboard.some(wish => wish.id === item.id);

    if (isWishlisted) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Already in wishlist!',
      });
      return;
    }

    setshowdashboard(prev => [...prev, item]);
    setwithlist(prev => prev + 1);
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${item.name} added to wishlist!`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const Handledeleted = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to remove this item from the wishlist?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = Showdashboard.filter(item => item.id !== id);
        setshowdashboard(updated);
        setwithlist(prev => prev - 1);
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Item removed from wishlist!',
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="bg-gray-200">
      <ScrollToTop />
      <Navbar cartCount={cartCount} Wishlist={Wishlist} />

      <Outlet
        context={{
          handleAddToCart,
          cartItems,
          Handlewishcount,
          Showdashboard,
          Handledeleted,
          Handledeleteditems,
        }}
      />
      <a
              href="https://wa.me/01784972403"
              target="_blank"
              rel="noopener noreferrer"
              title='Live chat'
              className="fixed z-30 bottom-3 md:bottom-5 right-2 bg-green-500 md:p-3 rounded-full shadow-lg hover:bg-green-600 transition "
            >
              <FaWhatsapp className="text-white text-3xl md:text-2xl" />
            </a>

      <Footer />
    </div>
  );
};

export default Root;
