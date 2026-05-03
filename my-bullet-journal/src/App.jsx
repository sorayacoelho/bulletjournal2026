import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import logo from './images/Designer.png'
import './App.css'
import Card from "./components/Card.jsx"




function App() {
  return (
    <>
    <section>
      <header className="header">
        <img src={logo} alt="Logo" className="logo"/>
        <h1>Weekly Journal Soraya</h1>
      </header>
        <div className="cards-grid" >
          <Card className="card_month" title="Month" description="Check your month schedule" />
          <Card className="card_week" title="Week" description="Check your week schedule" />
          <Card className="card_day" title="Day" description="Check your day schedule" />
        </div>
    </section>
    </>
  );
}

export default App;