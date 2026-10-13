import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiCart, BiMenu, BiSearch, BiUser } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi";
import { Link } from "react-router";

const Navbar = () => {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-between bg-white py-4 px-10">
      <div>
        <Link
          to={"/"}
          className="font-semibold text-2xl sm:text-3xl md:text-4xl text-slate-800"
        >
          SHOPNEST
        </Link>
      </div>
      <div className="w-[40%] hidden md:flex items-center bg-slate-200/80 gap-2 py-2 px-4 rounded-md">
        <input
          className="w-full outline-0 font-medium text-slate-800"
          type="text"
          placeholder="Search"
        />
        <BiSearch className="text-xl text-slate-800 cursor-pointer active:scale-95" />
      </div>
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer active:scale-95 text-slate-800 hover:text-blue-400 transition-all duration-200">
          <div className="relative">
            <HiOutlineHeart className="text-2xl" />
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-blue-400 text-white flex items-center justify-center text-xs">
              4
            </div>
          </div>
          <p className="text-sm  font-medium">Wishlist</p>
        </div>
        <Link
          to={"/cartpage"}
          className="flex items-center relative cursor-pointer active:scale-95 transition-all duration-200"
        >
          <BiCart className="text-2xl text-slate-800 hover:text-blue-400" />
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-blue-400 text-white flex items-center justify-center text-xs">
            4
          </div>
        </Link>
        <div ref={menuRef} className="relative">
          <BiUser
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text-slate-800 hover:text-blue-400 cursor-pointer transition-colors duration-200 active:scale-95"
          />

          {isOpen && (
            <div className="w-60 absolute top-8 right-0 bg-blue-100 rounded-md py-4 px-4 space-y-2">
              <div className="text-center py-2 hover:bg-blue-50 hover:shadow rounded-md cursor-pointer font-medium text-slate-800 active:scale-95 transition-all duration-200">
                Profile
              </div>
              <div className="text-center py-2 hover:bg-blue-50 hover:shadow rounded-md cursor-pointer font-medium text-slate-800 active:scale-95 transition-all duration-200">
                Setting
              </div>
              <div className="text-center py-2 hover:bg-blue-50 hover:shadow rounded-md cursor-pointer font-medium text-slate-800 active:scale-95 transition-all duration-200">
                Sign In
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE DESIGN */}
      <div className="block md:hidden">
        <BiMenu className="text-3xl text-slate-800 hover:text-blue-400 active:scale-95 transition-all duration-200 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
