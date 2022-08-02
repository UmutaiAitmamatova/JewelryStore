import React from 'react';
import { Header, Footer } from './components';
import { Home, Cart, Rings, WristWatch, Earrings, Bracelet, Favorite } from './pages'
import {  Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='wrapper'>
        <Header />
  
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/rings" element={<Rings />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wrist_watch" element={<WristWatch />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/bracelet" element={<Bracelet />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;