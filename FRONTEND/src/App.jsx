import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Categories from './pages/Categories'
import ProductDetails from './pages/ProductDetails'
import Cartpage from './pages/Cartpage'
import Admin from './pages/Admin'
import AdminLayout from './layouts/AdminLayout'
import CreateProduct from './pages/CreateProduct'
import Register from './pages/Register'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      {/* Toaster */}
      <Toaster />

      {/* Routes */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/cartpage' element={<Cartpage />} />
            <Route path='/product/:id' element={<ProductDetails />} />

            <Route path='/admin' element={<AdminLayout />}>
              <Route index element={<Admin />} />
              <Route path='createproducts' element={<CreateProduct />} />
            </Route>
          </Route>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App