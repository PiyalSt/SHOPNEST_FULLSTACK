import React from "react";

const CreateProduct = () => {

  

  return (
    <div className="px-10">
      <div className="pb-4">
        <h2 className="text-lg font-medium text-blue-50">Create New Product</h2>
      </div>
      <div className="space-y-4">
        <div className="flex gap-10">
          <div className="w-1/2 space-y-2">
            <h4 className="text-blue-50">Product Name</h4>
            <input
              className="w-full py-2 px-4 border-2 border-blue-200/50 rounded-md outline-0 text-blue-50"
              type="text"
              placeholder="Product name"
            />
          </div>
          <div className="w-1/2 space-y-2">
            <h4 className="text-blue-50">Category</h4>
            <input
              className="w-full py-2 px-4 border-2 border-blue-200/50 rounded-md outline-0 text-blue-50"
              type="text"
              placeholder="Category"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-1/2 space-y-2">
            <h4 className="text-blue-50">Brand Name</h4>
            <input
              className="w-full py-2 px-4 border-2 border-blue-200/50 rounded-md outline-0 text-blue-50"
              type="text"
              placeholder="Brand name"
            />
          </div>
          <div className="w-1/2 space-y-2">
            <h4 className="text-blue-50">Price</h4>
            <input
              className="w-full py-2 px-4 border-2 border-blue-200/50 rounded-md outline-0 text-blue-50"
              type="number"
              placeholder="Price"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full space-y-2">
            <h4 className="text-blue-50">Description</h4>
            <textarea
              className="w-full py-2 px-4 border-2 border-blue-200/50 rounded-md outline-0 text-blue-50"
              type="text"
              placeholder="Brand name"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full space-y-2">
            <h4 className="text-blue-50">Description</h4>
            <input
              className="w-full py-2 px-4 border-2 border-blue-200/50 rounded-md outline-0 text-blue-50"
              type="file"
              placeholder="Add image"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full flex justify-end gap-4">
            <button className="py-2 px-4 bg-amber-400 rounded-md text-blue-50 font-semibold active:scale-95 transition-all duration-200 cursor-pointer">
              Cancel
            </button>
            <button className="py-2 px-4 bg-blue-400 rounded-md text-blue-50 font-semibold active:scale-95 transition-all duration-200 cursor-pointer">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
