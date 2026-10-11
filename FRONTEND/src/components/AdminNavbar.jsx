import React from "react";
import { FaBoxOpen, FaOpencart } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { RiFunctionAddFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router";

const AdminNavbar = () => {
  return (
    <div className="space-y-2">
      <Link to={'/admin'} className="flex items-center justify-center gap-2 py-2 bg-blue-100 rounded-md active:scale-95 transition-all duration-200 cursor-pointer">
        <RxDashboard />
        <p className="font-medium text-slate-800">Dashboard</p>
      </Link>
        <Link to={'createproducts'} className="flex items-center justify-center gap-2 py-2 bg-blue-100 rounded-md active:scale-95 transition-all duration-200 cursor-pointer">
          <RiFunctionAddFill />
          <p className="font-medium text-slate-800">Create Products</p>
        </Link>
      <div className="flex items-center justify-center gap-2 py-2 bg-blue-100 rounded-md active:scale-95 transition-all duration-200 cursor-pointer">
        <FaOpencart />
        <p className="font-medium text-slate-800">Orders</p>
      </div>
      <div className="flex items-center justify-center gap-2 py-2 bg-blue-100 rounded-md active:scale-95 transition-all duration-200 cursor-pointer">
        <LuUsers />
        <p className="font-medium text-slate-800">Users</p>
      </div>
    </div>
  );
};

export default AdminNavbar;
