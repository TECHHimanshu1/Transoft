import { motion } from 'motion/react';

const brands = ["DELL", "HP", "LENOVO", "CISCO", "ARUBA", "FORTINET", "SOPHOS", "MICROSOFT"];

export default function Trust() {
  return (
    <section className="py-12 border-y border-white/5 bg-[#050B14]/50 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Trusted Partners & Brands</p>
      </div>
      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex gap-16 items-center px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="text-2xl md:text-4xl font-display font-bold text-slate-700 hover:text-[#D4AF37] transition-colors cursor-default">
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
