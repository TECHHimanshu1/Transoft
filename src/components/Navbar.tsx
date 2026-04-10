import { useState, useEffect } from 'react';
import { Menu, X, Server } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'advanced-glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white flex items-center justify-center clipped-corner">
            <Server className="w-5 h-5 text-[#050B14]" />
          </div>
          <span className="text-2xl font-rubik font-bold tracking-tight text-white lowercase">transoft</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Hardware', 'Infrastructure', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[16px] font-sans font-medium text-white/80 hover:text-[#D4AF37] transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a href="#contact" className="clipped-corner px-6 py-2.5 bg-[#D4AF37] text-[#050B14] text-sm font-rubik font-bold uppercase hover:bg-[#F3E5AB] transition-colors">
            Contact Us
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-[#050B14]/95 backdrop-blur-xl z-40 flex flex-col p-6 gap-6">
          {['Home', 'Hardware', 'Infrastructure', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-rubik font-bold text-white hover:text-[#D4AF37] transition-colors">
              {item}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="clipped-corner px-6 py-4 bg-[#D4AF37] text-[#050B14] text-center font-rubik font-bold uppercase mt-4">
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
