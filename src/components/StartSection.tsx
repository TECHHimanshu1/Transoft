import { HLSVideo } from './HLSVideo';

export default function StartSection() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center py-32 bg-black overflow-hidden">
      <HLSVideo 
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto min-h-[500px] justify-center">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          How It Works
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white mb-6">
          You dream it. We ship it.
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base mb-10 max-w-xl">
          Share your vision. Our AI handles the rest—wireframes, design, code, launch. All in days, not quarters.
        </p>
        <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body font-medium hover:bg-white/10 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
}
