import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiBox, BiCart } from "react-icons/bi";
import { CiCoins1 } from "react-icons/ci";
import { TbShoppingBagEdit } from "react-icons/tb";
import { MdOutlineDeleteSweep } from "react-icons/md";


const Admin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://localhost:4000/api/shopnest/v1/products",
      );

      setProducts(res.data.products);
    };

    fetchData();
  }, []);

  // console.log(products); // show all poducts

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex gap-2 px-4">
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
            <h4 className="text-blue-50 text-lg font-medium">Total Products</h4>
            <p className="text-blue-50 text-2xl font-medium">{products.length}</p>
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

      <div className="flex-1 h-full px-4 mt-10 space-y-2 overflow-y-auto">
        {products.map((item) => (
          <div key={item._id} className="w-full py-2 border-2 border-blue-100/60 rounded-md flex items-center justify-between px-10">
            <div className="w-4/12 flex items-center gap-2">
              <div className="w-16 h-16 rounded-md bg-blue-100">image</div>
              <h2 className="text-base font-medium text-blue-100">
                {item.name}
              </h2>
            </div>
            <div className="text-base font-medium text-blue-100">
              <div className="text-start">
                Price: ${item.price}
              </div>
            </div>
            <div className="space-x-2">
              <button className="py-2 px-4 rounded-md bg-blue-600 text-blue-100 cursor-pointer active:scale-95 transition-all duration-200">
                <TbShoppingBagEdit size={20} />
              </button>
              <button className="py-2 px-4 rounded-md bg-red-500 text-blue-100 cursor-pointer active:scale-95 transition-all duration-200">
                <MdOutlineDeleteSweep size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
