import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import WhoCanApply from "./components/WhoCanApply";
import Investors from "./components/Investors";
import FeaturedStartups from "./components/FeaturedStartups";
import Forms from "./components/Forms";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <WhoCanApply />
      <Investors />
      <FeaturedStartups />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
