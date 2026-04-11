import { Server } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050B14] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
             <img src="/src/assets/logo.png" alt="Transoft Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h2 className="text-lg font-display font-bold tracking-wider text-white leading-none uppercase">TRANSOFT</h2>
            <p className="text-[8px] text-[#D4AF37] tracking-[0.2em] uppercase">Infotech</p>
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
