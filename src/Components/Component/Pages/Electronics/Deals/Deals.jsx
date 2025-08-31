import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SectionTitle = ({ title, subtitle }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
    {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
  </div>
);

const DealCard = ({ item }) => (

  <div className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transform transition duration-500 hover:scale-105 border border-gray-100">
    <Link to={`/details/${item.id}`}>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl p-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-b-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      </div>
      <div className="mt-3 px-3 pb-3 space-y-1">
        <h3 className="font-semibold text-gray-900 line-clamp-1">{item.name}</h3>
        <div className="flex items-center justify-between px-2">
          <span className="font-bold justify-center flex">${item.price}</span>
          <button className="mt-3 w-1/2 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 cursor-pointer">About</button>
        </div>




      </div>
    </Link>
  </div>

);

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [featFilter, setFeatFilter] = useState({ type: "category", value: "special" });

  const DEVICES = [
    { key: "watch", label: "Accessories", icon: "⌚" },
    { key: "earbuds", label: "Electronics", icon: "🎧" },
    { key: "phone", label: "Phones", icon: "📱" },
    { key: "laptop", label: "Laptops", icon: "💻" },
  ];

  const FEATURED_FILTERS = {
    category: ["special", "newArrival", "topSell", "popular"],
    categoryMore: ["Offered", "Consumer", "Deals", "Home"],
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/Phone.json");
        const data = await res.json();
        if (!cancelled) setDeals(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const matchesSearch = (item) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      item.name?.toLowerCase().includes(s) ||
      item.brand?.toLowerCase().includes(s) ||
      item.device?.toLowerCase().includes(s)
    );
  };

  const latestFiltered = useMemo(() =>
    deals
      .filter(d => selectedDevice ? d.device === selectedDevice : true)
      .filter(matchesSearch)
    , [deals, selectedDevice, search]);

  const featuredFiltered = useMemo(() =>
    deals
      .filter(d => {
        const { type, value } = featFilter;
        if (type === "category") return d.category === value;
        if (type === "categoryMore") return d.categoryMore === value;
        return false;
      })
      .filter(matchesSearch)
    , [deals, featFilter, search]);

  return (
    <div className="mt-20 min-h-screen bg-white">

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-gradient-to-br from-orange-300 via-pink-400 to-purple-300" />
          <motion.div
            className="absolute -right-20 -top-24 h-72 w-72 bg-orange-200 rounded-full mix-blend-multiply opacity-50"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute right-20 top-10 h-24 w-24 bg-pink-200 rounded-full mix-blend-multiply opacity-70"
            animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute left-28 top-20 h-20 w-20 bg-purple-200 rounded-full mix-blend-multiply opacity-60"
            animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-sm">Find Daily Deals</h1>
              <p className="mt-3 text-white/90 max-w-xl">
                Get the best coupons and exclusive daily deals from over 100+ brands. Start shopping today.
              </p>
              <div className="mt-6">
                <div className="flex items-center bg-white rounded-full shadow-sm p-1">
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search deals"
                    className="flex-1 px-4 py-3 rounded-full outline-none"
                  />
                  <button className="px-5 py-2.5 rounded-full bg-rose-500 text-white font-semibold hover:opacity-95">Search</button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative h-72 w-72 rounded-full bg-white/20 flex items-center justify-center shadow-xl">
                <div className="h-64 w-64 rounded-full bg-white/90 flex items-center justify-center text-6xl">🛍️</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Latest Deals */}
      <section className="py-12">
        <SectionTitle title="Latest Deals" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {DEVICES.map(d => {
              const active = selectedDevice === d.key;
              return (
                <button
                  key={d.key}
                  onClick={() => setSelectedDevice(active ? null : d.key)}
                  className={`flex items-center justify-center gap-2 rounded-2xl border p-4 transition shadow-sm ${active ? "bg-orange-500 text-white border-orange-500" : "bg-white hover:border-orange-300 border-gray-200"}`}
                >
                  <span className="text-2xl">{d.icon}</span>
                  <span className="font-medium">{d.label}</span>
                </button>
              )
            })}
          </div>
          {loading ? (
            <div className="py-10 text-center text-gray-500">Loading deals…</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {latestFiltered.map(item => <DealCard key={item.id} item={item} />)}
            </div>
          )}
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-12 bg-gray-50 border-t">
        <SectionTitle title="Feature Deals" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <aside className="md:col-span-3 bg-white rounded-2xl border p-4 space-y-4 sticky top-4">
            <div>
              <h4 className="text-base font-bold text-blue-700 underline mb-4">Category</h4>
              <div className="grid gap-2">
                {FEATURED_FILTERS.category.map(c => (
                  <button
                    key={c}
                    onClick={() => setFeatFilter({ type: "category", value: c })}
                    className={`px-3 py-1.5 rounded-full border text-sm ${featFilter.type === "category" && featFilter.value === c ? "bg-orange-500 text-white border-orange-500" : "bg-white hover:border-orange-300 border-gray-200"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-base font-bold text-blue-700 mb-2 underline">More</h4>
              <div className="grid gap-2">
                {FEATURED_FILTERS.categoryMore.map(c => (
                  <button
                    key={c}
                    onClick={() => setFeatFilter({ type: "categoryMore", value: c })}
                    className={`px-3 py-1.5 rounded-full border text-sm ${featFilter.type === "categoryMore" && featFilter.value === c ? "bg-orange-500 text-white border-orange-500" : "bg-white hover:border-orange-300 border-gray-200"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </aside>
          <div className="md:col-span-9">
            {featuredFiltered.length === 0 ? (
              <div className="text-gray-500 py-10 text-center bg-white rounded-2xl border">No items in this filter.</div>
            ) : (
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              >
                {featuredFiltered.map(item => (
                  <SwiperSlide key={item.id}>
                    <motion.div whileHover={{ scale: 1.05 }} className="transition-shadow duration-300">
                      <DealCard item={item} />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-12">
        <div className="bg-gray-100 py-12 px-4 md:px-12">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
            Get New Deals From Popular Stores
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Shop your favorite brands and grab amazing offers every day. Keep checking to find the latest updates.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {['amazon', 'flipkart', 'ebay', 'aliexpress', 'daraz', 'walmart'].map((store, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="bg-white shadow-lg rounded-2xl p-4 flex items-center justify-center w-28 h-28 transition-transform duration-300"
              >
                <img src={`https://logo.clearbit.com/${store}.com`} alt={store} className="max-h-16 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Save Up To 70% */}
      <section className="pt-10 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Save Up To 70% With Coupon Codes</h3>
            <p className="text-gray-600 mt-2 max-w-xl">
              Discover flash deals from 100+ stores and snag massive savings every day. Apply vouchers at checkout and keep more in your pocket!
            </p>
            <button className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-rose-500 text-white font-semibold shadow hover:opacity-95">
              Explore Deals
              <span aria-hidden>→</span>
            </button>
          </div>
          <div className="flex justify-center relative">
            <div className="relative h-72 w-72 rounded-full bg-white/80 flex items-center justify-center shadow-xl">
              <motion.div className="absolute -left-6 -top-6 h-16 w-16 bg-orange-300 rounded-full" animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} />
              <motion.div className="absolute -right-8 -bottom-8 h-20 w-20 bg-pink-300 rounded-full" animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} />
              <motion.div className="absolute right-4 top-6 h-8 w-8 bg-purple-300 rounded-full" animate={{ y: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity }} />
              <span className="text-5xl animate-pulse">🧡</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-10 pb-6 text-center text-sm text-gray-400">© {new Date().getFullYear()} Daily Deals</footer>
    </div>
  );
};

export default Deals;
