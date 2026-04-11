import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function PremiumHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050B14]">
      {/* Spline Background with Seamless Edges */}
      <div className="absolute inset-0 z-0 bg-[#050B14]">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center bg-[#050B14]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
          </div>
        }>
          <div className="w-full h-full relative" style={{ 
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
          }}>
            <Spline
              scene="https://prod.spline.design/pQPCPBon67DazIck/scene.splinecode" 
              onLoad={() => console.log('Spline: Premium Infrastructure Active')}
            />
          </div>
        </Suspense>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1 border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-full mb-6">
             <span className="text-[#D4AF37] font-mono text-[10px] uppercase tracking-[0.3em] animate-pulse">Infrastructure Online // Optimized</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase italic drop-shadow-2xl">
            Next-Gen <br /> 
            <span className="text-gradient-gold">Infrastructure</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/70 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Deploying high-precision IT solutions with immersive 3D architectures and real-time backend synchronization.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center pointer-events-auto">
            <button className="px-8 py-4 bg-[#D4AF37] text-[#050B14] font-bold uppercase tracking-widest hover:bg-[#F3E5AB] transition-all duration-300 transform hover:scale-105 clipped-corner shadow-[0_0_30px_rgba(212,175,55,0.3)]">
               Launch System 
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-105 clipped-corner">
               Diagnostics 
            </button>
          </div>
        </motion.div>
      </div>

      {/* API Status Hud */}
      <div className="absolute top-24 right-10 z-20 pointer-events-none hidden lg:block">
        <div className="premium-glass p-6 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37] animate-pulse"></div>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">Live Connection</span>
           </div>
           <div className="space-y-2">
              <div className="flex justify-between gap-8">
                 <span className="text-[9px] font-mono text-white/30 uppercase">Node</span>
                 <span className="text-[9px] font-mono text-[#D4AF37]">TRANS_INFRA_01</span>
              </div>
              <div className="flex justify-between gap-8">
                 <span className="text-[9px] font-mono text-white/30 uppercase">Endpoint</span>
                 <span className="text-[9px] font-mono text-[#D4AF37]">/api/spline</span>
              </div>
              <div className="w-full h-px bg-[#D4AF37]/10 my-2"></div>
              <div className="flex justify-between gap-8">
                 <span className="text-[9px] font-mono text-white/30 uppercase">Status</span>
                 <span className="text-[10px] font-mono text-green-400 font-bold uppercase tracking-widest">Ready</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
