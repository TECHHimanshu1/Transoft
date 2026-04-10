import { motion } from 'motion/react';
import { Building2, GraduationCap, Landmark, Briefcase } from 'lucide-react';

const industries = [
  { icon: <Building2 className="w-8 h-8" />, name: "Corporate" },
  { icon: <GraduationCap className="w-8 h-8" />, name: "Education" },
  { icon: <Landmark className="w-8 h-8" />, name: "Government" },
  { icon: <Briefcase className="w-8 h-8" />, name: "SMEs" },
];

export default function Industries() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">Industries We <span className="text-gradient-blue">Empower</span></h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-pointer"
            >
              <div className="p-4 rounded-full bg-[#0A192F] text-slate-300 group-hover:text-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all">
                {ind.icon}
              </div>
              <h3 className="font-bold text-white tracking-wide">{ind.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
