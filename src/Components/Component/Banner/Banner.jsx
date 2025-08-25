import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import image1 from './../../../assets/Images/audio-7276511_640.jpg';
import image2 from './../../../assets/Images/bg14.png';
import image3 from './../../../assets/Images/download.jpg';
import { Link } from 'react-router-dom';

const slidesData = [
  {
    image: image1,
    title: "Upgrade your Tech Accessorize with Gadget Heaven",
    description: "Discover latest gadgets & accessories for your daily needs.",
    buttonText: "Shop Now",
  },
  {
    image: image2,
    title: "Cutting-edge Smartphones & Devices",
    description: "Explore the newest smartphones and tech innovations.",
    buttonText: "Buy Now",
  },
  {
    image: image3,
    title: "Premium Quality Gadget Accessories",
    description: "Find the best accessories to enhance your tech experience.",
    buttonText: "Explore",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute  "></div>

              {/* Text Info */}
              <div className="relative text-center text-white px-4 sm:px-6 md:px-0 max-w-2xl">
                <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold pb-3 md:pb-4 leading-snug">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg pb-3 md:pb-4">
                  {slide.description}
                </p>
                <Link to='/fashion'>  <button className="bg-indigo-600 hover:bg-indigo-700 px-4 sm:px-5 md:px-6 py-2 rounded-full text-xs sm:text-sm md:text-lg transition">
                  {slide.buttonText}
                </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
