import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full px-10 py-10">
      <div className="flex items-center justify-between gap-4 border-b-2 border-slate-200 pb-10">
        <div className="w-1/2">
          <h2 className="text-3xl text-slate-800 font-semibold">
            Newsletter Section
          </h2>
          <p className="text-base font-medium text-slate-600">
            Discover the latest deals and lifestyle with Shopnest.
          </p>
        </div>
        <div className="w-1/2 flex items-center gap-2">
          <input
            className="w-full py-2 px-4 border border-slate-400 rounded-lg font-medium outline-0 bg-white text-slate-800"
            type="email"
            placeholder="Enter email address"
          />
          <button className="py-2 px-6 bg-black text-white font-medium rounded-lg cursor-pointer active:scale-95 transition-all duration-200">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between gap-4 py-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-800">SHOPNEST</h2>
          <p className="text-base font-medium text-slate-700 mt-2">
            Your one-stop shop for fashion and lifestyle. Discover, shop, and
            shine with SHOPNEST.
          </p>
          <div className="flex items-center gap-8 mt-10">
            <FaFacebookF className="text-2xl text-slate-800 hover:text-blue-400 active:scale-95 transition-all duration-200 cursor-pointer" />
            <FaInstagram className="text-2xl text-slate-800 hover:text-blue-400 active:scale-95 transition-all duration-200 cursor-pointer" />
            <FaTwitter className="text-2xl text-slate-800 hover:text-blue-400 active:scale-95 transition-all duration-200 cursor-pointer" />
            <FaPinterest className="text-2xl text-slate-800 hover:text-blue-400 active:scale-95 transition-all duration-200 cursor-pointer" />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-2">
            <h2 className="font-medium text-lg">Quick Links</h2>
            <p className="text-base text-slate-800 hover:text-slate-900 hover:underline cursor-pointer">
              Home
            </p>
            <p className="text-base text-slate-800 hover:text-slate-900 hover:underline cursor-pointer">
              Shop
            </p>
            <p className="text-base text-slate-800 hover:text-slate-900 hover:underline cursor-pointer">
              Categories
            </p>
            <p className="text-base text-slate-800 hover:text-slate-900 hover:underline cursor-pointer">
              About
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="font-medium text-lg">Categories</h2>
            <p className="text-base text-slate-800 hover:text-slate-900 hover:underline cursor-pointer">
              Fashion
            </p>
            <p className="text-base text-slate-800 hover:text-slate-900 hover:underline cursor-pointer">
              Electronics
            </p>
            <p className="text-base text-slate-800 hover:text-slate-900 hover:underline cursor-pointer">
              Accessories
            </p>
            <p className="text-base text-slate-800 hover:text-slate-900 hover:underline cursor-pointer">
              Home & Lifestyle
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="font-medium text-lg">Customer Support</h2>
            <p className="text-base text-slate-800 hover:text-slate-900 hover:underline cursor-pointer">
              Help Center
            </p>
            <p className="text-base text-slate-800 hover:text-slate-900 hover:underline cursor-pointer">
              Returns
            </p>
            <p className="text-base text-slate-800 hover:text-slate-900 hover:underline cursor-pointer">
              Contact Us
            </p>
            <p className="text-base text-slate-800 hover:text-slate-900 hover:underline cursor-pointer">
              Nothings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
