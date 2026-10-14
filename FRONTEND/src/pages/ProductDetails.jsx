import React, { useEffect, useState } from "react";
import assets from "../assets/assets";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { BiMinus, BiPlus } from "react-icons/bi";
import Cart from "../components/Cart";
import axios from "axios";

const ProductDetails = () => {

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
      <div className="px-10 space-y-4">
        <div>
          <div className="text-sm md:text-base font-semibold text-slate-800">
            Home / Product /{" "}
            <span className="text-blue-400"> Wireless Headphones</span>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row pt-8 pb-16">
          <div className="w-full md:w-5/12 flex flex-col gap-2 relative">
            {/* Main Image */}
            <div className="w-full h-100 overflow-hidden rounded-lg bg-blue-100/40">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
                src={assets.headphones}
                alt="Headphones"
              />
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-white group ">
                <FaRegHeart className="text-xl text-blue-400 z-30 group-active:scale-95 group-hover:cursor-pointer" />
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="w-full grid grid-cols-4 gap-4 ">
              <div className="aspect-square overflow-hidden rounded-md bg-blue-100/40 cursor-pointer active:scale-95 transition-all duration-200">
                <img
                  className="w-full h-full object-cover"
                  src={assets.headphones}
                  alt="Headphones thumbnail 1"
                />
              </div>

              <div className="aspect-square overflow-hidden rounded-md bg-blue-100/40 cursor-pointer active:scale-95 transition-all duration-200">
                <img
                  className="w-full h-full object-cover"
                  src={assets.headphones}
                  alt="Headphones thumbnail 2"
                />
              </div>

              <div className="aspect-square overflow-hidden rounded-md bg-blue-100/40 cursor-pointer active:scale-95 transition-all duration-200">
                <img
                  className="w-full h-full object-cover"
                  src={assets.headphones}
                  alt="Headphones thumbnail 3"
                />
              </div>

              <div className="aspect-square overflow-hidden rounded-md bg-blue-100/40 cursor-pointer active:scale-95 transition-all duration-200">
                <img
                  className="w-full h-full object-cover"
                  src={assets.headphones}
                  alt="Headphones thumbnail 4"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12 py-5 space-y-2 px-10">
            <h2 className="text-3xl text-slate-800 font-bold">
              Premium Wireless Noise _ Cancelling Headphones
            </h2>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-slate-800">$436.00</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet suscipit ex quod ratione ab eum, animi hic
                necessitatibus id dolorum sequi quia, facere, recusandae beatae
                blanditiis maiores! Veniam, repellendus tempora.
              </p>
            </div>
            <div>
              <h4 className="text-base font-medium">Product Option</h4>
              <div className="flex gap-4 mt-2">
                <p className="text-sm font-medium">Color: </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-400 border-2 border-white outline-2 outline-slate-400"></div>
                    <p className="text-sm">Mattle Black</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-400 border-2 border-white outline-2 outline-slate-400"></div>
                    <p className="text-sm">Mattle Blue</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-base font-medium">
              Size: 
              {/* <span className="font-normal">N/A</span> */}
              <div className="flex gap-2">
                <button className="py-1.5 px-4 bg-slate-800 text-slate-50 rounded-md hover:bg-transparent border-2 border-transparent hover:border-slate-800 hover:text-slate-800 cursor-pointer transition-all duration-200 active:scale-95">XL</button>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 outline-2 outline-green-400/80 border-2 border-white"></div>
                <p className="text-base font-medium text-slate-700">432 in stock</p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2 mt-10">
              <button className="py-2 bg-blue-400 text-sm font-semibold rounded-md text-white active:scale-95 transition-all duration-200 cursor-pointer hover:bg-blue-500">
                Add to Cart
              </button>
              <button className="py-2 bg-blue-400 text-sm font-semibold rounded-md text-white active:scale-95 transition-all duration-200 cursor-pointer hover:bg-blue-500">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-10 py-10 flex gap-2">
          <div>
            <div className="w-2 h-full bg-blue-400 rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold text-slate-800">
            <span className="text-blue-400">Related </span>
            Products
          </h2>
        </div>
        <div className="px-10">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-10 pb-12">
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
      </div>
    </div>
  );
};

export default ProductDetails;
