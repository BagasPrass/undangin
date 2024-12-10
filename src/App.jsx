import React from "react";

const App = () => {
  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/bgZkCWT5mAEmpw5c9", "_blank");
  };

  return (
    <div className="flex flex-col gap-4  items-center h-fit bg-[#FF9BD2] font-poppins ">
      <div className="flex lg:h-48 h-20 bg-white lg:bg-desktop-home bg-desktop-mobile w-full bg-cover bg-center"></div>
      <div className="flex lg:flex-row flex-col gap-4 lg:py-10 py-2">
        <div className="max-w-sm lg:max-w-2xl bg-[#F8F4EC] rounded-lg shadow-lg p-6 lg:mx-0 mx-3">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Undangan Arisan
          </h1>
          <p className="text-gray-600 mb-2">
            Mari bergabung bersama keluarga besar dalam acara spesial ini!
          </p>
          <ul className="text-gray-600 mb-4 flex flex-col gap-2 text-sm">
            <li>
              <strong>📅 Tanggal:</strong> Minggu, 16 Febreuari 2025
            </li>
            <li>
              <strong>⏰ Waktu:</strong> 09:00 WIB
            </li>
            <li>
              <strong>📍 Lokasi:</strong> Resto Kalibatur Salatiga
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.432576884157!2d110.5173533!3d-7.305201700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a79763d92bde7%3A0x1f4bb23733e7f381!2sResto%20Kalibatur%20Salatiga!5e0!3m2!1sid!2sid!4v1733824555772!5m2!1sid!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mt-4"
              ></iframe>
            </li>
          </ul>
          <button
            onClick={handleLocationClick}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Detail Lokasi
          </button>
        </div>
        <div class="text-center bg-red-50 rounded-lg p-6 lg:max-w-md max-w-sm lg:mx-0 mx-4 shadow flex flex-col lg:h-52 h-full">
          <h3 class="font-bold text-red-500">Jangan Sampai Terlewatkan!</h3>
          <p class="mt-4 text-gray-700">
            Bergabunglah dengan kami untuk mempererat silaturahmi keluarga.
            Acara ini akan penuh dengan kebahagiaan, canda tawa, dan arisan
            menarik!
          </p>
          <p class="mt-4 text-gray-700 italic font-bold">
            "Selalu Rahayu Tetap Lestari"
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center h-7 bg-[#F8F4EC] ">
        <footer className="w-full text-center">&copy; Bagassssie</footer>
      </div>
    </div>
  );
};

export default App;
