import React from "react";
import "./App.css";
import Nav from "./components/navbar/Navbar";
import About from "./components/pages/about/About";
import Classes from "./components/pages/classes/Classes";
import ContactUs from "./components/pages/Contact/ContactUs";
import Footer from "./components/pages/footer/Footer";
import Hero from "./components/pages/Hero/Hero";
import Pricing from "./components/pages/pricing/Pricing";
import Team from "./components/pages/team/Team";
import Testimonials from "./components/pages/testimonials/Testimonials";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Pricing />
      <Team />
      <ContactUs />
      <Testimonials />

      <Footer />
    </div>
  );
}

export default App;
