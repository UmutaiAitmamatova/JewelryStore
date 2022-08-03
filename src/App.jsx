import React from 'react';
import { Header, Footer } from './components';
import { Home, Cart, Rings, WristWatch, Earrings, Bracelet, Favorite } from './pages'
import {  Routes, Route, Link } from "react-router-dom";

function App() {
  const [product, setProduct] = React.useState([]);

  //пустой массив для useEffect говорит что это Component Didmount
  //Будет выполняться при первом рендере
  React.useEffect(() => {
    fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
      setProduct(json.product);
    });
  }, [])

  console.log(product);


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