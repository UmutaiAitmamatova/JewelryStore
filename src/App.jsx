import React from 'react';
import { Header, Footer } from './components'
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className='wrapper'>
      <Header/>

      <div className="content">
        <h1>Hello world!</h1>
      </div>

      <Footer/>
    </div>
  );
}

export default App;

//Router