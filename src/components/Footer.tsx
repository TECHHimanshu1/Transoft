import { Server } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020617] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Server className="w-6 h-6 text-[#D4AF37]" />
          <div>
            <h2 className="text-lg font-display font-bold tracking-wider text-white leading-none">TRANSOFT</h2>
            <p className="text-[8px] text-[#D4AF37] tracking-[0.2em] uppercase">Enabling IT</p>
          </div>
        </div>
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Transoft Infotech. All rights reserved.</p>
        <div className="flex gap-4 text-sm text-slate-500">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
