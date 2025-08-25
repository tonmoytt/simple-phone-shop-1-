// SectionTitle.jsx
import React from "react";
import "./style.css";

const SectionTitle = ({ text = "Pick Your Dream device" }) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 my-6">
      {/* floating shapes (responsive safe) */}
      <span className="pointer-events-none absolute left-2 top-2 h-5 w-5 sm:h-7 sm:w-7 lg:h-9 lg:w-9 rounded-full blur-lg bg-gradient-to-tr from-fuchsia-500/30 to-cyan-500/30 animate-pulse"></span>
      <span className="pointer-events-none absolute right-3 bottom-3 h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 rounded-full blur-lg bg-gradient-to-tr from-amber-500/30 to-pink-500/30 animate-[ping_4s_ease-in-out_infinite]"></span>

      {/* tiny badge */}
      <div className="mx-auto mb-2 w-fit select-none rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] sm:text-xs md:text-sm tracking-wider text-white/80 backdrop-blur">
        ✨ hand-picked collections
      </div>

      {/* main heading */}
      <h2
        className="relative mx-auto w-fit text-center
        bg-gradient-to-r from-violet-400 via-cyan-300 to-emerald-300 
        bg-clip-text text-xl sm:text-2xl md:text-4xl lg:text-5xl 
        font-extrabold text-transparent drop-shadow-[0_0_10px_rgba(99,102,241,0.35)]"
      >
        <span className="inline-block animate-[shine_3s_linear_infinite] 
          bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,.8)_40%,rgba(255,255,255,0)_60%)] 
          bg-[length:250%_100%] bg-clip-text">
          {text}
        </span>

        {/* underline (responsive width) */}
        <span className="absolute -bottom-1 md:-bottom-2 left-1/2 h-[2px] md:h-[4px] lg:h-[5px] w-2/3 sm:w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent blur-[1px]"></span>
        <span className="absolute -bottom-1 md:-bottom-2 left-1/2 h-px w-[70%] sm:w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>

        {/* sparkle */}
        <span className="absolute -right-3 md:-right-4 -top-2 md:-top-3 block h-3 w-3 sm:h-4 sm:w-4 animate-[twinkle_2.2s_ease-in-out_infinite] [filter:drop-shadow(0_0_8px_rgba(255,255,255,.8))]">
          <svg viewBox="0 0 24 24" className="h-full w-full fill-white/90">
            <path d="M12 2l1.8 4.7L18 8.5l-4.2 1.8L12 15l-1.8-4.7L6 8.5l4.2-1.8L12 2z" />
          </svg>
        </span>
      </h2>

      {/* sub text */}
      <p className="mx-auto mt-2 sm:mt-3 max-w-xs sm:max-w-lg md:max-w-2xl text-center text-[11px] sm:text-sm md:text-base text-white/70 px-2">
        phones, laptops, earbuds—everything you love, curated for you.
      </p>

      {/* gradient line */}
      <div className="mx-auto mt-3 sm:mt-5 h-px w-10/12 sm:w-11/12 max-w-xl md:max-w-2xl bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
    </div>
  );
};

export default SectionTitle;
