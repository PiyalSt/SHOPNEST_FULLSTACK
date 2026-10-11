import React from "react";
import { BiBox, BiCart } from "react-icons/bi";
import { CiCoins1 } from "react-icons/ci";


const Admin = () => {
  return (
      <div className="">
        <div className="flex gap-2 px-4">
          <div className="w-full flex justify-between py-6 px-8 bg-slate-700 rounded-md">
            <div className="space-y-2">
              <h4 className="text-blue-50 text-lg font-medium">Total Sales</h4>
              <p className="text-blue-50 text-2xl font-medium">$986,46</p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="rounded-md flex items-center justify-end">
                <CiCoins1 className="text-4xl text-blue-50" />
              </div>
              <div>
                <p className="text-sm text-slate-50 font-medium">last week</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between py-6 px-8 bg-slate-700 rounded-md">
            <div className="space-y-2">
              <h4 className="text-blue-50 text-lg font-medium">Total Orders</h4>
              <p className="text-blue-50 text-2xl font-medium">986</p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="rounded-md flex items-center justify-end">
                <BiCart className="text-3xl text-blue-50" />
              </div>
              <div>
                <p className="text-sm text-slate-50 font-medium">last week</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between py-6 px-8 bg-slate-700 rounded-md">
            <div className="space-y-2">
              <h4 className="text-blue-50 text-lg font-medium">
                Total Products
              </h4>
              <p className="text-blue-50 text-2xl font-medium">586</p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="rounded-md flex items-center justify-end">
                <BiBox className="text-3xl text-blue-50" />
              </div>
              <div>
                <p className="text-sm text-slate-50 font-medium">last week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Admin;
