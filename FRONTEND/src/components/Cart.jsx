import React from "react";
import assets from "../assets/assets";
import { FaStar } from "react-icons/fa6";

const Cart = ({ productName, price, thumbnail, discountPrice }) => {
  return (
    <div className="w-full border-2 border-slate-400 rounded-2xl">
      <div className="bg-slate-200/50 w-full h-80">
        <img
          className="w-full h-full object-cover"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="m-4 space-y-2">
        <h4 className="text-xl font-semibold text-slate-800">
          {productName}
        </h4>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-lg text-amber-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-lg font-medium text-slate-800">4.5</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-2xl text-slate-800">${(price * (discountPrice / 100)).toFixed(2)}</p>
          <p className="text-lg line-through text-red-400">${(price).toFixed(2)}</p>
        </div>
      </div>
      <div className="m-4">
        <button className="w-full py-3 bg-blue-400 text-slate-100 font-semibold rounded-md active:scale-95 transition-all duration-200 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
