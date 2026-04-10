import { HLSVideo } from './HLSVideo';

export default function CtaFooter() {
  return (
    <section className="relative w-full min-h-[800px] flex flex-col justify-end bg-black overflow-hidden">
      <HLSVideo 
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pt-32 pb-8 w-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.85] text-white mb-8">
          Your next website starts here.
        </h2>
        <p className="text-white/60 font-body font-light text-base md:text-lg mb-12 max-w-xl">
          Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-32">
          <button className="liquid-glass-strong rounded-full px-8 py-4 text-white font-body font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
            Book a Call
          </button>
          <button className="bg-white text-black rounded-full px-8 py-4 font-body font-medium hover:bg-white/90 transition-colors w-full sm:w-auto">
            View Pricing
          </button>
        </div>

        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-xs font-body">
            &copy; 2026 Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-white/40 text-xs font-body">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
