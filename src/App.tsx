import React from 'react';
import Navbar from './components/Navbar';
import PremiumHero from './components/PremiumHero';
import Services from './components/Services';
import HardwareShowcase from './components/HardwareShowcase';
import Infrastructure from './components/Infrastructure';
import SmartClassroom from './components/SmartClassroom';
import Trust from './components/Trust';
import Industries from './components/Industries';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050B14] text-slate-200 selection:bg-[#D4AF37] selection:text-[#050B14]">
      <Navbar />
      <main>
        <PremiumHero />
        <Services />
        <HardwareShowcase />
        <Infrastructure />
        <SmartClassroom />
        <Trust />
        <Industries />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
