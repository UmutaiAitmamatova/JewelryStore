import React from 'react';
import axios from 'axios'
import { Header, Footer } from './components';
import { Home, Cart, Rings, WristWatch, Earrings, Bracelet, Favorite } from './pages'
import {  Routes, Route, Link } from "react-router-dom";

function App() {
  const [rings, setRings] = React.useState([]);
  //пустой массив для useEffect говорит что это Component Didmount
  //Будет выполняться при первом рендере
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setRings(data.rings);
    });
  }, [])


  const [watch, setWatch] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setWatch(data.wrist_watch);
    });

  }, [])
  const [earrings, setEarrings] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setEarrings(data.earrings);
    });
  }, [])


  const [bracelet, setBracelet] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setBracelet(data.bracelet);
    });
  }, [])

  return (
    <div className='wrapper'>
        <Header />
  
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />

          <Route path="/rings" element={<Rings items={rings}/>} />
          <Route path="/wrist_watch" element={<WristWatch items={watch}/>} />
          <Route path="/earrings" element={<Earrings items={earrings}/>} />
          <Route path="/bracelet" element={<Bracelet items={bracelet}/>} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;