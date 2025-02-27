import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="bg-fut-black text-fut-offwhite">
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}