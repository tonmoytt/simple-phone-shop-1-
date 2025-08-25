import React from "react";

// Exact-match palette tweaked to mirror the provided banner
// Deep navy bg, bright cyan text, pink CTAs, yellow discount tag,
// purple speaker bar, geometric sprinkles.

const TagIcon = (props) => (
  <svg viewBox="0 0 80 80" {...props}>
    <path d="M10 30 L40 0 L78 38 L48 68 Q43 73 38 68 L10 40 Z" fill="#FFD24A" />
    <circle cx="50" cy="22" r="5" fill="#0B1732" />
    <path d="M30 45 Q42 38 56 46" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
  </svg>
);

const Monitor = (props) => (
  <svg viewBox="0 0 420 320" {...props}>
    <rect x="20" y="20" width="380" height="220" rx="16" fill="#ffffff" />
    <rect x="40" y="40" width="340" height="180" rx="10" fill="#54B3EC" />
    <rect x="160" y="250" width="100" height="12" rx="6" fill="#15223B" />
    <rect x="120" y="268" width="180" height="16" rx="8" fill="#0F1B33" />
    <rect x="180" y="284" width="60" height="10" rx="5" fill="#3A4D7A" />
  </svg>
);

const Mouse = (props) => (
  <svg viewBox="0 0 120 120" {...props}>
    <rect x="30" y="20" width="60" height="80" rx="30" fill="#ffffff" />
    <rect x="57" y="34" width="6" height="18" rx="3" fill="#C9D3EA" />
    <path d="M30 56 H90" stroke="#E6ECFA" strokeWidth="2" />
  </svg>
);

const Phone = (props) => (
  <svg viewBox="0 0 120 200" {...props}>
    <rect x="10" y="10" width="100" height="180" rx="18" fill="#30C3F2" stroke="#0D1730" strokeWidth="6" />
    <rect x="48" y="164" width="24" height="8" rx="4" fill="#0D1730" />
  </svg>
);

const Speaker = (props) => (
  <svg viewBox="0 0 320 140" {...props}>
    <rect x="10" y="30" width="300" height="80" rx="16" fill="#6B4CF6" stroke="#231F47" strokeWidth="6" />
    <circle cx="80" cy="70" r="26" fill="#231F47" />
    <circle cx="160" cy="70" r="26" fill="#231F47" />
    <circle cx="240" cy="70" r="26" fill="#231F47" />
  </svg>
);

const USB = (props) => (
  <svg viewBox="0 0 160 70" {...props}>
    <rect x="10" y="20" width="110" height="30" rx="8" fill="#784FEB" />
    <rect x="120" y="28" width="30" height="14" rx="2" fill="#ffffff" />
  </svg>
);

export default function Offerd() {
  return (
    <div className="w-full mt-12  bg-[#CFEFF8] rounded-b-2xl py-6 px-2 md:px-4">
      {/* stage shadow */}
      <div className="relative mx-auto max-w-[1180px] rounded-xl shadow-2xl overflow-hidden">
        {/* deep navy backdrop + blobby gradient like reference */}
        <div className="relative bg-[#081632]">
          <div className="pointer-events-none absolute -left-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#102B6A] opacity-60 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-24 h-[420px] w-[420px] rounded-full bg-[#071738] opacity-80 blur-3xl" />



          {/* hero content */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10 pb-10 pt-2 text-white">
            {/* left copy & cta */}
            <div className="relative z-10 pt-2 md:pt-6 pb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/10">@ELECTRONICSTORE</span>
              <h1 className="mt-4 leading-[0.95] text-4xl sm:text-5xl md:text-6xl font-black">
                <span className="block text-white">ONLINE</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2AD9FF] to-[#7AE7FF]">SHOPPING</span>
              </h1>
              <h2 className="mt-2 text-xl font-extrabold tracking-wide">ELECTRONIC STORE</h2>
              <p className="mt-3 max-w-md text-sm md:text-base text-white/85">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua erat volutpat.
              </p>
              <button className="mt-6 inline-flex items-center rounded-full bg-[#FF4D9A] px-6 py-3 text-sm font-semibold hover:opacity-90">
                SHOP NOW
              </button>

              {/* socials (two pills bottom-left like the reference) */}
              <div className="hidden md:block">
                <div className=" mt-6 flex items-center gap-3 text-xs md:text-sm">
                  <span className="px-3 py-1 rounded-full bg-white/10">@ELECTRONICSTORE</span>
                  <span className="px-3 py-1 rounded-full bg-white/10">@ELECTRONICSTORE</span>
                </div>
              </div>

              {/* tiny dots */}
              <div className="hidden md:block">
                <div className=" absolute -left-2 bottom-2 grid grid-cols-4 gap-1 opacity-80">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="h-1 w-1 bg-white rounded" />
                  ))}
                </div>
              </div>
            </div>

            {/* right illustration */}
            <div className="hidden md:block relative min-h-[380px] md:min-h-[460px]">
              {/* yellow discount tag */}
              <div className="absolute -right-2 top-1 rotate-12">
                <TagIcon className="h-16 w-16 md:h-20 md:w-20" />
              </div>

              {/* main monitor */}
              <div className="absolute right-0 left-0 top-6 mx-auto w-[88%] md:w-[92%] drop-shadow-[0_8px_0_#0B1732]">
                <Monitor className="w-full" />
              </div>

              {/* mouse */}
              <div className="absolute left-8 md:left-10 bottom-28 rotate-12">
                <Mouse className="h-16 w-16 md:h-20 md:w-20" />
              </div>
              {/* phone */}
              <div className="absolute right-3 bottom-28">
                <Phone className="h-28 w-20 md:h-36 md:w-24" />
              </div>
              {/* speaker bar */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-12">
                <Speaker className="w-[86%]" />
              </div>
              {/* usb */}
              <div className="absolute right-10 bottom-6">
                <USB className="w-28" />
              </div>

              {/* sprinkle geometry */}
              <span className="absolute left-4 top-6 h-2 w-2 bg-white rounded" />
              <span className="absolute right-6 top-10 h-2 w-2 bg-white rounded" />
              <span className="absolute right-12 bottom-8 h-2 w-2 bg-white rounded" />
              <span className="absolute left-10 bottom-10 h-1.5 w-1.5 bg-[#2AD9FF] rounded" />
              <span className="absolute left-1/2 top-24 h-1.5 w-1.5 bg-[#FF4D9A] rounded" />
              <span className="absolute right-1/3 top-28 h-1.5 w-1.5 bg-[#FFD24A] rounded" />
              <div className="absolute right-6 top-1/3 grid grid-cols-3 gap-2 opacity-80">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className="h-1 w-1 bg-white rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
