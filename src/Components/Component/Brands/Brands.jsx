import React from "react";
import Marquee from "react-fast-marquee";

// Brand logos
import apple from "../../../assets/Logo/3378807.png";
import samsung from "../../../assets/Logo/samsung.svg";
import xiaomi from "../../../assets/Logo/Xiaomi_logo_(2021-).svg.png";
import realme from "../../../assets/Logo/realme-logo-png_seeklogo-394939.png";
import oppo from "../../../assets/Logo/oppo-logo_brandlogos.net_x21dk.png";
import vivo from "../../../assets/Logo/vivo-communication-technology-logo-png_seeklogo-527673.png";
import dell from "../../../assets/Logo/Dell_Logo.svg.png";
import hp from "../../../assets/Logo/hewlett-packard-logo-png-transparent.png";
import asus from "../../../assets/Logo/asus.png";
import lenovo from "../../../assets/Logo/realme-logo-png_seeklogo-394939.png";
import acer from "../../../assets/Logo/acer.webp";
import bose from "../../../assets/Logo/bose.svg";
import jbl from "../../../assets/Logo/jbl.png";
import sony from "../../../assets/Logo/sony.png";

// Brand promo images
import promo1 from "../../../assets/Logo/best-laptop-brands.jpg";
import promo2 from "../../../assets/Logo/Top-10-Smartphones-Blog-Images-Vivo.png";

const brandList = [
  { name: "Apple", logo: apple },
  { name: "Samsung", logo: samsung },
  { name: "Xiaomi", logo: xiaomi },
  { name: "Realme", logo: realme },
  { name: "Oppo", logo: oppo },
  { name: "Vivo", logo: vivo },
  { name: "Dell", logo: dell },
  { name: "HP", logo: hp },
  { name: "Asus", logo: asus },
  { name: "Lenovo", logo: lenovo },
  { name: "Acer", logo: acer },
  { name: "Bose", logo: bose },
  { name: "JBL", logo: jbl },
  { name: "Sony", logo: sony },
];

const Brands = () => {
  return (
    <div className="mt-12 space-y-12 space-x-4">
      {/* Marquee Logos */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-6">Our Top Brands</h2>
        <Marquee pauseOnHover={true} speed={60} gradient={false}>
          {brandList.map((brand, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center mx-4 sm:mx-6 md:mx-8"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 sm:h-16 md:h-20 w-auto object-contain"
              />
              {/* <p className="text-xs sm:text-sm md:text-base font-medium mt-2 text-center">
                {brand.name}
              </p> */}
            </div>
          ))}
        </Marquee>
      </div>

      {/* Promo Images */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center px-4 md:px-6">
        <img
          src={promo1}
          alt="Brand promo 1"
          className="w-full md:w-1/2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <img
          src={promo2}
          alt="Brand promo 2"
          className="w-full md:w-1/2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      
    </div>
  );
};

export default Brands;
