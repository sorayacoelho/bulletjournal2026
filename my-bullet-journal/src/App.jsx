import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import logo from './images/Designer.png'
import './App.css'
import Card from "./components/Card.jsx"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Month from "./pages/Month.jsx";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Day from "./pages/Day.jsx"
import Week from "./pages/Week.jsx"




function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month" element={<Month />} />
        <Route path="/week" element={<Week />} />
        <Route path="/day/:date" element={<Day />} />
      </Routes>
    
  );
}

export default App;

