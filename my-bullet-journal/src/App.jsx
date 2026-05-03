import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import logo from './images/Designer.png'
import './App.css'
import Card from "./components/Card.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Day from "./pages/Day.jsx";
import Home from "./pages/Home.jsx";
import Week from "./pages/Week.jsx";
import Month from "./pages/Month.jsx";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
    <section>
      <Header />
        <div className="cards-grid" >
          <Card className="card_month" title="Month" description="Check your month schedule" />
          <Card className="card_week" title="Week" description="Check your week schedule" />
          <Card className="card_day" title="Day" description="Check your day schedule" />
        </div>
      <Footer />
    </section>
    </>
  );
}

export default App;