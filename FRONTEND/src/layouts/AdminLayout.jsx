import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div className="px-10 flex gap-4 h-screen py-10 bg-slate-200">
      <div className='w-2/12 px-4 py-4 bg-slate-300 rounded-md'>
        <AdminNavbar />
      </div>
      <div className='w-10/12 py-4 bg-slate-800 rounded-md'>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout