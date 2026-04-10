import { motion } from 'motion/react';
import { Wifi, Shield, Cable, Database } from 'lucide-react';

const features = [
  { icon: <Cable />, title: "Structured Cabling" },
  { icon: <Database />, title: "LAN/WAN Setup" },
  { icon: <Wifi />, title: "Wireless Deployment" },
  { icon: <Shield />, title: "Security Systems" },
];

export default function Infrastructure() {
  return (
    <section className="py-24 relative overflow-hidden" id="infrastructure">
      {/* Animated Network Lines Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path 
            d="M0,100 Q200,200 400,100 T800,100 T1200,100 T1600,100" 
            fill="none" 
            stroke="url(#grad1)" 
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M0,300 Q300,100 600,300 T1200,300 T1800,300" 
            fill="none" 
            stroke="url(#grad1)" 
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Robust <span className="text-gradient-blue">Networking</span> & Infrastructure</h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              We design, deploy, and manage scalable network infrastructures that form the backbone of modern enterprises. From complex structured cabling to secure wireless environments.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 glass-panel p-4 rounded-lg border-l-2 border-l-[#D4AF37]"
                >
                  <div className="text-blue-400">{f.icon}</div>
                  <span className="font-medium text-white">{f.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl glass-panel overflow-hidden flex items-center justify-center border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
             
             {/* Abstract 3D Network Nodes */}
             <div className="relative w-full h-full perspective-1000">
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-blue-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  animate={{ rotateZ: 360, rotateX: 20 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Database className="w-10 h-10 text-blue-400" />
                </motion.div>

                {/* Orbiting Nodes */}
                {[0, 120, 240].map((deg, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#D4AF37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                    style={{ originX: '150px', originY: '0px' }}
                    animate={{ rotateZ: [deg, deg + 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
