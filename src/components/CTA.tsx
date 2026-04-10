import { motion } from 'motion/react';
import { PhoneCall, MessageCircle, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] to-[#050B14] z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000')] opacity-10 mix-blend-overlay z-0"></div>
        
        {/* Glowing Edges */}
        <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-3xl z-10 shadow-[inset_0_0_50px_rgba(212,175,55,0.1)]"></div>
        
        <div className="relative z-20 p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Need IT Infrastructure for <br className="hidden md:block"/> Your Organization?
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
            Get enterprise-grade hardware and networking solutions tailored to your specific requirements.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919837066344" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#128C7E] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)]">
              <MessageCircle className="w-5 h-5" /> WhatsApp Now
            </a>
            <a href="tel:+919837066344" className="px-8 py-4 glass-panel-gold text-[#D4AF37] font-bold rounded-sm hover:bg-[#D4AF37] hover:text-[#050B14] transition-all flex items-center gap-2">
              <PhoneCall className="w-5 h-5" /> Call Now
            </a>
            <a href="#contact" className="px-8 py-4 bg-white text-[#050B14] font-bold rounded-sm hover:bg-slate-200 transition-all flex items-center gap-2">
              Request Quote <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
