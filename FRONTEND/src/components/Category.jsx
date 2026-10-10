import React from "react";
import assets from "../assets/assets";

const Category = () => {
  return (
    <>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 px-10">
        <div className="w-full overflow-hidden rounded-2xl relative group">
          <img
            className="object-cover rounded-2xl cursor-pointer active:scale-95 transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-105"
            src={assets.electronics}
            alt=""
          />
          <div className="w-full absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 py-4 px-6 bg-slate-800/50">
            <h4 className="text-2xl font-semibold text-slate-50">
              Electronics
            </h4>
            <p className="text-lg font-medium text-slate-100">Explore</p>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-2xl relative group">
          <img
            className="object-cover rounded-2xl cursor-pointer active:scale-95 transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-105"
            src={assets.fashion01}
            alt=""
          />
          <div className="w-full absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 py-4 px-6 bg-slate-800/50">
            <h4 className="text-2xl font-semibold text-slate-50">Fashion</h4>
            <p className="text-lg font-medium text-slate-100">Explore</p>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-2xl relative group">
          <img
            className="object-cover rounded-2xl cursor-pointer active:scale-95 transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-105"
            src={assets.accessories}
            alt=""
          />
          <div className="w-full absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 py-4 px-6 bg-slate-800/50">
            <h4 className="text-2xl font-semibold text-slate-50">
              Accessories
            </h4>
            <p className="text-lg font-medium text-slate-100">Explore</p>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-2xl relative group">
          <img
            className="object-cover rounded-2xl cursor-pointer active:scale-95 transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-105"
            src={assets.lifestyle}
            alt=""
          />
          <div className="w-full absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 py-4 px-6 bg-slate-800/50">
            <h4 className="text-2xl font-semibold text-slate-50">
              Home & Lifestyle
            </h4>
            <p className="text-lg font-medium text-slate-100">Explore</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
