export default function FeaturesChess() {
  return (
    <section className="py-24 bg-black px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white">
            Pro features. Zero complexity.
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-heading italic text-white">Designed to convert. Built to perform.</h3>
              <p className="text-white/60 font-body font-light text-base leading-relaxed max-w-md">
                Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.
              </p>
              <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body font-medium mt-4 hover:bg-white/10 transition-colors">
                Learn more
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="liquid-glass rounded-2xl overflow-hidden p-2">
                <img src="https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif" alt="Feature 1" className="w-full h-auto rounded-xl" />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-heading italic text-white">It gets smarter. Automatically.</h3>
              <p className="text-white/60 font-body font-light text-base leading-relaxed max-w-md">
                Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.
              </p>
              <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body font-medium mt-4 hover:bg-white/10 transition-colors">
                See how it works
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="liquid-glass rounded-2xl overflow-hidden p-2">
                <img src="https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif" alt="Feature 2" className="w-full h-auto rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
