import React from 'react';
import { Header, Footer } from './components';
import { Home, Cart } from './pages'
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='wrapper'>
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app/:title" element={<Cart />} />
          </Routes>

        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

//Router