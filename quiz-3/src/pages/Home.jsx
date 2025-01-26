import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  //   Retrieve Data
  useEffect(() => {
    axios
      .get("https://quiz-api-rho.vercel.app/api/mobile-apps")
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //    Utils
  const formatPrice = (price) => `Rp ${price.toLocaleString("id-ID")},-`;
  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  const getPlatformInfo = (isAndroid, isIos) => {
    if (isAndroid && isIos) return "Android & iOS";
    if (isAndroid) return "Android";
    if (isIos) return "iOS";
    return "Unknown Platform";
  };

  return (
    <section className="bg-gray-200 p-5">
      <div className="container mx-auto mt-10">
        <h1 className="text-xl font-bold ">Find your Games that you need!</h1>
      </div>
      <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
        {/* Batas awal Card section */}

        {data.map((res) => (
          <div key={res._id} className="mt-10 h-72 w-150 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={res.image_url} className="w-2/5 bg-cover bg-center bg-landscape object-cover" />
            <div className="w-3/5 p-4 ">
              <h1 className="text-gray-900 font-bold text-2xl">{res.name}</h1>
              <small>{res.release_year}</small>
              <p className="mt-2 text-gray-600 text-sm">{truncateDescription(res.description, 20)}</p>
              <div className=" item-center mt-2 text-gray-500">
                <span>{res.category}, </span>
                <span>{res.size} MB</span>
                <span>, {getPlatformInfo(res.is_android_app, res.is_ios_app)}</span>
              </div>
              <div className="flex item-center justify-between mt-3">
                <h1 className="text-gray-700 font-bold text-xl">{res.price === 0 ? "Free" : formatPrice(res.price)}</h1>
                <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">{res.rating} Ratings</button>
              </div>
            </div>
          </div>
        ))}
        {/* Batas akhir Card section */}
      </div>
    </section>
  );
};

export default Home;
