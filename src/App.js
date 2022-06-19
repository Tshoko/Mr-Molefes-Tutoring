
import React from 'react';
import './App.css';
import Nav from './components/navbar/Navbar';
import About from './components/pages/about/About';
import Classes from './components/pages/classes/Classes';
import Hero from './components/pages/Hero/Hero';
import Team from './components/pages/team/Team';
import Testimonials from './components/pages/testimonials/Testimonials';

function App() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Classes/>
      <Team/>
      <Testimonials/>
      <Hero/>
    </div>
  );
}

export default App;
