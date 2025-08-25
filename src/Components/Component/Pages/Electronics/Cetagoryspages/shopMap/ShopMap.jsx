import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const ShopMap = () => {
  const bogura = [24.8469, 89.3750];

  return (
    <div className="mt-10 md:mt-20 min-h-screen bg-gray-50">
      {/* Header / Page Title */}
      <header className="bg-blue-600 text-white py-8 shadow-md">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Our Shop Location
        </h1>
        <p className="text-center mt-2 text-sm sm:text-base">
          Find us easily in Bogura, Bangladesh. Zoom and explore our shop location on the map below.
        </p>
      </header>

      {/* Info Section Above Map */}
      <section className="max-w-4xl mx-auto p-6 sm:p-8 mt-8 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
        <p className="text-gray-700">
          Our store is located in the heart of Bogura city. You can visit us to check out our latest products,
          place orders, or contact us directly. We are open all week!
        </p>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto mt-8">
        <div className="w-full h-[500px] md:h-[700px] rounded-xl overflow-hidden shadow-lg">
          <MapContainer
            center={bogura}
            zoom={13}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />

            <Marker position={bogura}>
              <Popup>
                TrendNews 0.2 Shop <br /> Bogura, Bangladesh
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>

      {/* Info Section Below Map */}
      <section className="max-w-4xl mb-6 mx-auto p-6 sm:p-8 mt-8 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact & Hours</h2>
        <p className="text-gray-700 mb-2">
          <strong>Phone:</strong> +880123456789
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> support@gadgetstore.com
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Opening Hours:</strong> Mon-Sat: 10:00 AM - 8:00 PM
        </p>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default ShopMap;
