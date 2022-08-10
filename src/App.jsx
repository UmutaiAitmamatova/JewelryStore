import React from 'react';
import axios from 'axios'
import { Header, Footer } from './components';
import { Home, Cart, Rings, WristWatch, Earrings, Bracelet, Favorite } from './pages'
import {  Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setRings, setEarrings, setWatch, setBracelet } from './redux/actions/rings'

function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {dispatch(setRings(data.rings))});
    axios.get('http://localhost:3000/db.json').then(({ data }) => {dispatch(setWatch(data.wrist_watch))});
    axios.get('http://localhost:3000/db.json').then(({ data }) => {dispatch(setEarrings(data.earrings))});
    axios.get('http://localhost:3000/db.json').then(({ data }) => {dispatch(setBracelet(data.bracelet))});
  }, [])

  return (
    <div className='wrapper'>
        <Header />
  
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />

          <Route path="/rings" element={<Rings />} />
          <Route path="/wrist_watch" element={<WristWatch/>} />
          <Route path="/earrings" element={<Earrings/>} />
          <Route path="/bracelet" element={<Bracelet/>} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;