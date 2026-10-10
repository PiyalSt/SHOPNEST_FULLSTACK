import React, { useEffect, useState } from "react";
import assets from "../assets/assets";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsLaptop } from "react-icons/bs";
import { ImHeadphones } from "react-icons/im";
import { FiWatch } from "react-icons/fi";
import axios from "axios";
import Cart from "../components/Cart";

const Categories = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products");

      setProducts(res.data.products);
    };
    fetchData();
  }, []);
  console.log(products);

  return (
    <div className="px-10">
      <div className="mt-10">
        <div className="w-full space-y-6">
          <div className="text-sm md:text-base font-semibold text-slate-800">
            Home / <span className="text-blue-400"> Categories</span>
          </div>
          <div className="w-full h-100 rounded-2xl relative">
            <img
              className="w-full h-full object-cover object-center rounded-2xl"
              src={assets.categories_banner}
              alt="categories_banner"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-400/10 py-8 px-10 rounded-lg shadow-2xl backdrop-blur-md space-y-3">
              <p className="text-white text-xs font-bold py-2 px-4 rounded-full bg-green-400/50 animate-bounce w-fit flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-50"></div>
                EXPLORE OUR COLLECTION
              </p>
              <h2 className="text-6xl font-bold text-white">
                Find Your Perfect Style.
              </h2>
              <p className="text-xl text-blue-100">
                Discover products made for your lifestyle, all in one place.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="py-10 flex gap-2">
            <div>
              <div className="w-2 h-full bg-blue-400 rounded-full"></div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800">
              <span className="text-blue-400">Sub </span>
              Categories
            </h2>
          </div>
          <div className="px-10 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-10">
            <div className="w-full flex items-center gap-3 bg-blue-100/40 py-4 px-10 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 border-r-2 border-blue-300 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100/50">
                <IoPhonePortraitOutline className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800">
                  Smartphones
                </h4>
              </div>
            </div>
            <div className="w-full flex items-center gap-3 bg-blue-100/40 py-4 px-10 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 border-r-2 border-blue-300 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100/50">
                <BsLaptop className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800">Laptops</h4>
              </div>
            </div>
            <div className="w-full flex items-center gap-3 bg-blue-100/40 py-4 px-10 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 border-r-2 border-blue-300 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100/50">
                <ImHeadphones className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800">Headphones</h4>
              </div>
            </div>
            <div className="w-full flex items-center gap-3 bg-blue-100/40 py-4 px-10 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 border-r-2 border-blue-300 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100/50">
                <FiWatch className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800">
                  Smart Watches
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center border-b-2 border-blue-100 py-2">
            <div>
              <h4 className="text-xl font-bold text-slate-800">Filter</h4>
            </div>
            <div>
              <select
                name="price"
                className="border-2 border-blue-200 py-2 px-4 rounded-md text-slate-800 font-medium outline-0"
              >
                <option className="font-medium text-slate-800" selected>
                  Sort by
                </option>
                <option className="font-medium text-slate-800">
                  Price: Low to High
                </option>
                <option className="font-medium text-slate-800">
                  Price: High to Low
                </option>
                <option className="font-medium text-slate-800">
                  Top Rated
                </option>
              </select>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="w-3/12 h-full py-5 space-y-3 border-r-2 border-blue-200">
              <div className="w-full flex flex-col ml-10">
                <h2 className="text-lg text-slate-800 font-bold pb-2">
                  Categories
                </h2>
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="electronics"
                    className="flex gap-2 items-center text-base font-medium text-slate-700"
                  >
                    <input
                      className="accent-slate-800"
                      id="electronics"
                      type="checkbox"
                    />
                    Electronics
                  </label>
                  <label
                    htmlFor="clothes"
                    className="flex gap-2 items-center text-base font-medium text-slate-700"
                  >
                    <input
                      className="accent-slate-800"
                      id="clothes"
                      type="checkbox"
                    />
                    Clothes
                  </label>
                  <label
                    htmlFor="beauty"
                    className="flex gap-2 items-center text-base font-medium text-slate-700"
                  >
                    <input
                      className="accent-slate-800"
                      id="beauty"
                      type="checkbox"
                    />
                    Beauty
                  </label>
                </div>
              </div>
              <div className="w-full flex flex-col ml-10">
                <h2 className="text-lg text-slate-800 font-bold pb-2">Brand</h2>
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="popular"
                    className="flex gap-2 items-center text-base font-medium text-slate-700"
                  >
                    <input
                      className="accent-slate-800"
                      id="popular"
                      type="checkbox"
                    />
                    Popular
                  </label>
                </div>
              </div>
              <div className="px-10">
                <h2 className="text-lg text-slate-800 font-bold pb-2">
                  Price Range
                </h2>
                <div className="flex flex-col space-y-2">
                  <input
                    className="accent-slate-800"
                    type="range"
                    min={0}
                    max={1000}
                  />
                </div>
              </div>
              <div className="px-10 mt-10">
                <button className="w-full py-2 bg-blue-400 text-blue-50 font-bold rounded-full active:scale-95 transition-all duration-200 cursor-pointer">
                  Clear Filters
                </button>
              </div>
            </div>
            <div className="w-9/12 py-5">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 pb-12">
                  {products.map((item) => (
                    <Cart
                      key={item.id}
                      productName={item.title}
                      price={item.price * 10}
                      discountPrice={item.discountPercentage}
                      thumbnail={item.thumbnail}
                    />
                  ))}
                </div>
              </div>
              <div>
                <div className="w-full flex justify-center">
                  <div className="flex gap-2">
                    <button className="py-2 px-4 border-2 border-blue-200 text-slate-800 font-medium text-sm rounded-md active:scale-95 transition-all duration-200 cursor-pointer">Previous</button>
                    <div className="py-2 px-4 border-2 border-blue-200 text-slate-800 font-medium text-sm rounded-md cursor-pointer">1</div>
                    <div className="py-2 px-4 border-2 border-blue-200 text-slate-800 font-medium text-sm rounded-md cursor-pointer">2</div>
                    <div className="py-2 px-4 border-2 border-blue-200 text-slate-800 font-medium text-sm rounded-md cursor-pointer">3</div>
                    <button className="py-2 px-4 border-2 border-blue-200 text-slate-800 font-medium text-sm rounded-md active:scale-95 transition-all duration-200 cursor-pointer">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
