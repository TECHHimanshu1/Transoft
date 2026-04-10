import { motion } from 'motion/react';
import { Presentation, Video, Speaker } from 'lucide-react';

export default function SmartClassroom() {
  return (
    <section className="py-24 bg-[#020617] relative" id="smart-classroom">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">SMART <span className="text-gradient-gold">Classroom</span> Solutions</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Transforming educational and corporate training spaces with interactive, high-tech environments.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="lg:col-span-7 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group perspective-1000"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-full h-full transform-style-3d"
              whileHover={{ rotateY: 5, rotateX: 2 }}
            >
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" alt="Smart Classroom" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] to-transparent"></div>
              
              {/* Floating UI Elements */}
              <div className="absolute top-10 left-10 glass-panel p-4 rounded-lg translate-z-12 animate-bounce" style={{ animationDuration: '3s' }}>
                <Presentation className="w-8 h-8 text-[#D4AF37] mb-2" />
                <div className="text-xs font-bold text-white">Interactive Board Active</div>
              </div>
              <div className="absolute bottom-10 right-10 glass-panel p-4 rounded-lg translate-z-12 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <Video className="w-8 h-8 text-blue-400 mb-2" />
                <div className="text-xs font-bold text-white">4K PTZ Camera Sync</div>
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 space-y-6">
            {[
              { icon: <Presentation />, title: "Interactive Flat Panels", desc: "High-resolution touch displays for engaging presentations." },
              { icon: <Video />, title: "Video Conferencing", desc: "Crystal clear audio-video setups for hybrid learning." },
              { icon: <Speaker />, title: "Pro AV Systems", desc: "Immersive audio solutions for auditoriums and large spaces." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#0A192F] flex items-center justify-center text-[#D4AF37] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
