import { HLSVideo } from './HLSVideo';

export default function Stats() {
  return (
    <section className="relative w-full py-32 bg-black overflow-hidden px-4 md:px-12 lg:px-24">
      <HLSVideo 
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 saturate-0"
      />
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            {[
              { value: "200+", label: "Sites launched" },
              { value: "98%", label: "Client satisfaction" },
              { value: "3.2x", label: "More conversions" },
              { value: "5 days", label: "Average delivery" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white">{stat.value}</div>
                <div className="text-white/60 font-body font-light text-sm tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
