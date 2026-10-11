import React from "react";
import assets from "../assets/assets";
import { FaDeleteLeft, FaMinus, FaPlus } from "react-icons/fa6";

const Cartpage = () => {
  return (
    <div className="px-10">
      <div className="space-y-4 py-4">
        <div className="text-sm md:text-base font-semibold text-slate-800">
          Home / {" "}
          <span className="text-blue-400"> Cart</span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-4/6 py-4 space-y-2">
          <div className="grid grid-cols-4 py-2 px-4 justify-items-center border-2 border-blue-200 rounded-md">
            <div>
              <p>Cart Items</p>
            </div>
            <div>
              <p>Total Price</p>
            </div>
            <div>
              <p>Item Total</p>
            </div>
          </div>
          <div className="grid grid-cols-4 py-2 px-4 justify-items-center items-center border-2 border-blue-200 rounded-md">
            <div className="flex items-center gap-4">
              <img className="w-30 h-30 rounded-md" src={assets.electronics} alt="" />
              <div className="space-y-1">
                <h4 className="text-base font-semibold">Product Name</h4>
                <p className="text-lg font-bold">$545.00</p>
              </div>
            </div>
            <div className="text-xl font-bold">
              $435.00
            </div>
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 flex items-center justify-center border-2 rounded-md border-blue-200 active:scale-95 transition-all cursor-pointer">
                <FaPlus />
              </div>
              <div className="w-8 h-8 flex items-center justify-center border-2 rounded-md border-blue-200">1</div>
              <div className="w-8 h-8 flex items-center justify-center border-2 rounded-md border-blue-200 active:scale-95 transition-all cursor-pointer">
                <FaMinus />
              </div>
            </div>
            <div className="ml-20">
              <FaDeleteLeft size={30} className="text-red-400 active:scale-95 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-2/6 py-4 px-4 ">
          <div className="w-full bg-blue-100/50 py-8 px-8 rounded-md shadow-lg shadow-blue-300/20">
          <div className="border-b-2 space-y-2 pb-3">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Subtotal</h2>
              <p className="text-base font-medium">$1047.00</p>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Discount</h2>
              <p className="text-base font-medium">$123.00</p>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Delivery Fee</h2>
              <p className="text-base font-medium">$23.00</p>
            </div>
          </div>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Total Price</h2>
              <p className="text-base font-medium">$399.00</p>
            </div>

            <div className="flex flex-col gap-2 mt-10">
              <button className="py-2 bg-blue-400 rounded-md text-slate-100 active:scale-95 transition-all duration-200 cursor-pointer font-semibold">Proceed to Checkout</button>
              <button className="py-2 border-2 border-blue-200 rounded-md text-slate-800 active:scale-95 transition-all duration-200 cursor-pointer font-semibold">Continue Shopping</button>
            </div>
          </div>

          <div className="my-10 space-y-2">
            <h2 className="font-medium">Coupon Section</h2>
            <div className="flex gap-2">
              <input className="w-full py-2 px-4 outline-0 border-2 border-blue-200 rounded-md font-medium text-slate-800" type="text" placeholder="Coupon code" />
              <button className="bg-blue-400 text-blue-50 font-medium py-2 px-4 rounded-md cursor-pointer active:scale-95 duration-200 transition-all">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
