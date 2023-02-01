import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import DetailProduct from './pages/DetailProduct/DetailProduct';
import Home from './pages/Home/Home';
import PageProduct from './pages/PageProduct/PageProduct';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/detail' element={<DetailProduct />} />
        <Route path='/products' element={<PageProduct />} />
      </Routes>
    </div>
  );
}

export default App;