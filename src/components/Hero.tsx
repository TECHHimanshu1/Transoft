import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start justify-start overflow-hidden pt-32 pb-20 bg-[#000000]">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4"
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/80 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent z-0"></div>

      {/* Grid System */}
      <div className="absolute inset-0 z-0 hidden md:block pointer-events-none">
        <div className="absolute left-[25%] top-0 bottom-0 w-px bg-white/10"></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/10"></div>
        <div className="absolute left-[75%] top-0 bottom-0 w-px bg-white/10"></div>
      </div>

      {/* Central Glow */}
      <div className="absolute top-[-10%] left-[40%] w-[600px] h-[300px] bg-[#D4AF37]/20 rounded-[100%] blur-[60px] z-0 pointer-events-none"></div>
      <div className="absolute top-[20%] left-[60%] w-[400px] h-[400px] bg-[#0A192F]/40 rounded-[100%] blur-[80px] z-0 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-between">
        
        {/* Top Content Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start mt-12 lg:mt-24 relative">
          
          {/* Left Content */}
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-eyebrow font-bold text-[11px] tracking-widest text-[#D4AF37] uppercase mb-6">
              Enterprise-Ready Infrastructure
            </div>
            
            <h1 className="font-rubik font-bold text-[42px] md:text-[64px] leading-[1.05] tracking-[-0.04em] text-white uppercase mb-6">
              Swift and Secure <br /> IT Transport<span className="text-[#D4AF37]">.</span>
            </h1>
            
            <p className="font-sans text-[14px] text-white/70 max-w-[512px] leading-relaxed mb-10">
              Deploy scalable hardware, secure networks, and smart environments. We build the <span className="font-heading italic text-[16px] text-white">foundation</span> for your digital future with industry-leading precision.
            </p>
            
            <div className="flex items-center gap-4">
              <button className="clipped-corner bg-[#D4AF37] text-[#050B14] font-rubik font-bold uppercase text-sm px-8 py-4 flex items-center gap-2 hover:bg-[#F3E5AB] transition-colors">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button className="clipped-corner bg-white text-[#050B14] font-rubik font-bold uppercase text-sm px-8 py-4 hover:bg-gray-200 transition-colors">
                View Solutions
              </button>
            </div>
          </motion.div>

          {/* Floating Liquid Glass Card */}
          <motion.div 
            className="hidden lg:flex flex-col justify-between liquid-glass w-[200px] h-[200px] p-6 rounded-2xl translate-y-[-50px] mt-12 lg:mt-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: -50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="font-sans text-[14px] text-white/80 font-medium tracking-widest">
              [ 2026 ]
            </div>
            <div>
              <h3 className="font-sans text-[18px] text-white leading-tight mb-2">
                Built by <span className="font-heading italic text-[#D4AF37]">Industry</span> Professionals
              </h3>
              <p className="font-sans text-[11px] text-white/50">
                Certified experts in enterprise networking and hardware deployment.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Widget */}
        <motion.div 
          className="mt-24 lg:mt-32 max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="advanced-glass rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-rubik font-bold text-white text-lg mb-1">Book a Free Consultation</h4>
              <p className="font-sans text-sm text-white/60 mb-3">Speak with our infrastructure architects today.</p>
              <a href="#contact" className="text-[#D4AF37] font-sans text-sm font-medium hover:underline">Schedule Call &rarr;</a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
