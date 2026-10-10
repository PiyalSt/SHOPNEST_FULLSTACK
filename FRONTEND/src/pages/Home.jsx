import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Cart from "../components/Cart";
import axios from "axios";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { RxLoop } from "react-icons/rx";
import { BiSupport } from "react-icons/bi";

const Home = () => {
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
    <div>
      <div className="w-full bg-slate-100">
        <Hero />
      </div>
      <div>
        <div className="px-10 py-10 flex gap-2">
          <div>
            <div className="w-2 h-full bg-blue-400 rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold text-slate-800">
            <span className="text-blue-400">Featured </span>
            Categories
          </h2>
        </div>
        <Category />
      </div>
      <div>
        <div className="px-10 py-10 flex gap-2">
          <div>
            <div className="w-2 h-full bg-blue-400 rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold text-slate-800">
            <span className="text-blue-400">Our </span>
            Best Products
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 pb-12">
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
      <div className="px-10 pb-12">
        <div className="w-full py-4 px-4 bg-blue-400/90 rounded-2xl flex flex-col items-center space-y-6 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Summer Sale - Up to 40% Off
          </h2>
          <button className="py-2 px-8 bg-blue-50 rounded-lg font-semibold text-sm md:text-base text-slate-800 cursor-pointer active:scale-95 transition-all duration-200">
            Shop Sale
          </button>
        </div>
      </div>

      <div>
        <div className="px-10 py-10 flex gap-2">
          <div>
            <div className="w-2 h-full bg-blue-400 rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold text-slate-800">
            <span className="text-blue-400">Why </span>
            Choose Us
          </h2>
        </div>
        <div className="px-10 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-10">
          <div className="w-full flex gap-2 bg-blue-100/40 py-4 px-10 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 border-r-2 border-blue-300 shadow-lg">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100/50">
              <TbTruckDelivery className="text-blue-400 text-2xl" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-800">
                Free Shipping
              </h4>
              <p className="text-sm font-medium text-slate-500">
                On All Orders Over SSO
              </p>
            </div>
          </div>
          <div className="w-full flex gap-2 bg-blue-100/40 py-4 px-10 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 border-r-2 border-blue-300 shadow-lg">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100/50">
              <MdOutlinePrivacyTip className="text-blue-400 text-2xl" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-800">
                Secure Payment
              </h4>
              <p className="text-sm font-medium text-slate-500">
                100% Secure & Sale
              </p>
            </div>
          </div>
          <div className="w-full flex gap-2 bg-blue-100/40 py-4 px-10 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 border-r-2 border-blue-300 shadow-lg">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100/50">
              <RxLoop className="text-blue-400 text-2xl" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-800">
                Easy Returns
              </h4>
              <p className="text-sm font-medium text-slate-500">
                Free Returns Within 7 Days
              </p>
            </div>
          </div>
          <div className="w-full flex gap-2 bg-blue-100/40 py-4 px-10 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 border-r-2 border-blue-300 shadow-lg">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100/50">
              <BiSupport className="text-blue-400 text-2xl" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-800">
                24/7 Support
              </h4>
              <p className="text-sm font-medium text-slate-500">
                We're Here For You
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
