import React from "react";

const RisolSection = () => {
  return (
    <section className="w-full py-12 px-4 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Gambar Risol */}
        <img
          src="/images/risol-keju.jpg" // ganti dengan gambar kamu
          alt="Risol Keju Mozarella"
          className="w-full rounded-2xl shadow-lg object-cover"
        />

        {/* Deskripsi */}
        <div>
          <h2 className="text-3xl font-serif mb-4">Risol Keju Mozarella</h2>
          <p className="text-gray-700 text-lg mb-4">Gurih di luar, lumer di dalam! Risol isi keju mozarella ini cocok banget buat camilan sore kamu. Digoreng dengan minyak bersih dan tanpa bahan pengawet.</p>
          <p className="text-xl font-semibold text-gray-800 mb-6">Harga: Rp8.000/pcs</p>

          {/* Tombol WA */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20Risol%20Keju%20Mozarella"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all"
          >
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default RisolSection;
