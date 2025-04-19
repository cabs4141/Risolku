import React from "react";
import "./App.css";

const risolData = [
  {
    name: "Risol Mayo Telur",
    description: "Kombinasi sempurna antara telur rebus, mayonais creamy, dan kulit risol renyah. Lezat untuk sarapan ataupun camilan sore.",
    price: "Rp3.000/pcs",
    image: "/images/mayo2.png",
    waText: "Halo, saya mau pesan Risol Mayo Telur",
  },
  {
    name: "Risol Sayur",
    description: "Isi sayur segar wortel dan buncis, ditumis gurih. Cocok buat kamu yang pengen camilan enak tapi tetap sehat.",
    price: "Rp3.000/pcs",
    image: "/images/sayur.png",
    waText: "Halo, saya mau pesan Risol Sayur",
  },
  {
    name: "Risol Mayo Beef ",
    description: "Sosis sapi yang gurih dipadukan dengan mayonais lembut, dibungkus kulit krispi. Favorit semua umur!",
    price: "Rp3.000/pcs",
    image: "/images/beef2.jpg",
    waText: "Halo, saya mau pesan Risol Beef",
  },
];

function App() {
  return (
    <div>
      {/* <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white"> */}
      <div className="min-h-screen bg-[#4A0000] text-white">
        {/* Hero Section */}
        <section className="text-center py-20 px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-yellow-300 mb-6">Risol Ku</h1>
          <div className="marquee-container text-gray-300 text-sm sm:text-base font-medium">
            <span className="marquee-text">Jam buka: Senin – Sabtu. Khusus wilayah Selong dan sekitar. Yuk, pesan sekarang!. 📌 Jl. TGH. Zainuddin Abdul Majid No.151</span>
          </div>

          {/* <div className="overflow-hidden">
            <p className="text-gray-300 text-lg animate-slide-left">Jam buka: Senin – Sabtu. Khusus wilayah Selong dan sekitar. Yuk, pesan sekarang!. 📌 Jl. TGH. Zainuddin Abdul Majid No.151</p>
          </div> */}
        </section>

        {/* Intro */}
        {/* <section className="max-w-3xl mx-auto px-4 text-center mb-16">
          <p className="text-lg text-gray-400"></p>
        </section> */}

        {/* Risol Sections */}
        {risolData.map((item, index) => (
          <section key={index} className={`max-w-6xl mx-auto my-16 px-4 grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
            <img src={item.image} alt={item.name} className="w-full h-60 object-cover rounded-2xl shadow-lg" />
            <div>
              <h2 className="text-3xl font-serif text-yellow-300 mb-4">{item.name}</h2>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
                <p className="text-lg text-white">{item.price}</p>
                <a href={`https://wa.me/6285927748171?text=${encodeURIComponent(item.waText)}`} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition text-sm">
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="text-center py-16 px-4 border-t border-gray-800 mt-16">
          <h3 className="text-2xl mb-2 text-yellow-300 font-serif">Tunggu apa lagi?</h3>
          <p className="text-gray-400 mb-6">Klik tombol di atas dan pesan sekarang.</p>
          <p className="text-gray-600 text-sm"> © 2025 Risol Ku. Makasih udah mampir, ya!</p>
        </section>
      </div>
    </div>
  );
}

export default App;
